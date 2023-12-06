import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  innerView: {flexDirection: 'row', marginHorizontal: RF(10)},
  contactText: {
    paddingTop: RF(27),
    marginTop: RF(20),
  },
  text: {
    marginLeft: RF(20),
  },
  txt: {
    paddingRight: RF(5),
    paddingLeft: RF(-20),
    marginTop: RF(10),
  },
  emailText: {
    paddingRight: RF(20),
    paddingLeft: RF(-20),
    marginTop: RF(20),
  },
  view: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: RF(5),
  },
  container: {
    marginTop: RF(10),
  },
  imageView: {
    height: 260,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    backgroundColor: '#fff',
  },
  image: {
    height: RF(350),
    width: RF(300),
  },
  resend_btn: {
    height: 50,
    elevation: 2,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(161, 196, 82)',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#a1c452',
    elevation: 2,
  },
});

export default styles;
