import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  BLACK,
  pink,
  primaryDarkColor,
  RF,
  SCREEN_WIDTH,
  typography,
  WHITE,
} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from './text';

const BMP_Image_Header = ({
  logo,
  source,
  navigation,
  favourite,
  setFavourite,
}: {
  logo?: any;
  source?: any;
  navigation?: any;
  favourite?: any;
  setFavourite?: any;
}) => {
  const onFavorite = () => {
    setFavourite(!favourite);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.innerView}>
        {/* <View style={styles.overlay}> */}
        {/* <ImageBackground source={{uri: source}} style={styles.imgBG}> */}
        <View style={styles.imgBG}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <AntDesign color={BLACK} name="arrowleft" size={RF(20)} />
          </TouchableOpacity>
          <View style={styles.imgView}>
            <Text size={typography.heading40} bolder color={BLACK}>
              {logo}
            </Text>
          </View>
          {/* <Image
            style={styles.centerImage}
            resizeMode="contain"
            source={{uri: source}}
          /> */}
          <TouchableOpacity style={styles.backArrow} onPress={onFavorite}>
            {favourite ? (
              <AntDesign name={'heart'} color={pink} size={RF(20)} />
            ) : (
              <AntDesign color={BLACK} name="hearto" size={RF(20)} />
            )}
          </TouchableOpacity>
          {/* </ImageBackground> */}
          {/* </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width: '120%',
    height: RF(400),
  },
  backArrow: {
    width: RF(35),
    height: RF(35),
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
  },
  mainView: {
    alignSelf: 'center',
    width: SCREEN_WIDTH,
    overflow: 'hidden',
    height: SCREEN_WIDTH,
  },
  innerView: {
    width: SCREEN_WIDTH * 2,
    height: SCREEN_WIDTH * 4,
    marginLeft: -(SCREEN_WIDTH / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  imgBG: {
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    marginLeft: SCREEN_WIDTH / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: RF(50),
    backgroundColor: 'red',
  },
  centerImage: {
    height: RF(40),
    width: '100%',
  },
  imgView: {
    width: '70%',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
    padding: 10,
    position: 'absolute',
    left: 70,
    right: 50,
    top: 120,
  },
});

export default BMP_Image_Header;
