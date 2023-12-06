import {
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Text from './text';
import PointsCard from './pointsCard';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {format as prettyFormat} from 'pretty-format';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {navigate, update_Clicks_BAP, update_Clicks_BMP} from '@services';
import {RF, pink, WHITE, txt_gray, typography, primaryDarkColor} from '@theme';

const Campaign_Card = ({item, onFavorite}: {item?: any; onFavorite?: any}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme?.colors);
  const [loading, setLoading] = useState(false);
  const {user} = useSelector((state: any) => state.root.user);

  const click = (store_id: any, campaign_id: any, type: any) => {
    onFavorite(store_id, campaign_id, type);
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
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (item?.type == 'bap') {
            onClick_BAP();
          } else {
            onClick_BMP();
          }
        }}>
        <ImageBackground
          onLoadStart={() => {
            setLoading(true);
          }}
          onLoadEnd={() => {
            setLoading(false);
          }}
          source={{
            uri: item?.card_image_url,
          }}
          imageStyle={styles.imgStyle}>
          <View style={[styles.outerContainer]}>
            <PointsCard
              item={item}
              pointsValue={item?.plastk_points_value}
              textColor={item?.type === 'bap' ? primaryDarkColor : WHITE}
              bgColor={item?.type === 'bmp' ? primaryDarkColor : WHITE}
              dark={item?.type === 'bap' ? false : item?.explore ? false : true}
            />
            <Pressable
              style={styles.iconView}
              onPress={() =>
                click(item?.store_id, item?.campaign_id, item?.type)
              }
              // onPress={() => onFavorite(item?.store_id, item?.campaign_id)}
            >
              {item?.isFavourite ? (
                <AntDesign name={'heart'} color={pink} size={RF(18)} />
              ) : (
                <AntDesign
                  color={item?.type === 'bmp' ? primaryDarkColor : WHITE}
                  name="hearto"
                  size={RF(18)}
                />
              )}
            </Pressable>
          </View>

          <View style={styles.innerContainer}>
            <View style={styles.textView}>
              {item.type == 'bap' && (
                <>
                  <Text
                    numberOfLines={1}
                    semiBold
                    color={item?.type === 'bmp' ? primaryDarkColor : WHITE}
                    size={item?.type === 'bmp' ? typography.h1 : typography.h3}>
                    {item?.type === 'bmp'
                      ? item?.brand_name
                      : item?.campaign_name}
                  </Text>
                  <Text
                    medium
                    numberOfLines={item?.type == 'bmp' ? 1 : 3}
                    size={
                      item?.type == 'bap'
                        ? typography.standard
                        : typography.standard
                    }
                    color={item?.type == 'bmp' ? txt_gray : WHITE}
                    style={
                      item?.type == 'bmp' ? styles.mini_Img : styles.miniText
                    }>
                    {item?.type === 'bmp'
                      ? item?.product_name
                      : item?.offer_text}
                  </Text>
                </>
              )}

              {item?.type == 'bmp' && (
                <Text
                  numberOfLines={2}
                  medium
                  size={typography.standard}
                  color={txt_gray}
                  style={{width: RF(120), marginTop: RF(10)}}>
                  {item?.text}
                </Text>
              )}
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

      {loading && (
        <View style={{marginTop: -90}}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    innerContainer: {
      flexDirection: 'row',
    },
    textView: {
      marginLeft: RF(16),
      marginTop: RF(10),
      width: '45%',
      height: RF(80),
    },
    textStyle: {marginLeft: -8},
    outerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginLeft: RF(16),
    },
    imgStyle: {
      width: '100%',
      height: RF(150),
      borderRadius: RF(22),
      resizeMode: 'stretch',
    },
    container: {
      width: '100%',
      height: RF(150),
      elevation: 3,
      borderRadius: RF(22),
      marginVertical: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },

    top_innerImg: {
      width: '100%',
      height: RF(28),
      marginTop: RF(14),
      marginLeft: -12,
    },
    container_dots: {
      position: 'absolute',
      right: 50,
      bottom: 20,
      width: RF(50),
      paddingVertical: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    miniText: {
      width: RF(125),
      height: RF(50),
      marginTop: RF(8),
      // lineHeight: 14,
      justifyContent: 'center',
    },
    mini_Img: {marginTop: RF(12)},
    mTop: {
      marginTop: RF(10),
    },
    s_top: {},
    mainView: {
      flexDirection: 'row',
      height: RF(150),
      width: '100%',
      borderRadius: RF(15),
      marginBottom: RF(2),
    },
    text: {
      fontWeight: 'bold',
      marginLeft: RF(30),
      marginTop: RF(10),
    },
    outerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    outerImg: {},
    imageContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: 2,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'contain',
    },

    inaciveDot: {
      width: RF(6),
      height: RF(6),
      marginHorizontal: RF(0),
    },
    dot: {
      width: RF(12),
      height: RF(5),
      borderRadius: RF(5),
      marginHorizontal: RF(6),
    },

    imgView: {
      width: RF(74),
      height: RF(32),
      borderRadius: RF(10),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    featureImgView: {
      width: RF(110),
      height: RF(32),
      marginLeft: RF(29),
      borderRadius: RF(10),
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#19383A',
      justifyContent: 'space-evenly',
    },
    iconView: {
      alignItems: 'flex-end',
      marginRight: RF(5),
      marginTop: RF(-10),
      // flex: 1,
      padding: 10,
    },
    txtimage: {
      width: RF(18),
      height: RF(18),
      marginRight: 10,
    },
    blueView: {
      width: '50%',
      height: RF(145),
      borderTopLeftRadius: RF(15),
      borderBottomLeftRadius: RF(15),
      paddingVertical: RF(16),
      paddingLeft: RF(16),
    },
    halfImgView: {
      width: RF(150),
      height: RF(150),
      overflow: 'hidden',
      transform: [{scaleY: 1.3}],
      borderTopLeftRadius: RF(70),
      borderBottomLeftRadius: RF(70),
    },
    img: {
      width: RF(150),
      height: RF(115.5),
      marginTop: RF(17),
      borderTopRightRadius: RF(15),
      borderBottomRightRadius: RF(15),
    },
    top_img: {
      width: RF(120),
      height: RF(90),
      marginTop: RF(25),
      borderTopRightRadius: RF(15),
      borderBottomRightRadius: RF(15),
    },
    featureImg: {
      elevation: 3,
      borderRadius: RF(15),
      backgroundColor: WHITE,
      width: '88%',
      height: RF(160),
      marginHorizontal: 1,
      marginTop: 1,
    },
    view: {},
  });

export default Campaign_Card;
