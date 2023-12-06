import {StyleSheet} from 'react-native';
import {BLACK, colorRedDC143C, primaryDarkColor, RF} from '@theme';

const styles = StyleSheet.create({
  txt: {fontSize: RF(12), fontWeight: '600'},
  viewTxt: {
    position: 'absolute',
    top: RF(80),
    alignSelf: 'center',
    flex: 1,
  },
  wText: {
    alignSelf: 'center',
  },
  emailView: {flex: 1, marginTop: RF(10)},
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
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(40),
  },
  viewBtn: {
    width: '100%',
    // marginTop: RF(30),
    alignSelf: 'center',
  },
  errorStyle: {
    color: colorRedDC143C,
    fontSize: RF(10),
    marginTop: 2,
    paddingLeft: RF(20),
    fontFamily: 'Plus Jakarta Sans',
  },
  dateView: {},
});

export default styles;
