import {borderClr, RF, WHITE} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    width: '90%',
    height: RF(90),
    borderWidth: 1,
    borderRadius: RF(16),
    borderColor: borderClr,
    marginVertical: RF(10),
    marginHorizontal: RF(20),
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  selectedView: {
    // width: '100%',
    height: RF(80),
    borderRadius: RF(16),
    marginVertical: RF(10),
    marginHorizontal: RF(15),
    marginBottom: RF(80),
  },
  pageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: RF(35),
  },
});

export default styles;
