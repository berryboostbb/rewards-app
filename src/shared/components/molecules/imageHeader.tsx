import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {pink, primaryDarkColor, RF, SCREEN_WIDTH, WHITE} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Image_Header = ({
  bap,
  logo,
  detail,
  profile,
  source,
  favourite,
  navigation,
  setFavourite,
}: {
  bap?: any;
  detail?: any;
  logo?: any;
  source?: any;
  profile?: any;
  favourite?: any;
  navigation?: any;
  setFavourite?: any;
}) => {
  return (
    <View style={styles.mainView}>
      <View
        style={{
          flex: 1,
          left: 0,
          top: 0,
          opacity: 0.7,
          backgroundColor: 'black',
          width: '100%',
          height: RF(400),
        }}>
        <ImageBackground
          source={{
            uri: source,
          }}
          style={{
            width: undefined,
            height: undefined,
            aspectRatio: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: RF(20),
            paddingTop: RF(40),
          }}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <AntDesign color={WHITE} name="arrowleft" size={RF(20)} />
          </TouchableOpacity>

          {detail ? null : (
            <View style={styles.imgView}>
              <Image
                style={styles.centerImage}
                resizeMode="contain"
                source={{uri: logo}}
              />
            </View>
          )}

          {profile ? null : (
            <TouchableOpacity style={styles.backArrow} disabled>
              {favourite ? (
                <AntDesign name={'heart'} color={pink} size={RF(20)} />
              ) : (
                <AntDesign color={WHITE} name="hearto" size={RF(20)} />
              )}
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View>
      {/* <View style={[bap ? styles.bapView : styles.innerView]}>
        <ImageBackground source={{uri: source}} style={styles.imgBG}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => navigation.goBack()}>
            <AntDesign color={WHITE} name="arrowleft" size={RF(20)} />
          </TouchableOpacity>

          {detail ? null : (
            <View style={styles.imgView}>
              <Image
                style={styles.centerImage}
                resizeMode="contain"
                source={{uri: logo}}
              />
            </View>
          )}

          {profile ? null : (
            <TouchableOpacity style={styles.backArrow} onPress={onFavorite}>
              {favourite ? (
                <AntDesign name={'heart'} color={pink} size={RF(20)} />
              ) : (
                <AntDesign color={WHITE} name="hearto" size={RF(20)} />
              )}
            </TouchableOpacity>
          )}
        </ImageBackground>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    width: RF(35),
    height: RF(35),
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
  },
  bapView: {
    borderRadius: SCREEN_WIDTH,
    width: SCREEN_WIDTH * 2,
    height: SCREEN_WIDTH * 8,
    marginLeft: -(SCREEN_WIDTH / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    transform: [{scaleX: 1}],
    justifyContent: 'center',
  },
  mainView: {
    alignSelf: 'center',
    width: SCREEN_WIDTH,
    overflow: 'hidden',
    height: SCREEN_WIDTH,
    backgroundColor: 'transparent',
  },
  innerView: {
    borderRadius: SCREEN_WIDTH,
    width: SCREEN_WIDTH * 2,
    height: SCREEN_WIDTH * 4,
    marginLeft: -(SCREEN_WIDTH / 2),
    position: 'absolute',
    bottom: 20,
    overflow: 'hidden',
    backgroundColor: primaryDarkColor,
    // padding: 20,
  },
  imgBG: {
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    marginLeft: SCREEN_WIDTH / 2,
    backgroundColor: '#9DD6EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: RF(50),
  },
  centerImage: {
    height: RF(80),
    width: '100%',
  },
  imgView: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
    padding: 10,
    position: 'absolute',
    left: 70,
    right: 50,
    marginTop: 110,
  },
});

export default Image_Header;
