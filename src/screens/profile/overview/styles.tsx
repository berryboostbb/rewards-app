import {green, RF, WHITE} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: RF(50),
    height: RF(50),
    marginRight: RF(7),
  },
  imgBG: {
    height: RF(100),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  pressable: {
    backgroundColor: WHITE,
    height: RF(100),
  },
});

export default styles;
