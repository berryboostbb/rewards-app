import {RF, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // paddingTop: SAFE_STATUS_BAR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: '22%',
  },
  backButton: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 55,
    elevation: 3,
    position: 'absolute',
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

  scroll: {
    marginHorizontal: RF(15),
    // width: '100%',
    // borderRadius: 60,
    // position: 'absolute',
    // backgroundColor: 'white',
    // marginTop: RF(300),
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
});

export default styles;
