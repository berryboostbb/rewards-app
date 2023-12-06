import {dull_gray, green, RF, txt_black, WHITE} from '@theme';
import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: RF(85),
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
});

export default styles;
