import {StyleSheet} from 'react-native';
import {BLACK, colorRedDC143C, primaryDarkColor, RF} from '@theme';

const styles = StyleSheet.create({
  e_view: {flex: 1, marginTop: RF(70)},
  p_view: {flex: 1, marginTop: RF(70)},
  img: {
    width: RF(90),
    height: RF(90),
    resizeMode: 'contain',
    marginTop: RF(-80),
  },
  viewTxt: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wText: {
    alignSelf: 'center',
  },
  text: {marginTop: RF(21), textAlign: 'center', width: '100%'},
  timerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(30),
  },
  tImg: {width: '10%', height: RF(18)},
  innerText: {
    width: '80%',
    marginBottom: RF(25),
  },
  txtSection: {
    marginTop: RF(10),
    textAlign: 'center',
    width: '54%',
    alignSelf: 'center',
    fontWeight: '500',
    fontFamily: 'Plus Jakarta Sans',
  },
  view: {
    // marginTop: RF(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtn: {
    // flex: 1,
    alignItems: 'center',
    // width: '100%',
    // marginTop: RF(20),
    // alignSelf: 'center',
    justifyContent: 'flex-end',
    bottom: RF(50),
  },
  errorStyle: {
    color: colorRedDC143C,
    fontSize: RF(11),
    marginTop: 2,
    paddingLeft: RF(10),
  },
  txt: {fontSize: RF(12), fontWeight: '600'},
  viewStyle: {
    flex: 1,
    marginTop: RF(115),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
