import {borderClr, primaryDarkColor, RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imgView: {
    width: '100%',
    height: RF(215),
    // alignItems: 'center',
    marginTop: RF(40),
  },
  txt_view: {marginLeft: RF(60), marginTop: RF(45)},
  img_View: {
    flexDirection: 'row',
    marginVertical: RF(20),
    alignItems: 'center',
  },
  img: {
    width: RF(40),
    height: RF(40),
  },
  points_number: {
    marginLeft: RF(5),
    fontSize: RF(28),
  },
  innerView: {
    width: RF(160),
    height: RF(45),
    borderRadius: RF(30),
    // backgroundColor: primaryDarkColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: RF(10),
  },
  inner_img: {width: RF(12), height: RF(12), marginRight: RF(5)},
  outerView: {
    borderWidth: 1,
    borderColor: borderClr,
    height: RF(130),
    marginHorizontal: RF(25),
    borderRadius: RF(16),
    marginTop: RF(25),
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: RF(30),
  },
  image: {width: RF(12), height: RF(11)},
  pointsView: {
    marginTop: RF(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  wh_img: {width: RF(12), height: RF(12), marginTop: RF(2), marginRight: RF(3)},
});

export default styles;
