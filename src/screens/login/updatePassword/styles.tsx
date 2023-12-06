import {Platform, StyleSheet} from 'react-native';
import {borderClr, RF} from '@theme';

const styles = StyleSheet.create({
  header: {
    height: RF(85),
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : RF(25),
  },
  innerText: {
    width: '90%',
    marginTop: RF(16),
    marginBottom: RF(25),
  },
  checkView: {
    flex: 1,
    marginTop: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
