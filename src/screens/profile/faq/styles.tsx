import {Platform, StyleSheet} from 'react-native';
import {green, RF, txt_gray, WHITE} from '@theme';

const styles = StyleSheet.create({
  header: {
    height: RF(85),
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
});

export default styles;
