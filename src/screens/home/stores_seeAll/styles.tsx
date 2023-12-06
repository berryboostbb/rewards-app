import {light_grey, RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    elevation: 2,
    width: '90%',
    height: RF(40),
    marginTop: RF(25),
    borderRadius: RF(40),
    borderBottomWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: light_grey,
    justifyContent: 'space-around',
  },
  img: {width: RF(30), height: RF(20), marginTop: RF(20)},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    bottom: 60,
    position: 'absolute',
    backgroundColor: light_grey,
  },
  view: {marginHorizontal: 20, flex: 1},
  tick: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
