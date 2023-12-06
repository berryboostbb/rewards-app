import {dull_gray, green, RF, SCREEN_HEIGHT, txt_black, WHITE} from '@theme';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  list: {
    height: RF(450),
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    height: RF(85),
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
  txt: {
    color: '#1D1D1D',
    fontSize: RF(12),
    fontFamily: 'Plus Jakarta Sans',
  },
  view: {
    marginTop: SCREEN_HEIGHT / 2.5,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    // backgroundColor: txt_black,
    // borderRadius: RF(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RF(30),
    paddingVertical: RF(25),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    backgroundColor: dull_gray,
    borderRadius: RF(50),
    width: RF(30),
    height: RF(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cross: {
    backgroundColor: WHITE,
    borderRadius: RF(50),
    width: RF(15),
    height: RF(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: RF(5),
  },
  crossView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
  },
  btn: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
});

export default styles;
