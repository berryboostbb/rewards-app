import {StyleSheet} from 'react-native';
import {BLACK, green, ligh_green, RF} from '@theme';

const styles = StyleSheet.create({
  press: {
    borderRadius: RF(50),
    width: RF(110),
    height: RF(40),
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mTop: {
    width: RF(80),
    height: RF(40),
    marginTop: RF(75),
    left: 30,
  },
  txtimage: {
    width: RF(20),
    height: RF(20),
  },
  iconView: {
    alignItems: 'flex-end',
    marginRight: RF(15),
    marginTop: RF(15),
  },
  scrollview: {flex: 1, marginTop: RF(10)},
  cardView: {paddingBottom: RF(10), marginLeft: -5, flex: 1},
  text: {
    color: BLACK,
    fontSize: RF(16),
    marginTop: RF(20),
    fontWeight: 'bold',
  },
  header: {
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  p_img_View: {
    width: RF(74),
    height: RF(32),
    borderRadius: RF(10),
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: RF(20),
    marginLeft: RF(15),
    justifyContent: 'space-evenly',
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: RF(20),
    height: RF(20),
    marginRight: RF(5),
  },
  txt: {width: RF(100), fontWeight: '700'},
  linearGradientContainer: {
    borderRadius: RF(16),
    // height: '50%',
    justifyContent: 'center',
    padding: 10,
    elevation: 5,
    // width: '70%',
  },
  container1: {
    // flex: 1,
    marginTop: RF(10),
    marginHorizontal: RF(10),
    width: '45%',
    height: '100%',
    // elevation: 2,
  },
});

export default styles;
