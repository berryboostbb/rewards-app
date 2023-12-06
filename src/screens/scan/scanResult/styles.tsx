import {StyleSheet} from 'react-native';
import {RF, txt_gray, WHITE, borderClr} from '@theme';

const styles = StyleSheet.create({
  points: {width: RF(18), height: RF(18), marginRight: RF(5)},
  txt: {marginBottom: RF(20), marginTop: RF(5)},
  header: {
    height: RF(85),
    marginTop: RF(25),
  },
  text: {marginBottom: RF(30), marginTop: RF(10)},
  view: {
    flex: 0.8,
    justifyContent: 'center',
    marginHorizontal: RF(25),
  },
  totalView: {
    // position: 'absolute',
    // bottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 20,
    marginBottom: RF(50),
  },
  mainView: {
    width: '100%',
    height: RF(80),
    borderWidth: 1,
    borderRadius: RF(16),
    borderColor: borderClr,
    marginVertical: RF(10),
    paddingHorizontal: RF(20),
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
});

export default styles;
