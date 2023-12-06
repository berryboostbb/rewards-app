import {StyleSheet} from 'react-native';
import {BLACK, colorRedDC143C, RF} from '@theme';

export const useStyles = (colors: any) =>
  StyleSheet.create({
    view: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: RF(20),
      marginBottom: 10,
    },
    errorStyle: {
      color: colorRedDC143C,
      fontSize: 11,
      marginTop: 2,
    },
    toggleBtn: {fontWeight: 'bold', color: BLACK},
    dateView: {height: RF(61), color: colors.LABEL_COLOR, marginTop: 10},
    phoneInput: {
      width: '100%',
      marginTop: RF(9),
      color: colors.LABEL_COLOR,
      borderColor: 'grey',
    },
  });
