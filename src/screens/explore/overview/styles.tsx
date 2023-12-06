import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  category_h2: {marginLeft: 22, marginTop: 15, marginBottom: 20},
  h2: {
    marginLeft: RF(-5),
    marginTop: RF(15),
    marginBottom: 5,
  },
  mainView: {
    marginVertical: RF(10),
    borderRadius: RF(15),
    marginLeft: 10,
    marginRight: 20,
  },
  backArrow: {
    width: RF(35),
    height: RF(35),
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
    marginLeft: RF(10),
    marginTop: 12,
  },
  view: {
    flexDirection: 'row',
    marginLeft: RF(25),
    marginBottom: RF(10),
  },
});

export default styles;
