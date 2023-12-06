import {Platform, StyleSheet} from 'react-native';
import {green, RF, txt_gray, WHITE} from '@theme';

const styles = StyleSheet.create({
  header: {
    height: RF(85),
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
  btn: {
    backgroundColor: green,
    width: RF(120),
    height: RF(40),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 30,
  },
});

export default styles;
