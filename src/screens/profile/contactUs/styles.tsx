import {Platform, StyleSheet} from 'react-native';
import {RF, txt_gray, WHITE} from '@theme';

const styles = StyleSheet.create({
  header: {
    height: RF(85),
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
  text: {
    marginBottom: RF(30),
    marginTop: RF(10),
    // backgroundColor: 'red',
    // width: '110%',
  },
  view: {
    flex: 0.8,
    justifyContent: 'center',
    marginHorizontal: RF(25),
  },
  mb: {marginBottom: Platform.OS === 'ios' ? 0 : RF(30)},
});

export default styles;
