import {
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Text from './atoms/text';
import {useSelector} from 'react-redux';
import PointsCard from './atoms/pointsCard';
import {format as prettyFormat} from 'pretty-format';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate, update_Clicks_BAP, update_Clicks_BMP} from '@services';
import {pink, primaryDarkColor, RF, txt_gray, typography, WHITE} from '@theme';

const Coloured_Card = ({
  item,
  dark,
  explore,
  see_All,
  onFavorite,
  blurRadius,
  index,
  currentIndex,
  isForme,
  seeAll,
}: {
  see_All?: any;
  dark?: any;
  explore?: any;
  item?: any;
  onFavorite?: any;
  blurRadius?: any;
  index?: any;
  currentIndex?: any;
  isForme?: any;
  seeAll?: any;
}) => {
  const {colorCode, user} = useSelector((state: any) => state.root.user);

  const click = (store_id: any, campaign_id: any, type: any) => {
    onFavorite(store_id, campaign_id, type);
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

  const onClick_BAP = () => {
    let params = {
      store_id: item?.store_id,
      promotion_id: item?.campaign_id,
      user_id: user?._id,
    };
    update_Clicks_BAP(params)
      .then((res: any) => {
        navigate('BAP_Promotion', {type: 'bap', item: item});
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  const onClick_BMP = () => {
    let params = {
      promotion_id: item?.campaign_id,
      user_id: user?._id,
    };
    update_Clicks_BMP(params)
      .then((res: any) => {
        navigate('BMP_Promotion', {type: 'bmp', item: item});
      })
      .catch((err: any) => {})
      .finally(() => {});
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
      <Pressable
        onPress={() => {
          if (item?.type == 'bap') {
            onClick_BAP();
          } else {
            onClick_BMP();
          }
        }}>
        <ImageBackground
          source={{uri: item?.card_image_url}}
          imageStyle={styles.imgStyle}>
          <View style={styles.outerContainer}>
            <PointsCard
              item={item}
              pointsValue={
                item?.plastk_points_value
                  ? item?.plastk_points_value
                  : item?.offerDetail?.plastk_points_value
              }
              textColor={txt_gray}
              bgColor={WHITE}
              dark
              // dark={item?.type === 'bmp' ? true : false}
            />

            <TouchableOpacity
              style={styles.iconView}
              onPress={() =>
                click(item?.store_id, item?.campaign_id, item?.type)
              }
              // onPress={onFavorite}
            >
              {item?.isFavourite ? (
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
              {item?.type !== 'bmp' && (
                <Text semiBold size={typography.h3} color={WHITE}>
                  {item?.campaign_name}
                </Text>
              )}

              <Text
                medium
                numberOfLines={3}
                size={typography.normal}
                color={item?.type === 'bmp' ? primaryDarkColor : WHITE}
                style={[
                  item?.type === 'bmp' ? styles.mini_Img : styles.miniText,
                  {width: seeAll ? '40%' : explore ? RF(150) : '18%'},
                ]}>
                {item?.offer_text}
              </Text>
            </View>
            {/* <Image
                    style={{
                      left: 0,
                      top: 0,
                      width: 500,
                      height: 500,
                      marginRight: 1,
                    }}
                    source={featured}
                  /> */}
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  txtimage: {
    width: RF(20),
    height: RF(20),
  },
  innerContainer: {
    flexDirection: 'row',
  },
  textView: {
    marginLeft: 16,
    marginTop: 10,
  },
  textStyle: {marginLeft: -8},
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 8,
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
  miniText: {width: '18%', marginTop: RF(8)},
  mini_Img: {marginTop: RF(50), marginLeft: RF(5)},
  p_image: {
    width: RF(20),
    height: RF(20),
  },
  iconView: {
    alignItems: 'flex-end',
    marginRight: RF(10),
  },
  p_img_View: {
    width: RF(74),
    height: RF(32),
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RF(16),
    marginLeft: RF(16),
    justifyContent: 'space-evenly',
  },
});

export default Coloured_Card;
