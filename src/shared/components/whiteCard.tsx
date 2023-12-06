import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  RF,
  pink,
  WHITE,
  txt_gray,
  borderClr,
  typography,
  primaryDarkColor,
} from '@theme';
import React from 'react';
import {useSelector} from 'react-redux';
import {Text, PointsCard} from '@components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {format as prettyFormat} from 'pretty-format';

const White_Card = ({
  item,
  index,
  see_All,
  seeAll,
  isForme,
  favourite,
  blurRadius,
  setFavourite,
  currentIndex,
}: {
  item?: any;
  index?: any;
  seeAll?: any;
  see_All?: any;
  isForme?: any;
  favourite?: any;
  blurRadius?: any;
  currentIndex?: any;
  setFavourite?: any;
}) => {
  const {user, colorCode} = useSelector((state: any) => state.root.user);

  const onFavorite = (item: any, index: any) => {
    setFavourite(index);
  };

  const getTop = () => {
    if (currentIndex === 1) {
      if (index === 2) return 80;
    } else if (currentIndex === 0) {
      if (index === 1) return 80;
    } else if (currentIndex === 2) {
      if (index === 3) return 80;
    } else if (currentIndex === 4) {
      if (index === 0) return 80;
    } else if (currentIndex === 3) {
      if (index === 0) return 50;
      if (index === 4) return 38;
    }
  };

  const getHeight = () => {
    if (currentIndex === 1) {
      if (index === 0) return 80;
    } else if (currentIndex === 0) {
      if (index === 4) return 38;
      if (index === 3) return 50;
    } else if (currentIndex === 2) {
      if (index === 0) return 50;
      if (index === 1) return 38;
    } else if (currentIndex === 3) {
      if (index === 2) return 38;
      if (index === 1) return 50;
    } else if (currentIndex === 4) {
      if (index === 3) return 38;
      if (index === 2) return 50;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          bottom: getHeight(),
          top: getTop(),
          backgroundColor: see_All
            ? !blurRadius
              ? 'white'
              : 'transparent'
            : '',
          opacity: see_All ? (!blurRadius ? 0.7 : 1) : 2,
        },
      ]}>
      <ImageBackground
        source={{
          uri: item?.card_image_url
            ? item?.card_image_url
            : item?.promotion_details?.card_image_url,
        }}
        imageStyle={styles.imgStyle}>
        <View style={styles.outerContainer}>
          <PointsCard
            item={item}
            pointsValue={
              item?.plastk_points_value
                ? item?.plastk_points_value
                : item?.promotion_details?.plastk_points_value
            }
            textColor={WHITE}
            bgColor={primaryDarkColor}
            dark
          />

          <TouchableOpacity style={styles.iconView} onPress={onFavorite}>
            {favourite ? (
              <AntDesign name={'heart'} color={pink} size={RF(20)} />
            ) : (
              <AntDesign
                name="hearto"
                size={RF(20)}
                color={item?.type === 'bmp' ? primaryDarkColor : WHITE}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.textView}>
            <Text
              size={typography.h1}
              bolder
              style={{letterSpacing: 2, width: '150%'}}>
              {item?.brand_name
                ? item?.brand_name
                : item?.promotion_details?.brand_name.toUpperCase()}
            </Text>
            <Text
              medium
              size={typography.standard}
              color={txt_gray}
              style={styles.miniText}>
              {item?.product_name
                ? item?.product_name
                : item?.promotion_details?.product_name}
            </Text>
            {item?.type == 'bmp' && (
              <Text
                numberOfLines={1}
                medium
                size={typography.standard}
                color={txt_gray}
                style={{width: RF(150)}}>
                Buy {item?.units_per_offer} Get {item?.plastk_points_value}{' '}
                Points.
              </Text>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  innerImg_Jar: {
    width: '100%',
    height: RF(130),
    top: -30,
    right: 30,
  },
  top_innerImg: {
    width: RF(100),
    height: RF(50),
    marginLeft: 5,
  },
  txtimage: {
    width: RF(20),
    height: RF(20),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: RF(10),
  },
  textView: {
    marginTop: RF(18),
    width: RF(90),
    marginLeft: 10,
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 16,
  },
  imgStyle: {
    width: '100%',
    height: RF(150),
    borderRadius: RF(22),
  },
  container: {
    width: '100%',
    height: RF(150),
    borderRadius: RF(20),
    elevation: 3,
  },
  miniText: {marginTop: RF(8), width: RF(130), marginLeft: RF(2)},
  mini_Img: {marginTop: RF(4), marginLeft: RF(3)},
  iconView: {
    alignItems: 'flex-end',
    marginRight: RF(10),
  },
});

export default White_Card;

// <View style={styles.container}>
//   <View style={styles.outerContainer}>
//     <PointsCard
//       dark
//       item={item}
//       textColor={WHITE}
//       bgColor={primaryDarkColor}
//       pointsValue={item?.promotion_details?.plastk_points_value}
//     />
//     <TouchableOpacity
//       style={styles.iconView}
//       onPress={() => onFavorite(item, index)}>
//       {favourite == index ? (
//         <AntDesign name={'heart'} color={RED} size={RF(20)} />
//       ) : (
//         <AntDesign color={colorCode} name="hearto" size={RF(20)} />
//       )}
//     </TouchableOpacity>
//   </View>

//   <View style={styles.innerContainer}>
//     <View style={styles.textView}>
//       <Text
//         size={typography.h1}
//         bolder
//         style={{letterSpacing: 2, width: '150%'}}>
//         {item?.promotion_details?.brand_name.toUpperCase()}
//       </Text>
//       <Text
//         medium
//         size={typography.standard}
//         color={txt_gray}
//         style={styles.miniText}>
//         {item?.promotion_details?.product_name}
//       </Text>
//     </View>

//     <Image
//       resizeMode="contain"
//       style={styles.innerImg_Jar}
//       source={{uri: item?.promotion_details?.product_image}}
//     />
//   </View>
// </View>
