import {RF, SCREEN_WIDTH, WHITE} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lastImg: {
    width: '100%',
    height: '50%',
    marginTop: RF(30),
    resizeMode: 'contain',
  },
  imageView: {
    marginHorizontal: RF(32),
  },
  childBottom: {
    flex: 1,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
  parentBottom: {
    flex: 1,
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: '#F9FAFB',
    marginTop: -80,
  },

  main_heading_view: {
    borderRadius: 50,
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
  scroll_view_wrapper: {
    marginTop: RF(40),
    marginHorizontal: RF(30),
  },
  scroll: {
    marginHorizontal: RF(15),
  },
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
  brand_details_badge: {position: 'absolute', bottom: 10, right: 0},
});

export default styles;
