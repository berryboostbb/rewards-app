import React from 'react';
import Text from '../atoms/text';
import {BLACK, RF, txt_gray, typography, WHITE} from '@theme';
import {useTheme} from '@react-navigation/native';
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {elevation} from '@assets';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ExploreList = ({
  data,
  onPress,
  onGoBack,
}: {
  data?: any;
  onPress?: () => void;
  onGoBack?: any;
}) => {
  const theme: any = useTheme();

  return (
    <View style={{flex: 1}}>
      <View style={styles.view}>
        <Pressable style={styles.backArrow} onPress={onGoBack}>
          <AntDesign color={BLACK} name="arrowleft" size={RF(15)} />
        </Pressable>
        <Text semiBold size={typography.h2} style={styles.txt} color={txt_gray}>
          Categories
        </Text>
      </View>
      <FlatList
        scrollEnabled
        data={data}
        numColumns={3}
        contentContainerStyle={{paddingBottom: RF(80)}}
        columnWrapperStyle={styles.list}
        keyExtractor={(item: any, index: any) => index.toString()}
        renderItem={({item, index}) => {
          console.log('i...', item);

          return (
            <Pressable
              style={styles.outer}
              onPress={() => onPress(item, index)}>
              <ImageBackground
                source={{
                  uri: item?.category_image_url
                    ? item?.category_image_url
                    : item?.logo,
                }}
                imageStyle={styles.imgBG}
                style={{
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={elevation}
                  style={styles.innerImgBG}
                  imageStyle={{
                    borderRadius: RF(20),
                  }}>
                  <Text
                    center
                    semiBold
                    color={WHITE}
                    size={typography.standard}
                    style={styles.innerImg}>
                    {item?.category_name ? item?.category_name : item?.name}
                  </Text>
                </ImageBackground>
              </ImageBackground>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    // alignItems: 'center',
    marginVertical: RF(10),
    marginHorizontal: RF(15),
    justifyContent: 'space-between',
  },
  outer: {
    width: RF(100),
    height: RF(100),
  },
  imgBG: {
    width: RF(100),
    height: RF(100),
    borderRadius: RF(16),
    resizeMode: 'contain',
  },
  innerImg: {top: RF(70), height: 20, width: RF(100)},
  innerImgBG: {
    width: RF(100),
    height: RF(102),
    resizeMode: 'contain',
  },
  view: {
    marginTop: RF(10),
    flexDirection: 'row',
  },
  txt: {marginTop: 3, marginLeft: RF(0)},
  backArrow: {
    width: RF(35),
    height: RF(35),
    shadowOpacity: 0.2,
    marginLeft: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
  },
});

export default ExploreList;
