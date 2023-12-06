import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {BLACK, pink, RF, SCREEN_WIDTH, WHITE} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Text from './text';

const BMP_Curve = ({
  logo,
  source,
  navigation,
  favourite,
}: {
  logo?: any;
  source?: any;
  favourite?: any;
  navigation?: any;
}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.sliderContainerStyle}>
        <View style={styles.slider}>
          <View style={styles.view}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => navigation.goBack()}>
              <AntDesign color={BLACK} name="arrowleft" size={RF(20)} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.backArrow} disabled>
              {favourite ? (
                <AntDesign name={'heart'} color={pink} size={RF(20)} />
              ) : (
                <AntDesign color={BLACK} name="hearto" size={RF(20)} />
              )}
            </TouchableOpacity>
          </View>
          <Image
            style={styles.centerImage}
            resizeMode="contain"
            source={{uri: source}}
          />
        </View>
      </View>
    </View>
    // <View style={styles.mainView}>
    //   <View style={styles.view}>
    //     <TouchableOpacity
    //       style={styles.backArrow}
    //       onPress={() => navigation.goBack()}>
    //       <AntDesign color={BLACK} name="arrowleft" size={RF(20)} />
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.backArrow} disabled>
    //       {favourite ? (
    //         <AntDesign name={'heart'} color={pink} size={RF(20)} />
    //       ) : (
    //         <AntDesign color={BLACK} name="hearto" size={RF(20)} />
    //       )}
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{top: 50}}>
    //     <Image
    //       style={styles.centerImage}
    //       resizeMode="contain"
    //       source={{uri: source}}
    //     />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: 'center',
    width: SCREEN_WIDTH,
    overflow: 'hidden',
    height: SCREEN_WIDTH / 1.1,
    backgroundColor: '#F9FAFB',
  },
  sliderContainerStyle: {
    borderRadius: SCREEN_WIDTH,
    width: SCREEN_WIDTH * 2,
    height: SCREEN_WIDTH * 2,
    marginLeft: -(SCREEN_WIDTH / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  slider: {
    height: SCREEN_WIDTH / 1.2,
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    marginLeft: SCREEN_WIDTH / 2,
    backgroundColor: WHITE,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  // view: {
  //   flexDirection: 'row',
  //   top: 50,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 20,
  // },
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
  centerImage: {
    height: SCREEN_WIDTH / 2,
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

export default BMP_Curve;
