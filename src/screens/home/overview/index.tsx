import {
  Wrapper,
  TabWidget,
  HomeHeader,
  Home_Section,
  MyContentLoader,
  Text,
  NotchView,
} from '@components';
import {
  navigate,
  fetchForMe,
  fetchBrands,
  fetchNearMe,
  fetchTopPicks,
  update_Impressions,
  fetchStoresByLocation,
  favorite_BMP_Promotion,
  update_Impressions_BMP,
  fetchPromotions_Notification,
  getStoreDetail,
  favorite_topPicks,
  favouriteBAP_Promotion,
} from '@services';
import styles from './styles';
import {showToast, useDebounce} from '@utils';
import {BLACK, green, GST, RF, WHITE} from '@theme';
import BackgroundGeolocation, {
  Subscription,
} from 'react-native-background-geolocation';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {format as prettyFormat} from 'pretty-format';
import {
  View,
  LogBox,
  Platform,
  Pressable,
  ScrollView,
  RefreshControl,
  PermissionsAndroid,
} from 'react-native';
import {
  setForMe,
  setLatLon,
  setFav_Offers,
  setFav_MyProducts,
  setFav_TopPicks,
  setNearMe,
  setTop_Picks,
  setNotification_counter,
  setCard_Number,
} from '@redux';
import Geolocation from 'react-native-geolocation-service';

