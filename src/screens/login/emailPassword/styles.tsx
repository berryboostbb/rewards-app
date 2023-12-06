import {StyleSheet} from 'react-native';
import {dim_gray, RF} from '@theme';

const styles = StyleSheet.create({
  or: {marginTop: RF(-8), marginHorizontal: RF(12)},
  line_v: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: RF(50),
  },
  line: {
    width: RF(120),
    height: 1.5,
    backgroundColor: dim_gray,
  },
  txt: {fontSize: RF(12), fontWeight: '600'},
  viewBtn: {
    width: '100%',
    marginTop: RF(90),
    alignSelf: 'center',
  },
  view: {
    marginTop: RF(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: '50%',
    height: RF(100),
    alignSelf: 'center',
  },
  viewTxt: {
    position: 'absolute',
    top: RF(80),
    alignSelf: 'center',
    flex: 1,
  },
  wText: {
    alignSelf: 'center',
  },
  emailView: {flex: 1, marginTop: RF(150)},
  btn: {
    flexDirection: 'column',
    width: '45%',
    height: RF(50),
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#ffad0e',
    justifyContent: 'center',
    shadowOpacity: 0.15,
  },
  btnText: {
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

  link: {
    color: '#a1c452',
    // marginTop: RF(-2),
    // textDecorationLine: 'underline',
  },
});

export default styles;
