import {
  Maps,
  Search,
  Wrapper,
  TabWidget,
  HomeHeader,
  Custom_Overlay,
  CustomLoader,
} from '@components';
import styles from './styles';
import MapView from 'react-native-maps';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {format as prettyFormat} from 'pretty-format';
import {borrowell_marker, green_marker} from '@assets';
import {PermissionsAndroid, Platform, View} from 'react-native';
import {markerArray, marker_Offers_Array, showToast} from '@utils';
import {borrowell_light_Blue, green, GST, koho} from '@theme';
import React, {useState, useEffect, useRef} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import {fetchBrands, fetchStoresByLocation} from '@services';

const Earn_Rewards = () => {
  const theme: any = useTheme();
  const mapViewRef = useRef<MapView>(null);
  const [coords, setCoords] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState<any>('');
  const [emptySearch, setEmptySearch] = useState<any>('');
  const [stores_logo, setStores_Logo] = useState<any>([]);
  const [currentlatLon, setCurrentlatLon] = useState<any>();
  const {user} = useSelector((state: any) => state.root.user);
  const [modalVisible, setModalVisible] = useState<any>(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);

  const getCurrentLocationApi = () => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        let obj = {lat: latitude, lon: longitude};
        setCurrentlatLon(obj);
        getStores_byLocation();
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

  useEffect(() => {
    getCurrentLocation();
    // Geolocation.getCurrentPosition(info => {
    //   let arr: any = [];
    //   arr.push(info.coords);
    //   setCoords(arr);
    // });
  }, []);

  const getStores_byLocation = () => {
    setLoading(true);
    let params = {
      getLogos: true,
    };
    fetchStoresByLocation(params)
      .then((res: any) => {
        getCoords(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('e..', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCoords = (data: any) => {
    let arr: any = [];
    data?.map((item: any) => {
      arr.push({lat: item?.lat, lng: item?.lng, img: item?.image_url});
      setCoords(arr);
    });
  };

  const onChangeText = (val: any) => {
    setSearchText(val);
  };

  const parseAddress = async (data: any, details: any, setSearchText: any) => {
    try {
      let address = data.description;
      let splitted = address.split(',');
      let serach_Coords = {
        latitude: details?.geometry?.location?.lat,
        longitude: details?.geometry?.location?.lng,
      };
      setSearchText(splitted[0].trim());
      onChangeSearchText();
      // setCoords(serach_Coords);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeSearchText = () => {
    setEmptySearch('');
  };

  const onOpenOverlay = () => {
    setModalVisible(!modalVisible);
  };
  const onLongPressButton = () => {};

  return (
    <Wrapper>
      <HomeHeader
        myTheme={theme}
        title={'Spend & Earn'}
        cardText={'Visit Reward Store'}
        backgroundColor={
          user.user_type == 'Borrowell'
            ? borrowell_light_Blue
            : user.user_type == 'KOHO'
            ? koho
            : green
        }
      />

      <Search
        // mapSearch
        type={searchText}
        onChangeText={onChangeText}
        placeholder={'Search'}
      />

      <View style={GST.ml5}>
        <TabWidget
          colors={theme?.colors}
          secondTabTitle={'Offers'}
          firstTabTitle={'Plastk Merchants'}
          tabSelectedIndex={tabSelectedIndex}
          setTabSelectedIndex={setTabSelectedIndex}
        />
      </View>

      {coords && currentlatLon && !loading && (
        <View style={styles.parent}>
          <View style={styles.child}>
            <Maps
              home
              coords={coords}
              onPress={onOpenOverlay}
              mapViewRef={mapViewRef}
              currentlatLon={currentlatLon}
              onLongPressButton={onLongPressButton}
            />
          </View>
        </View>
      )}

      <Custom_Overlay
        isTransparent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default Earn_Rewards;

{
  /* <View
        style={{
          top: 100,
          zIndex: 100,
          borderRadius: 40,
          flexDirection: 'row',
          marginHorizontal: 10,
          position: 'absolute',
          backgroundColor: light_grey,
        }}>
        <Search
          value
          type={searchText}
          onChangeText={onChangeText}
          setSearchText={setSearchText}
        /> */
}
{
  /* <GooglePlaceComplete
          title={searchText ? emptySearch : 'Search'}
          onChange={(data: any, details: any) =>
            parseAddress(data, details, setSearchText)
          }
        /> */
}
{
  /* <TouchableOpacity style={{marginRight: 20, marginTop: 15}}>
          <AntDesign name={'search1'} color={primaryDarkColor} size={14} />
        </TouchableOpacity>
      </View> */
}
