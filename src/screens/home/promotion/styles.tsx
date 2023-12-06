import {ligh_green, RF} from '@theme';
import {StyleSheet} from 'react-native';

export const useStyles = (colors: any) =>
  StyleSheet.create({
    section: {
      flexDirection: 'row',
      marginHorizontal: RF(20),
      justifyContent: 'space-between',
    },
    img: {
      width: '100%',
      height: RF(200),
      borderRadius: 15,
      alignSelf: 'center',
    },
    mainView: {
      // height: '33%',
      width: '100%',
      marginTop: RF(3),
      backgroundColor: colors.BACKGROUND_COLOR,
      borderRadius: 15,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      // borderWidth: 2,
    },
    container: {
      flex: 1,
    },
    ratingExternalContainer: {
      elevation: 5,
      padding: '3%',
      marginTop: RF(20),
      borderRadius: 15,
      shadowOpacity: 0.2,
      marginHorizontal: RF(2),
      shadowOffset: {width: 0, height: 0},
      backgroundColor: colors.BACKGROUND_COLOR,
    },
    body: {
      flex: 1,
    },
    itemsContainer: {
      marginHorizontal: '2%',
    },
    titleContainer: {
      margin: 10,
    },
    title: {
      fontSize: RF(10),
      // marginLeft: '1',

      color: colors.LABEL_COLOR,
    },
    ratingContainer: {
      // flexDirection: 'row',
      marginTop: RF(5),
    },
    reviewView: {
      marginTop: RF(15),
      marginHorizontal: RF(8),
    },
    summary: {fontWeight: 'bold', marginTop: RF(10)},
    addressContainer: {
      flexDirection: 'row',
      marginTop: RF(15),
      marginHorizontal: RF(8),
      // maxWidth: '86%',
    },
    options: {
      // paddingVertical: '2%',
      borderBottomWidth: 0.2,
      borderTopWidth: 0.2,
      marginTop: RF(5),
      // marginBottom: '1%',
      // width: '10%',
      // justifyContent: 'space-between',
      // flexDirection: 'row',
    },
    optionsIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: ligh_green,
    },
    optionsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      // width: '25%',
    },
  });
