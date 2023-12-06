import {BLACK, RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: RF(40),
    marginTop: RF(30),
    paddingHorizontal: 20,
  },
  mainView: {
    marginBottom: RF(40),
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: RF(20),
  },
  img: {width: RF(20), height: RF(20), marginRight: RF(5)},
});

export default styles;
