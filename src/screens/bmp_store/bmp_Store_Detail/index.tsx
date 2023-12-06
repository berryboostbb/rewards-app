import {blur, borrowell, email, globe, phone, points} from '@assets';
import {
  Text,
  Wrapper,
  Reviews,
  OvalButton,
  White_Card,
  Image_Header,
  ParallalScrollView,
  Coloured_Card,
  SeeAll,
  Card,
  Campaign_Card,
} from '@components';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {GST, primaryDarkColor, RF, txt_gray, typography, WHITE} from '@theme';
import {
  Image,
  View,
  ScrollView,
  ImageBackground,
  Platform,
  Linking,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {format as prettyFormat} from 'pretty-format';
import {
  favorite_BMP_Promotion,
  fetchBrands_Detail,
  fetchForMe,
  fetchForMeBrands,
  navigate,
} from '@services';
import {setBMP_Detail} from '@redux';

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

const BMP_Store_Detail = ({route, navigation}: Props) => {
  const {type, item} = route?.params;
  const dispatch: any = useDispatch();
  const [open, setOpen] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(true);
  const [color3, setColor3] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [favourite_BMP, setFavourite_BMP] = useState(false);
  const [favourite_BAP, setFavourite_BAP] = useState(false);
  const [favourite_Product, setFavourite_Product] = useState(false);
  const [brandDetail, set_BrandDetail] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [forMe, setForMe] = useState<any>([]);

  const {user, bmp_detail} = useSelector((state: any) => state.root.user);

  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = `telprompt:'${brandDetail?.primary_contact_number}`;
    } else {
      number = `tel:${brandDetail?.primary_contact_number}`;
    }
    Linking.openURL(number);
  };
  useEffect(() => {
    getForMe_Detail();
    getForMe_List();
  }, []);
  const getForMe_List = () => {
    setLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 5,
      company_id: item?.company_id,
    };

    fetchForMeBrands(params)
      .then((res: any) => {
        //setForMe_Logo(res?.data?.items[0]?.company_logo);
        dispatch(setBMP_Detail(res?.data?.data?.items));
      })
      .catch((err: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getForMe_Detail = () => {
    setLoading(true);
    let params = {
      company_id: item?.company_id,
    };
    fetchBrands_Detail(params)
      .then((res: any) => {
        set_BrandDetail(res?.data?.data);
      })
      .catch((err: any) => {
        // showToast('Error', err?.response?.data, false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onClick = (type: any) => {
    if (type == 'website') {
      setColor1(!color1);
      setColor2(false);
      setColor3(false);
    } else if (type == 'directions') {
      setColor2(!color2);
      setColor1(false);
      setColor3(false);
    } else if (type == 'call') {
      setColor3(!color3);
      setColor1(false);
      setColor2(false);
      openDialScreen();
    }
  };
  const onOpen_See_All = (type: any, data: any) => {
    navigate('SeeAllScreen', {type: type, data: data});
  };
  const favorite_BMP = (promotionId: any) => {
    let params = {
      campaign_id: promotionId,
    };
    favorite_BMP_Promotion(params)
      .then((res: any) => {
        setFavourite_BMP(!favourite_BMP);
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  const onFavorite = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
    cloneArray = bmp_detail.map((a: any) => ({...a}));
    cloneArray.map((item: any, index: any) => {
      if (promotionId === item.campaign_id) {
        cloneArray[index].isFavourite = !cloneArray[index].isFavourite;
      }
    });
    dispatch(setBMP_Detail(cloneArray));
    favorite_BMP(promotionId);
  };

  return (
    <Wrapper isTransparent>
      <ParallalScrollView
        header={
          <Image_Header
            detail
            source={item?.image_url}
            // logo={item?.promotion_details?.product_image}
            navigation={navigation}
            favourite={favourite_BAP}
            setFavourite={setFavourite_BAP}
          />
        }
        style={{marginHorizontal: 20, marginBottom: -100}}>
        {/* <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}> */}
        {/* <Image
        source={item.company_name}
        style={[
          styles.image,
          {
            tintColor: primaryDarkColor,
            // tintColor: item.id == 1 || item.type == 'bmp' ? colorCode : '',
          },
        ]}
      /> */}

        <View style={styles.parentBottom}>
          <View style={styles.childBottom}>
            <Text
              size={typography.heading}
              bolder
              color={primaryDarkColor}
              center>
              {brandDetail?.company_name?.toUpperCase()}
            </Text>

            <Reviews reviews={5.0} showReviews data={5} />

            <View style={styles.btnView}>
              <OvalButton
                color={color1}
                onPress={() => onClick('website')}
                source={email}
                title={'See Stores'}
              />
              <OvalButton
                color={color2}
                onPress={() => onClick('directions')}
                source={globe}
                title={'View Offer'}
              />
              <OvalButton
                color={color3}
                title={'Call'}
                source={phone}
                onPress={() => onClick('call')}
              />
            </View>

            {/* <SeeAll
            title={'For Me'}
            onPress={() => onOpen_See_All('forMe', forMe)}
          /> */}
            {/* bmp */}
            <Text
              semiBold
              size={typography.subHeading}
              align
              style={GST.mv20}
              color={txt_gray}>
              Online Only
            </Text>
            <View style={{marginBottom: 200}}>
              {bmp_detail?.map((item: any) => {
                return <Campaign_Card item={item} onFavorite={onFavorite} />;
              })}
            </View>

            {/* < View style={{ marginHorizontal: 10 }}>
              <View_Offer
                colorCode={colorCode}
                item={item}
                favourite={favourite_Product}
                setFavourite={setFavourite_Product}
              />
              <View style={GST.mb100} />
            </View> */}
          </View>
        </View>

        {/* </ScrollView> */}
      </ParallalScrollView>
    </Wrapper>
  );
};

const View_Offer = ({
  item,
  user,
  colorCode,
  favourite,
  setFavourite,
}: {
  item: any;
  user?: any;
  colorCode?: any;
  favourite?: any;
  setFavourite?: any;
}) => {
  return (
    <View>
      <Text
        semiBold
        size={typography.subHeading}
        align
        style={GST.mv20}
        color={txt_gray}>
        Online Only
      </Text>
      {/* <FlatList
        data={item}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return ( */}
      <White_Card
        item={item}
        favourite={favourite}
        setFavourite={setFavourite}
      />
      {/* );
        }}
      /> */}

      <ImageBackground
        source={blur}
        style={styles.imgBlur}
        imageStyle={GST.bR20}>
        <View style={styles.outerContainer}>
          <View
            style={[
              styles.p_img_View,
              {
                backgroundColor: colorCode,
              },
            ]}>
            <Image
              style={styles.txtimage}
              resizeMode="contain"
              source={user?.user_type == 'Borrowell' ? borrowell : points}
            />
            <Text semiBold size={11} style={styles.textStyle} color={WHITE}>
              Complete
            </Text>
          </View>
        </View>
        <Text regular size={typography.subHeading} color={WHITE} align>
          Rate This Offer
        </Text>
        <Reviews reviews={5.0} data={0} bmpWhite />
      </ImageBackground>
      <View style={GST.mb100} />
    </View>
  );
};

export default BMP_Store_Detail;
