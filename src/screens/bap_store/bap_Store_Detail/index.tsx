import {
  Text,
  Wrapper,
  Reviews,
  OvalButton,
  White_Card,
  Image_Header,
  Coloured_Card,
  Custom_DropDown,
  ParallalScrollView,
} from '@components';
import styles from './styles';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RouteProp} from '@react-navigation/native';
import {format as prettyFormat} from 'pretty-format';
import {Image, View, ImageBackground} from 'react-native';
import {GST, txt_gray, typography, WHITE} from '@theme';
import {blur, email, globe, phone, points, vector} from '@assets';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
      data?: any;
      item?: any;
      onFavorite: any;
    };
  }>;
}

const BAP_Store_Detail = ({route, navigation}: Props) => {
  const {type, item, onFavorite} = route.params;
  const [open, setOpen] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [favourite_BAP, setFavourite_BAP] = useState(false);
  const {colorCode, bap_detail} = useSelector((state: any) => state.root.user);

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
    }
  };

  return (
    <Wrapper isTransparent>
      <ParallalScrollView
        header={
          <Image_Header
            detail
            navigation={navigation}
            favourite={item?.isFavourite}
            logo={item?.business_logo_url}
            setFavourite={setFavourite_BAP}
            source={item?.background_image_url}
          />
        }
        style={{marginHorizontal: 20, marginBottom: -250}}>
        <View style={styles.parentBottom}>
          <View style={styles.childBottom}>
            <Text center bolder size={typography.h24} style={{marginTop: -30}}>
              {item?.store_name?.toUpperCase()}
            </Text>
            <Reviews reviews={5.0} showReviews data={5} />

            <View style={styles.btnView}>
              <OvalButton
                color={color1}
                onPress={() => onClick('website')}
                source={type == 'products' ? email : globe}
                title={type == 'products' ? 'See Stores' : 'Website'}
              />
              <OvalButton
                color={color2}
                onPress={() => onClick('directions')}
                source={type == 'products' ? globe : vector}
                title={type == 'products' ? 'View Offer' : 'Directions'}
              />
              <OvalButton
                color={color3}
                title={'Call'}
                source={phone}
                onPress={() => onClick('call')}
              />
            </View>

            <Custom_DropDown setOpen={setOpen} open={open} />
            <Coloured_Card item={item} onFavorite={onFavorite} />
            {/* <View style={GST.mb10} /> */}
          </View>
        </View>
      </ParallalScrollView>
    </Wrapper>
  );
};

const View_Offer = ({
  item,
  colorCode,
  favourite,
  setFavourite,
}: {
  item: any;
  colorCode?: any;
  favourite?: any;
  setFavourite?: any;
}) => {
  return (
    <View>
      <Text semiBold size={14} align style={GST.mv20} color={txt_gray}>
        Online Only
      </Text>

      <White_Card
        item={item}
        favourite={favourite}
        setFavourite={setFavourite}
      />

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
              source={points}
            />
            <Text semiBold size={11} style={styles.textStyle} color={WHITE}>
              Complete
            </Text>
          </View>
        </View>
        <Text regular size={14} color={WHITE} align>
          Rate This Offer
        </Text>
        <Reviews reviews={5.0} data={2} />
      </ImageBackground>
      {/* <View style={GST.mb100} /> */}
    </View>
  );
};

export default BAP_Store_Detail;
