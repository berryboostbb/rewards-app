import {
  View,
  FlatList,
  Pressable,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Text from './atoms/text';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {getStoreDetail, navigate} from '@services';
import {format as prettyFormat} from 'pretty-format';
import {
  GST,
  RF,
  WHITE,
  ligh_green,
  typography,
  primaryDarkColor,
  BLACK,
  txt_gray,
} from '@theme';

const List = ({
  data,
  onPress,
  explore,
  subCategory,
  selectedItem,
}: {
  data?: any;
  explore?: any;
  subCategory?: any;
  selectedItem?: any;
  onPress?: () => void;
}) => {
  const {colorCode, user} = useSelector((state: any) => state.root.user);

  const onOpen_Detail = (item: any) => {
    if (item?.type == 'bap') {
      getStores_Detail(item);
    } else if (item?.type == 'bmp') {
      console.log('bmp....');
      // navigate('BMP_Promotion', {type: 'bmp', item: item});
    }
  };

  const getStores_Detail = (item: any) => {
    let params = {
      storeId: item?._id,
    };
    getStoreDetail(params)
      .then((res: any) => {
        navigate('BAP_Store_Detail', {
          type: 'bap',
          item: res?.data?.data?.promotion_detail,
        });
      })
      .catch((err: any) => {})
      .finally(() => {});
  };

  return (
    <View style={GST.flexDir1}>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any, index: any) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              {explore ? (
                <View style={styles.mt}>
                  <Pressable onPress={() => onPress(item, index)}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: item?.logo
                          ? item?.logo
                          : item?.category_image_url &&
                            item?.category_image_url,
                      }}
                    />
                  </Pressable>
                  <Text
                    bold
                    align
                    color={txt_gray}
                    style={styles.exploretxt}
                    size={typography.small}>
                    {item?.name ? item?.name : item?.category_name}
                  </Text>
                </View>
              ) : subCategory ? (
                <View
                  style={[
                    styles.subView,
                    {
                      backgroundColor:
                        selectedItem == index ? colorCode : '#F5F5F5',
                      marginLeft: index == 0 ? 15 : 10,
                    },
                  ]}>
                  <Pressable onPress={() => onPress(item, index)}>
                    <Text
                      style={{width: 60}}
                      numberOfLines={1}
                      medium
                      size={typography.standard}
                      color={selectedItem == index ? WHITE : primaryDarkColor}>
                      {item?.name ? item?.name : item?.sub_category_name}
                    </Text>
                  </Pressable>
                </View>
              ) : (
                <Pressable
                  onPress={() => onOpen_Detail(item)}
                  style={{
                    width: RF(55),
                    height: RF(55),
                    borderRadius: 100,
                    marginHorizontal: 3,
                    marginVertical: RF(10),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: item?.bg_color
                      ? item?.bg_color
                      : item?.background_color
                      ? item?.background_color
                      : '#000',
                  }}>
                  <FastImage
                    source={{
                      uri: item?.logo
                        ? item?.logo
                        : item?.image_url
                        ? item?.image_url
                        : 'https://plastk.s3.ca-central-1.amazonaws.com/web_images/promotion_icons/Travel-and-Transportation.png',
                    }}
                    resizeMode="contain"
                    style={{
                      width: RF(45),
                      height: RF(45),
                      borderRadius: 100,
                    }}
                  />
                </Pressable>
              )}
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt: {
    marginTop: RF(10),
    width: RF(75),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  exploretxt: {
    marginTop: RF(10),
  },
  subView: {
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subCategory: {
    borderRadius: RF(50),
    height: RF(35),
  },
  img: {
    width: RF(60),
    height: RF(60),
    marginLeft: 6,
    borderRadius: 100 / 2,
  },
  linearGradientContainer: {
    borderRadius: RF(50),
    height: RF(55),
    width: RF(55),
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: ligh_green,
  },
  linearGradientContainerGreen: {
    borderRadius: RF(50),
    height: RF(50),
    width: RF(50),
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default List;
