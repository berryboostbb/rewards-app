import {StyleSheet} from 'react-native';
import {RF, SCREEN_HEIGHT, SCREEN_WIDTH, txt_gray, WHITE} from '@theme';

const styles = StyleSheet.create({
  topImgBG: {
    height: 400,
    width: '100%',
  },
  back: {
    width: RF(30),
    height: RF(26),
    marginTop: RF(60),
    marginLeft: RF(25),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0.5,
  },
  topImg: {
    width: RF(20),
    height: RF(16),
  },
  IconImg: {
    width: RF(60),
    height: RF(60),
    marginBottom: RF(20),
  },
  copy: {
    width: RF(20),
    height: RF(20),
    marginLeft: RF(20),
  },
  imgBG: {
    width: '100%',
    height: RF(60),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: RF(10),
  },
  mainView: {
    alignItems: 'center',
    top: 40,
    marginHorizontal: RF(25),
  },
  mainImage: {
    top: 300,
    height: SCREEN_HEIGHT - 100,
    // height: 1200,
    width: SCREEN_WIDTH,
    position: 'absolute',
  },
  wd: {width: '70%', marginTop: 10},
  btn: {width: RF(20), height: RF(20)},
  btnView: {
    width: RF(200),
    height: RF(50),
    marginTop: RF(30),
  },
  font: {
    color: txt_gray,
    marginRight: 5,
    fontWeight: '700',
    fontSize: RF(12),
    fontFamily: 'Plus Jakarta Sans',
  },
});

export default styles;
