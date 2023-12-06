import {primaryDarkColor, RF, SCREEN_WIDTH, WHITE} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parentBottom: {
    flex: 1,
    zIndex: 10,
    marginTop: -100,
    overflow: 'hidden',
    backgroundColor: WHITE,
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  childBottom: {
    flex: 1,
    // alignItems: 'center',
    paddingTop:RF(60),
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
  main_heading_view: {
    justifyContent: 'center',
    marginTop: RF(5),
  },
  main_heading: {
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'capitalize',
  },
  imgBlur: {
    width: '100%',
    height: RF(150),
    borderRadius: RF(20),
    marginTop: RF(20),
  },
  img: {width: '100%', height: RF(150)},
  scroll: {marginHorizontal: RF(15)},
  image: {
    width: '100%',
    height: RF(50),
    resizeMode: 'contain',
    marginTop: RF(20),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: RF(25),
  },
  p_image: {
    width: RF(20),
    height: RF(20),
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  p_img_View: {
    width: RF(110),
    height: RF(32),
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RF(16),
    marginLeft: RF(16),
    justifyContent: 'space-evenly',
  },
  txtimage: {
    width: RF(20),
    height: RF(20),
  },
  textStyle: {marginLeft: -10},
});

export default styles;
