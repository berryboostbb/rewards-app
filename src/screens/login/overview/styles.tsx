import {StyleSheet} from 'react-native';
import {ligh_green, RF} from '@theme';

const styles = StyleSheet.create({
  img: {
    width: '50%',
    height: RF(100),
    alignSelf: 'center',
  },
  wText: {
    fontSize: RF(22),
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: RF(-30),
  },
  btn: {
    flexDirection: 'column',
    width: '45%',
    height: RF(50),
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#ffad0e',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    // shadowOffset: {width: 0, height: 0},
  },
  btnText: {
    // color: colors.LABEL_COLOR,
    textAlign: 'center',
    fontSize: RF(13),
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rememberBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: RF(8),
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: RF(10),
  },
  link: {
    color: '#a1c452',
    marginTop: RF(-2),
    textDecorationLine: 'underline',
  },
});

export default styles;
