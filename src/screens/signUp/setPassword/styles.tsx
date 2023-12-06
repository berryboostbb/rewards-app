import {StyleSheet} from 'react-native';
import {ligh_green, mulish_regular, RED, RF, THEME} from '@theme';

export const styles = StyleSheet.create({
  img: {height: 30, width: 160, margin: 20, padding: 30},
  imgView: {
    flex: 1,
    alignItems: 'center',
    marginTop: RF(15),
  },
  errorStyle: {
    color: RED,
    paddingTop: RF(3),
    fontSize: RF(12),
  },
  textStyle: {
    fontFamily: mulish_regular,
  },
  privacyPolicyText: {
    fontFamily: mulish_regular,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: ligh_green,
    marginBottom: RF(10),
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  phoneInput: {
    width: '96%',
    marginTop: RF(20),
    // color: 'gray',
    borderColor: 'grey',
  },
  button: {
    alignItems: 'center',
    marginTop: RF(30),
    // marginVertical: RF(30),
  },
});