LogBox.ignoreLogs(['VirtualizedLists should never be']);

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const myTheme: any = useTheme();
  const [searchText, setSearchText] = useState<any>();
  const [isRefreshing, setisRefreshing] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [nearMeLoading, setNearMeLoading] = useState(false);
  const [forMeLoading, setForMeLoading] = useState(false);
  const [topPicksLoading, setTopPicksLoading] = useState(false);
  const [brandsLoading, setBrandsLoading] = useState(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);
  const [favorite_Near_You, setFavorite_Near_You] = useState(false);
  // const [favorite_MyProducts, setFavorite_MyProducts] = useState(false);
  const [favorite_TopPicks, setFavorite_TopPicks] = useState(false);
  const [currentlatLon, setCurrentlatLon] = useState<any>();
  const {
    user,
    stores,
    colorCode,
    notification_counter,
    latLon,
    nearMe,
    forMe,
    top_Picks,
    selectedRadius,
    card_Number,
    fav_Offers,
    fav_MyProducts,
    fav_TopPicks,
    card_Added,
  } = useSelector((state: any) => state.root.user);

  //kinza_integrating_Api's new code
  const [flag, setFlag] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [enabled, setEnabled] = React.useState(true);
  const [top_bar, setTop_Bar] = React.useState(false);
  // const [fav_TopPicks, setFav_TopPicks] = useState<any>([]);
  // const [fav_Offers, setFav_Offers] = useState<any>([]);
  const [stores_logo, setStores_Logo] = useState<any>([]);
  const [brands_logo, setBrands_Logo] = useState<any>([]);
  const [location, setLocation] = React.useState<any>('');
  const [favorite_MyProducts, setFavourite_MyProducts] = useState<any>([]);
  const [storesAndBrands, setStoresAndBrands] = useState<any>([]);
  const [radiusUpdateLoading, setRadiusUpdateLoading] = useState(false);

  //new code

  //currentLocation
  useEffect(() => {
    getCurrentLocation();
  }, []);
  useEffect(() => {
    if (currentlatLon !== undefined) {
      dispatch(setNearMe(''));
      getNearMe_List('');
    }
  }, [currentlatLon]);
  React.useEffect(() => {
    const onLocation: Subscription = BackgroundGeolocation.onLocation(
      location => {
        setLocation(JSON.stringify(location, null, 2));
        dispatch(setLatLon(location));
      },
    );
    const onMotionChange: Subscription = BackgroundGeolocation.onMotionChange(
      event => {
        // setEvent(event.isMoving);
      },
    );
    const onActivityChange: Subscription =
      BackgroundGeolocation.onActivityChange(event => {});
    const onProviderChange: Subscription =
      BackgroundGeolocation.onProviderChange(event => {});
    BackgroundGeolocation.ready({
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 5,
      stopTimeout: 5,
      debug: true,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false,
      startOnBoot: true,
      url: 'http://yourserver.com/locations',
      batchSync: false,
      autoSync: true,
      foregroundService: true,
      headers: {
        'X-FOO': 'bar',
      },
      params: {
        auth_token: 'maybe_your_server_authenticates_via_token_YES?',
      },
    }).then(state => {
      setEnabled(state.enabled);
    });
  }, []);
  React.useEffect(() => {
    BackgroundGeolocation.start();
  }, []);
  const getCurrentLocationApi = () => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        let obj = {lat: latitude, lon: longitude};
        setCurrentlatLon(obj);
      },
      err => console.log(err),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const getCurrentLocation = async () => {
    if (Platform.OS === 'ios') {
      let permiss = await Geolocation.requestAuthorization('whenInUse');
      if (permiss == 'granted') {
        getCurrentLocationApi();
      } else {
        showToast('Failed!', 'Location not Enabled', false);
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Device current location permission',
            message: 'Allow app to get your current location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocationApi();
        } else {
          showToast('Failed!', 'Location not Enabled', false);
        }
      } catch (err) {
        console.warn('eroorrrrr', err);
      }
    }
  };

  //radius
  useEffect(() => {
    if (flag) {
      getlatLon();
    }
  }, [latLon]);
  const getlatLon = async () => {
    if (latLon) {
      let temp: any = [];
      stores?.map((i: any) => {
        let res: any = getDistanceFromlatLonInKm(
          Number(i.lat),
          Number(i.lng),
          latLon?.coords?.latitude,
          latLon?.coords?.longitude,
        );
        if (res <= selectedRadius) {
          temp.push(i._id);
        }
      });
      if (notification_counter < 3) {
        getPromotion_Notification(temp);
      } else if (notification_counter == 3) {
        setRadiusUpdateLoading(false);
      }
    }
  };
  const getPromotion_Notification = (id: any) => {
    setRadiusUpdateLoading(true);
    let params = {
      storeId: id,
    };
    setFlag(false);
    fetchPromotions_Notification(params)
      .then((res: any) => {
        console.log('notify....');
        dispatch(setNotification_counter(res?.data?.counter));
      })
      .catch((err: any) => {
        console.log('notification error...', err.message);
      })
      .finally(() => {
        setRadiusUpdateLoading(false);
        setSubmit(false);
        setFlag(true);
      });
  };
  function getDistanceFromlatLonInKm(
    lat10: any,
    lon10: any,
    lat20: any,
    lon20: any,
  ) {
    let lat1 = Number(lat10);
    let lat2 = Number(lat20);
    let lon1 = Number(lon10);
    let lon2 = Number(lon20);

    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; //in km
    return d * 1000; //in meters
  }
  function deg2rad(deg: any) {
    return deg * (Math.PI / 180);
  }

  //bap
  const getNearMe_List = (filter: any) => {
    setLoading(true);
    setNearMeLoading(true);

    getStores_byLocation();
    // getBrands();
    let params = {
      page: 1,
      paginated: false,
      itemsPerPage: 100,
      searchText: '',
      latitude: currentlatLon?.lat,
      longitude: currentlatLon?.lon,
      // longitude: latLon?.coords?.longitude,
      category: '',
      subcategory: '',
      filter: filter ? filter : '',
    };
    fetchNearMe(params)
      .then((res: any) => {
        getForMe_List(filter);
        getTopPicks(filter);

        if (filter == 'favourite') {
          dispatch(setFav_Offers(res?.data?.data?.items));
        } else {
          dispatch(setNearMe(res?.data?.data?.items));
          updateImpressions_BAP(res?.data?.data?.items[0]);
        }
      })
      .catch((err: any) => {
        // console.log('error....nerme...', err.response);
      })
      .finally(() => {
        setNearMeLoading(false);
        setLoading(false);
        setisRefreshing(false);
      });
  };
  const favorite = (storeId: any, promotionId: any) => {
    let params = {
      store_id: storeId,
      campaign_id: promotionId,
    };
    favouriteBAP_Promotion(params)
      .then((res: any) => {
        setFavorite_Near_You(!favorite_Near_You);
        if (tabSelectedIndex == 1) {
          offers('favourite');
        }
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  const offers = (filter: any) => {
    let params = {
      page: 1,
      paginated: false,
      itemsPerPage: 100,
      searchText: '',
      latitude: currentlatLon?.lat,
      longitude: currentlatLon?.lon,
      category: '',
      subcategory: '',
      filter: filter ? filter : '',
    };
    fetchNearMe(params)
      .then((res: any) => {
        if (filter == 'favourite') {
          dispatch(setFav_Offers(res?.data?.data?.items));
        } else {
          dispatch(setNearMe(res?.data?.data?.items));
          updateImpressions_BAP(res?.data?.data?.items[0]);
        }
      })
      .catch((err: any) => {
        // console.log('error....nerme...', err.response);
      })
      .finally(() => {});
  };

  //bmp
  const getForMe_List = (filter: any) => {
    setForMeLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 10,
      filter: filter ? filter : '',
    };
    fetchForMe(params)
      .then((res: any) => {
        if (filter == 'favourite') {
          dispatch(setFav_MyProducts(res?.data?.data?.items));
        } else {
          dispatch(setForMe(res?.data?.data?.items));
          updateImpressions_BMP(res?.data?.data?.items[0]);
        }
      })
      .catch((err: any) => {
        console.log('err forme ...', err.message);
      })
      .finally(() => {
        setForMeLoading(false);
      });
  };
  const favorite_BMP = (promotionId: any) => {
    let params = {
      campaign_id: promotionId,
    };
    favorite_BMP_Promotion(params)
      .then((res: any) => {
        // getNearMe_List('favourite');
        setFavourite_MyProducts(!favorite_MyProducts);
        if (tabSelectedIndex == 1) {
          getForMe_List('favourite');
        }
      })
      .catch((err: any) => {})
      .finally(() => {});
  };

  //toppicks
  const getTopPicks = (filter: any) => {
    setTopPicksLoading(true);
    let params = {
      filter: filter ? filter : '',
    };
    fetchTopPicks(params)
      .then((res: any) => {
        if (filter == 'favourite') {
          dispatch(setFav_TopPicks(res?.data?.data?.items));
        } else {
          dispatch(setTop_Picks(res?.data?.data?.items));
        }
      })
      .catch((err: any) => {
        // console.log('error....top...', err.response);
      })
      .finally(() => {
        setTopPicksLoading(false);
      });
  };
  const onFavorite_Toppicks = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
    cloneArray = top_Picks.map((a: any) => ({...a}));
    cloneArray.map((item: any, index: any) => {
      if (promotionId === item.campaign_id) {
        cloneArray[index].isFavourite = !cloneArray[index].isFavourite;
      }
    });
    dispatch(setTop_Picks(cloneArray));
    favorite_Toppicks(promotionId);
  };
  const favorite_Toppicks = (promotionId: any) => {
    let params = {
      campaign_id: promotionId,
    };
    favorite_topPicks(params)
      .then((res: any) => {
        setFavorite_TopPicks(!favorite_TopPicks);
      })
      .catch((err: any) => {})
      .finally(() => {});
  };

  //stores & brands
  const getStores_byLocation = () => {
    setBrandsLoading(true);
    let params = {
      getLogos: true,
    };
    fetchStoresByLocation(params)
      .then((res: any) => {
        // setStores_Logo(res?.data?.data);
        getBrands(res?.data?.data);
      })
      .catch((err: any) => {})
      .finally(() => {
        // setBrandsLoading(false);
      });
  };
  const getBrands = (stores: any) => {
    // setBrandsLoading(true);
    let params = {
      keyword: '',
    };
    fetchBrands(params)
      .then((res: any) => {
        setStores_Logo(stores);
        setBrands_Logo(res?.data?.data);
        getMergeArray(stores, res?.data?.data);
      })
      .catch((err: any) => {})
      .finally(() => {
        setBrandsLoading(false);
      });
  };
  const getMergeArray = async (store: any, brand: any) => {
    let newArr = await store.concat(brand);
    setStoresAndBrands(newArr);
  };

  //Fav
  const onFavorite = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
    if (title === 'bap') {
      cloneArray = nearMe.map((a: any) => ({...a}));
    } else {
      cloneArray = forMe.map((a: any) => ({...a}));
    }
    cloneArray.map((item: any, index: any) => {
      if (promotionId === item.campaign_id) {
        cloneArray[index].isFavourite = !cloneArray[index].isFavourite;
      }
    });
    if (title === 'bap') {
      dispatch(setNearMe(cloneArray));
    } else {
      dispatch(setForMe(cloneArray));
    }
    if (title === 'bap') {
      favorite(storeId, promotionId);
    } else {
      favorite_BMP(promotionId);
    }
  };
  const onFavorite_Tab2 = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
    if (title === 'bap') {
      cloneArray = fav_Offers.map((a: any) => ({...a}));
    } else {
      cloneArray = fav_MyProducts.map((a: any) => ({...a}));
    }
    cloneArray.map((item: any, index: any) => {
      if (promotionId === item.campaign_id) {
        cloneArray[index].isFavourite = !cloneArray[index].isFavourite;
      }
    });
    if (title === 'bap') {
      dispatch(setFav_Offers(cloneArray));
    } else {
      dispatch(setFav_MyProducts(cloneArray));
    }
    if (title === 'bap') {
      favorite(storeId, promotionId);
    } else {
      favorite_BMP(promotionId);
    }
  };

  //update
  const updateImpressions_BAP = (data?: any) => {
    let params = {
      data: [
        {
          store_id: data[0]?.store_id,
          promotion_id: data[0]?.campaign_id,
          user_id: user?._id,
        },
      ],
    };
    update_Impressions(params)
      .then((res: any) => {})
      .catch((err: any) => {})
      .finally(() => {});
  };
  const updateImpressions_BMP = (data?: any) => {
    let params = {
      data: [
        {
          promotion_id: data[0]?.campaign_id,
          user_id: user?._id,
        },
      ],
    };
    update_Impressions_BMP(params)
      .then((res: any) => {})
      .catch((err: any) => {})
      .finally(() => {});
  };

  const menuButtonPressed = () => {
    navigation.openDrawer();
  };
  const onOpen_See_All = (type: any, data: any) => {
    navigate('SeeAllScreen', {type: type, data: data});
  };
  const handleRefresh = () => {
    setisRefreshing(true);
    getNearMe_List('');
  };
  const onOpen_Add_Card = () => {
    navigate('Add_Card');
  };
  const onClick_TopBar = () => {
    setTop_Bar(true);
  };

  return (
    <Wrapper isCard={card_Added === true ? false : true}>
      {card_Added === false ? (
        <>
          <NotchView />
          <Pressable
            onPress={onClick_TopBar}
            style={{
              backgroundColor: BLACK,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Platform.OS === 'ios' ? RF(25) : RF(30),
              height: RF(100),
              width: '100%',
              paddingHorizontal: RF(20),
            }}>
            <View style={{width: '50%'}}>
              <Text color={WHITE}>
                Please add a card to confirm rewards collected
              </Text>
            </View>

            <Pressable style={styles.press} onPress={onOpen_Add_Card}>
              <Text>Add a card</Text>
            </Pressable>
          </Pressable>
        </>
      ) : (
        <HomeHeader
          title={'Home'}
          myTheme={myTheme}
          cardText={'Spend & Earn'}
          backgroundColor={colorCode}
          menuButtonPressed={menuButtonPressed}
        />
      )}

      <TabWidget
        colors={myTheme.colors}
        firstTabTitle={'Offers'}
        getOffers={getNearMe_List}
        // getMyProducts={getForMe_List}
        // getTopPicks={getTopPicks}
        secondTabTitle={'Favourites'}
        tabSelectedIndex={tabSelectedIndex}
        setTabSelectedIndex={setTabSelectedIndex}
      />
      {Loading ? (
        <>
          <View style={{marginTop: 10, marginHorizontal: 20, height: 500}}>
            <MyContentLoader />
          </View>
        </>
      ) : (
        <>
          {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>current latitude = {latLon?.coords?.latitude}</Text>
          <Text>current longitude = {latLon?.coords?.longitude}</Text>
        </View> */}

          <ScrollView
            refreshControl={
              <RefreshControl
                enabled={true}
                colors={['#9Bd35A', '#689F38']}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
            style={styles.scrollview}
            showsVerticalScrollIndicator={false}>
            <Home_Section
              forme={forMe}
              fav_MyProducts={fav_MyProducts}
              nearMe={nearMe}
              fav_Offers={fav_Offers}
              topPicks={top_Picks}
              fav_TopPicks={fav_TopPicks}
              onFavorite={onFavorite}
              forMeLoading={forMeLoading}
              nearMeLoading={nearMeLoading}
              brandsLoading={brandsLoading}
              onOpen_See_All={onOpen_See_All}
              storesAndBrands={storesAndBrands}
              topPicksLoading={topPicksLoading}
              setFavorite={setFavorite_Near_You}
              tabSelectedIndex={tabSelectedIndex}
              onFavorite_Toppicks={onFavorite_Toppicks}
              onFavorite_Tab2={onFavorite_Tab2}
            />
            <View style={GST.mb100} />
          </ScrollView>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
