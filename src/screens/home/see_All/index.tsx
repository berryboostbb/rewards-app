import styles from './styles';
import {GST, SCREEN_WIDTH} from '@theme';
import {RouteProp} from '@react-navigation/native';
import {format as prettyFormat} from 'pretty-format';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import React, {useState, useRef, useEffect} from 'react';
import {setForMe, setNearMe, setTop_Picks} from '@redux';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {fetchForMe, fetchNearMe, fetchTopPicks, navigate} from '@services';
import {Coloured_Card, CustomLoader, Header, White_Card} from '@components';
import {View, Image, Pressable, ImageBackground, StatusBar} from 'react-native';

const PAGE_WIDTH = SCREEN_WIDTH;

export interface ISButtonProps {
  visible?: boolean;
  onPress?: () => void;
}
interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
      data?: any;
      item?: any;
    };
  }>;
}

const SeeAllScreen = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const [logo, setLogo] = useState<any>();
  const {type, data, item} = route.params;
  const [loading, setLoading] = useState(false);
  const progressValue = useSharedValue<number>(0);
  const [forMe_Logo, setForMe_Logo] = useState<any>();
  const [backSource, setBackSource] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pagingEnabled, setPagingEnabled] = useState<boolean>(true);
  const {forMe, nearMe, top_Picks, latLon} = useSelector(
    (state: any) => state.root.user,
  );

  const onSnap = (i: any) => {
    if (currentIndex > data.length) {
      setCurrentIndex(data.length);
    } else {
      setCurrentIndex(i);
    }

    if (type === 'nearMe') {
      nearMe.map((d: any, index: any) => {
        if (index == i) {
          setLogo(nearMe[index]?.business_logo_url);
          setBackSource(nearMe[index]?.business_banner_url);
        }
      });
    } else if (type == 'forMe') {
      forMe.map((d: any, index: any) => {
        if (index == i) {
          setForMe_Logo(forMe[index]?.company_logo);
          setBackSource(forMe[index]?.image_url);
        }
      });
    } else {
      top_Picks.map((d: any, index: any) => {
        if (index == i) {
          setBackSource(forMe[index]?.image_url);
        }
      });
    }
  };
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    if (type == 'nearMe' || type == 'products') {
      getNearMe_List();
    } else if (type == 'forMe') {
      getForMe_List('');
    } else if (type == 'topPicks') {
      getTopPicks();
    }
  }, []);
  const getNearMe_List = () => {
    setLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 10,
      searchText: '',
      latitude: latLon?.coords?.latitude,
      longitude: latLon?.coords?.longitude,
      category: '',
      subcategory: '',
      filter: '',
    };
    fetchNearMe(params)
      .then((res: any) => {
        let list = res?.data?.data?.items;
        if (list?.length > 5) {
          list = list.slice(0, 5);
          dispatch(setNearMe(list));
        } else {
          dispatch(setNearMe(list));
        }
        setBackSource(res?.data?.data?.items[0]?.business_banner_url);
        setLogo(res?.data?.data?.items[0]?.business_logo_url);
        dispatch(setNearMe(list));
      })
      .catch((err: any) => {
        // showToast('Error', err?.response?.data, false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getForMe_List = (filter: any) => {
    setLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 20,
      searchText: '',
      filter: filter ? filter : '',
    };

    fetchForMe(params)
      .then((res: any) => {
        let list = res?.data?.data?.items;
        if (list?.length > 5) {
          list = list.slice(0, 5);
          dispatch(setForMe(list));
        } else {
          dispatch(setForMe(list));
        }
        setBackSource(res?.data?.data?.items[0]?.image_url);
        // update_Impressions_BMP(res?.data?.data?.items[0]);
      })
      .catch((err: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getTopPicks = () => {
    setLoading(true);
    let params = {
      paginated: true,
    };
    fetchTopPicks(params)
      .then((res: any) => {
        let list = res?.data?.data?.items;
        if (list?.length > 5) {
          list = list.slice(0, 5);
          dispatch(setTop_Picks(res?.data?.data?.items));
        } else {
          dispatch(setTop_Picks(res?.data?.data?.items));
        }
        setBackSource(res?.data?.data?.items[0]?.image_url);
      })
      .catch((err: any) => {
        // console.log('error....top...', err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getWidth = (index: any) => {
    if (currentIndex === 3) {
      if (index === 3) return 380;
      if (index === 4 || index == 2) return 370;
      if (index === 0 || index == 1) return 310;
    } else if (currentIndex === 2) {
      if (index === 0) return 310;
      if (index == 3) return 310;
      if (index === 2) return 370;
      if (index === 4) return 370;
      if (index == 1) return 370;
    } else if (currentIndex === 1) {
      if (index === 1) return 380;
      if (index === 2 || index == 0) return 310;
      if (index === 4 || index == 3) return 370;
    } else if (currentIndex === 0) {
      if (index === 0) return 380;
      if (index == 3) return 310;
      if (index === 2) return 370;
      if (index === 4) return 370;
      if (index == 1) return 310;
    } else if (currentIndex === 4) {
      if (index === 4) return 380;
      if (index === 0) return 310;
      if (index == 3) return 370;
      if (index === 2) return 310;
      if (index === 4) return 310;
      if (index == 1) return 370;
    }
  };
  const onViewableItemsChanged = (viewableItems: any, changed: any) => {};

  return (
    <View style={GST.flex}>
      <ImageBackground
        source={{uri: backSource}}
        style={styles.backgroundImage}>
        <Header
          showBackButton
          title={
            type == 'nearMe'
              ? 'Near Me'
              : type == 'products'
              ? 'My Products'
              : type == 'forMe'
              ? 'For Me'
              : type == 'topPicks'
              ? 'Top Picks'
              : 'My Offers'
          }
          style={styles.header}
          navigation={navigation}
        />

        <View style={GST.flex}>
          {/* <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: type == 'nearMe' || type == 'products' ? logo : forMe_Logo,
            }}
          /> */}

          <Carousel
            loop
            vertical={true}
            width={PAGE_WIDTH}
            height={PAGE_WIDTH / 2.2}
            scrollAnimationDuration={10}
            pagingEnabled={pagingEnabled}
            onProgressChange={(_, absoluteProgress) => {
              progressValue.value = absoluteProgress;
            }}
            mode="parallax"
            ref={carouselRef}
            defaultIndex={currentIndex}
            panGestureHandlerProps={{}}
            modeConfig={{
              showLength: 2,
              parallaxScrollingScale: 0.87,
              parallaxScrollingOffset: 140,
              parallaxAdjacentItemScale: Math.pow(0.8, 1.5),
            }}
            data={
              type === 'nearMe' || type == 'products'
                ? nearMe
                : type === 'topPicks'
                ? top_Picks
                : forMe
            }
            style={[styles.carousel]}
            onSnapToItem={(i: any) => onSnap(i)}
            renderItem={({index, item}: any) => {
              return (
                <Animated.View
                  style={[
                    styles.animated,
                    {
                      position: 'absolute',
                      width: getWidth(index),
                      alignSelf: 'center',
                    },
                  ]}>
                  <Pressable
                    onPress={() => {
                      if (item?.type === 'bap') {
                        navigate('BAP_Store_Detail', {type: type, item: item});
                      } else {
                        navigate('BMP_Store_Detail', {type: type, item: item});
                      }
                    }}>
                    {item.type === 'bmp' ? (
                      <White_Card
                        isForme={
                          type == 'nearMe' && type == 'products' ? false : true
                        }
                        index={index}
                        blurRadius={index === currentIndex ? true : false}
                        item={item}
                        see_All
                        seeAll={'seeAll'}
                        currentIndex={currentIndex}
                      />
                    ) : (
                      <Coloured_Card
                        isForme={
                          type == 'nearMe' && type == 'products' ? false : true
                        }
                        index={index}
                        currentIndex={currentIndex}
                        blurRadius={index === currentIndex ? true : false}
                        item={item}
                        seeAll={'seeAll'}
                        see_All
                      />
                    )}
                  </Pressable>
                </Animated.View>
              );
            }}
          />
        </View>
        {loading && <CustomLoader />}
      </ImageBackground>
    </View>
  );
};

export default SeeAllScreen;
