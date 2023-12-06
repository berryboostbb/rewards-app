import {borderClr, RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: RF(100),
    justifyContent: 'center',
  },
  timerStyle: {
    marginTop: RF(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: -10,
  },
  tImg: {height: RF(18), width: RF(20)},
  txt: {
    fontSize: RF(14),
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans',
  },
  inputView: {
    height: RF(40),
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: borderClr,
    paddingLeft: 20,
  },
  resendView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: RF(25),
  },
  lastView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtinput: {
    flex: 1,
    justifyContent: 'center',
  },
  resetText: {marginTop: 20, paddingRight: 1},
  mt: {marginTop: RF(20)},
  container: {
    flex: 1,
    marginTop: RF(50),
  },
  pin: {marginTop: RF(55), marginBottom: RF(20)},
  enter: {marginTop: RF(10), paddingRight: RF(20), marginLeft: 20},
});

export default styles;
