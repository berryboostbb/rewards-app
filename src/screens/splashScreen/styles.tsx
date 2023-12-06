import {StyleSheet} from 'react-native';
import {BLACK, RF, SCREEN_HEIGHT, SCREEN_WIDTH, WHITE} from '@theme';

export const styles = StyleSheet.create({
  imgBG: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 1.1,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: RF(50),
    marginTop: RF(80),
    marginBottom: RF(60),
  },
  circle: {width: '100%', height: RF(250)},
  btn: {
    width: '50%',
    height: RF(50),
    borderRadius: RF(50),
    backgroundColor: WHITE,
    alignSelf: 'center',
    marginTop: RF(50),
  },
  txt: {
    alignSelf: 'center',
    width: '75%',
    marginTop: RF(20),
  },
  text: {
    width: '75%',
    marginTop: RF(20),
    alignSelf: 'center',
  },
  clr: {color: BLACK},
});
