import {StyleSheet} from 'react-native';
import {primaryDarkColor, RF} from '@theme';

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 120,
    alignSelf: 'center',
  },
  miniText: {width: '85%', marginTop: RF(8)},
  mini_Img: {marginTop: RF(4), marginLeft: RF(3)},
  mTop: {
    marginTop: RF(10),
  },

  halfImgView: {
    width: RF(150),
    height: RF(150),
  },
  top_img: {
    width: RF(120),
    height: RF(110),
    marginTop: RF(25),
  },
  img1: {
    width: RF(150),
    height: RF(115.5),
    marginTop: RF(17),
    borderTopRightRadius: RF(15),
    borderBottomRightRadius: RF(15),
  },
  halfImgView1: {
    width: RF(160),
    height: RF(160),
    overflow: 'hidden',
    transform: [{scaleY: 1.3}],
    borderTopLeftRadius: RF(70),
    borderBottomLeftRadius: RF(70),
  },
  blueView: {
    width: '60%',
    height: RF(150),
    borderTopLeftRadius: RF(15),
    borderBottomLeftRadius: RF(15),
    paddingVertical: RF(16),
    paddingLeft: RF(16),
    // backgroundColor: 'green',
  },
  txtimage1: {
    width: RF(20),
    height: RF(20),
  },
  imgView1: {
    width: RF(74),
    height: RF(32),
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainView: {
    flexDirection: 'row',
    height: RF(160),
    width: '100%',
    borderRadius: RF(15),
    justifyContent: 'center',
  },
  innerView: {
    width: '80%',
    height: RF(100),
    marginTop: RF(30),
    flexDirection: 'row',
  },

  txtimage: {
    width: '100%',
    height: RF(110),
  },
  img_View: {
    width: '60%',
    height: RF(40),
    alignItems: 'center',
  },
  animated: {
    // flex: 1,
    // borderRadius: 20,
    // alignItems: 'center',
    // backgroundColor: 'red',
    // justifyContent: 'space-around',
    // flexDirection: 'row',
    height: RF(160),
    // width: '100%',
    // elevation: 20,
    // borderWidth: 3,
  },
  iconView: {
    marginTop: RF(20),
    alignItems: 'flex-end',
    marginRight: RF(10),
  },
  pressable: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_img_view: {
    marginTop: RF(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  up: {
    width: '4%',
    height: RF(14),
    marginTop: RF(50),
  },
  down_img_view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: RF(20),
    // backgroundColor: 'red',
  },
  down: {
    width: '4%',
    height: RF(14),
  },
  logi: {
    width: '100%',
    height: RF(45),
  },
  offers: {
    width: '100%',
    height: RF(100),
  },

  carousel: {
    flex: 1,
    marginBottom: 50,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {width: RF(58), height: RF(100)},

  header: {marginTop: RF(40), marginHorizontal: RF(20)},

  backgroundImage: {
    flex: 1,
    backgroundColor: primaryDarkColor,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default styles;
