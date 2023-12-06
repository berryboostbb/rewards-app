import {
  Text,
  List,
  Search,
  SeeAll,
  Wrapper,
  HexaGon,
  TabWidget,
  HomeHeader,
  CustomLoader,
  Coloured_Card,
  Campaign_Card,
  ExploreList,
} from '@components';
import styles from './styles';
import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {format as prettyFormat} from 'pretty-format';
import {GST, RF, txt_gray, typography} from '@theme';
import {
  fetchForMe,
  fetchNearMe,
  fetchCategories_BAP,
  fetchCategories_BMP,
  fetchSubCategories_BMP,
  fetchSubCategories_BAP,
  favorite_BMP_Promotion,
} from '@services';
import {setExploreBap, setExploreBmp, setForMe, setNearMe} from '@redux';

const Explore = ({navigation}: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const [type, setType] = useState<any>();
  const [categories, setCategories] = useState([]);
  const [categories_bmp, setCategories_bmp] = useState([]);
  const [category_Id, setCategory_Id] = useState('');
  const [category_Id_bmp, setCategory_Id_bmp] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [subCategories_Bmp, setSubCategories_Bmp] = useState([]);

  const [bap_List, setBap_List] = useState([]);
  const [bmp_List, setBmp_List] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState<any>();
  const [selectedItem, setSelectedItem] = useState<any>(0);
  const [favorite_Card, setFavorite_Card] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<any>(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [favorite_Bmp, setFavorite_Bmp] = useState(false);
  const [favorite_Bap, setFavorite_Bap] = useState(false);
  const {user, colorCode, latLon, explore_Bmp, explore_Bap} = useSelector(
    (state: any) => state.root.user,
  );
  useEffect(() => {
    exploreCategories_BAP();
    exploreCategories_BMP();
  }, []);
  const exploreCategories_BAP = () => {
    setLoading(true);
    let params = {
      paginated: true,
      page: 1,
      itemsPerPage: 5,
      searchText: '',
    };
    fetchCategories_BAP(params)
      .then((res: any) => {
        setCategories(res?.data?.data?.items);
        getBAP_List();
      })
      .catch((err: any) => {
        console.log('error...bap..', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const explore_SubCategories_BAP = (id: any) => {
    setCategory_Id(id);
    setLoading(true);
    fetchSubCategories_BAP(id)
      .then((res: any) => {
        setSubCategories(res?.data?.data);
        getBAP_List();
      })
      .catch((err: any) => {
        console.log('error.sub...', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const exploreCategories_BMP = () => {
    setLoading(true);
    let params = {
      keyword: '',
    };
    fetchCategories_BMP(params)
      .then((res: any) => {
        setCategories_bmp(res?.data?.data);
        getBMP_List();
      })
      .catch((err: any) => {
        console.log('error.bmp....', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const explore_SubCategories_BMP = (id: any) => {
    setCategory_Id_bmp(id);
    setLoading(true);
    let params = {
      parent_category: id,
    };
    fetchSubCategories_BMP(params)
      .then((res: any) => {
        setSubCategories_Bmp(res?.data?.data);
        getBMP_List();
      })
      .catch((err: any) => {
        console.log('error....', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getBAP_List = () => {
    setLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 10,
      searchText: searchText ? searchText : '',
      latitude: latLon?.coords?.latitude,
      longitude: latLon?.coords?.longitude,
      category: category_Id ? category_Id : '',
      subcategory: category_Id_bmp ? category_Id_bmp : '',
      filter: '',
    };
    fetchNearMe(params)
      .then((res: any) => {
        dispatch(setExploreBap(res?.data?.data?.items));
      })
      .catch((err: any) => {
        console.log('error....explore...', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getBMP_List = () => {
    setLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 10,
      searchText: searchText ? searchText : '',
    };
    fetchForMe(params)
      .then((res: any) => {
        dispatch(setExploreBmp(res?.data?.data?.items));
      })
      .catch((err: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const onChangeText = (val: any) => {
    setSearchText(val);
    if (val == '') {
      if (tabSelectedIndex === 0) {
        getBAP_List();
      } else {
        getBMP_List();
      }
    }
  };
  const onOpenCategories = () => {
    setShowAllCategories(!showAllCategories);
  };
  const onGoBack = () => {
    setShowAllCategories(false);
  };
  const onClick = (item: any, index: any) => {
    setSelectedItem(index);
  };
  const onHandle_HexaGon = (item: any, index: any) => {
    if (item?.name) {
      setType(item?.name);
    } else {
      setType(item?.category_name);
    }
    setShowSubCategory(!showSubCategory);
  };
  const onOpenSubCategory = (item: any, index: any) => {
    if (tabSelectedIndex === 0) {
      explore_SubCategories_BAP(item?._id);
      setType(item?.category_name);
    } else {
      explore_SubCategories_BMP(item?._id);
      setType(item?.name);
    }
    setShowSubCategory(!showSubCategory);
  };
  const onPress_CrossBtn = () => {
    setType('');
    setShowSubCategory(!showSubCategory);
  };
  const getOffers = () => {};
  const getMyProducts = () => {};
  const favorite = (storeId: any, promotionId: any) => {
    let params = {
      store_id: storeId,
      campaign_id: promotionId,
    };
    // favorite_promotion(params)
    //   .then((res: any) => {
    //     setFavorite_Bap(!favorite_Bap);
    //     console.log('bap,,,,,', res.data);
    //   })
    //   .catch((err: any) => {})
    //   .finally(() => {});
  };
  const favorite_BMP = (promotionId: any) => {
    let params = {
      campaign_id: promotionId,
    };
    favorite_BMP_Promotion(params)
      .then((res: any) => {
        setFavorite_Bmp(!favorite_Bmp);
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  const onFavorite = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
    if (title === 'bap') {
      cloneArray = explore_Bap.map((a: any) => ({...a}));
    } else {
      cloneArray = explore_Bmp.map((a: any) => ({...a}));
    }
    cloneArray.map((item: any, index: any) => {
      if (promotionId === item.campaign_id) {
        cloneArray[index].isFavourite = !cloneArray[index].isFavourite;
      }
    });
    if (title === 'bap') {
      dispatch(setExploreBap(cloneArray));
    } else {
      dispatch(setExploreBmp(cloneArray));
    }
    if (title === 'bap') {
      favorite(storeId, promotionId);
    } else {
      favorite_BMP(promotionId);
    }
  };
  const menuButtonPressed = () => {
    navigation.openDrawer();
  };

  return (
    <Wrapper>
      <HomeHeader
        myTheme={theme}
        title={'Explore'}
        cardText={'Spend & Earn'}
        backgroundColor={colorCode}
        menuButtonPressed={menuButtonPressed}
      />
      <TabWidget
        colors={theme.colors}
        getOffers={getOffers}
        firstTabTitle={'Offers'}
        secondTabTitle={'Products'}
        getMyProducts={getMyProducts}
        tabSelectedIndex={tabSelectedIndex}
        setTabSelectedIndex={setTabSelectedIndex}
      />
      <Search
        type={type}
        placeholder={'Search'}
        onChangeText={onChangeText}
        onPress_CrossBtn={onPress_CrossBtn}
        mapSearch={showSubCategory == true ? true : false}
        onSearch={tabSelectedIndex === 0 ? getBAP_List : getBMP_List}
        onEndEditing={tabSelectedIndex === 0 ? getBAP_List : getBMP_List}
      />

      {showAllCategories && showSubCategory === false ? (
        <>
          {/* <HexaGon
            onGoBack={onGoBack}
            categories={tabSelectedIndex === 0 ? categories : categories_bmp}
            onPress={(type: any) => onHandle_HexaGon(type)}
          /> */}
          <ExploreList
            onGoBack={onGoBack}
            data={tabSelectedIndex === 0 ? categories : categories_bmp}
            onPress={(item: any, index: any) => onHandle_HexaGon(item, index)}
          />
        </>
      ) : (
        <>
          {showSubCategory && (
            <>
              <View style={styles.view}>
                <Text
                  semiBold
                  color={txt_gray}
                  style={styles.h2}
                  size={typography.h2}>
                  Subcategories
                </Text>
              </View>
              <List
                subCategory
                data={
                  tabSelectedIndex === 0 ? subCategories : subCategories_Bmp
                }
                selectedItem={selectedItem}
                onPress={(item: any, index: any) => onClick(item, index)}
              />
            </>
          )}

          {(tabSelectedIndex === 0 || tabSelectedIndex === 1) &&
          showSubCategory === false ? (
            <>
              <SeeAll title={'Categories'} onPress={onOpenCategories} />
              <List
                explore
                data={tabSelectedIndex === 0 ? categories : categories_bmp}
                onPress={(item: any, index: any) =>
                  onOpenSubCategory(item, index)
                }
              />
            </>
          ) : null}

          <FlatList
            style={GST.flex}
            contentContainerStyle={GST.pb80}
            keyExtractor={(item, index) => index.toString()}
            data={tabSelectedIndex === 0 ? explore_Bap : explore_Bmp}
            renderItem={({item, index}: any) => {
              return (
                <View style={styles.mainView} key={index}>
                  {tabSelectedIndex === 0 ? (
                    <Coloured_Card
                      item={item}
                      onFavorite={onFavorite}
                      explore
                    />
                  ) : (
                    <Campaign_Card item={item} onFavorite={onFavorite} />
                  )}
                </View>
              );
            }}
          />
        </>
      )}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default Explore;
