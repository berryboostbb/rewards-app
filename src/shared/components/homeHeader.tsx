import {
  RF,
  WHITE,
  green,
  txt_gray,
  borderClr,
  typography,
  mulish_bold,
  mulish_regular,
  primaryDarkColor,
} from '@theme';
import React from 'react';
import {navigate} from '@services';
import {Text, UserAvatar, NotchView} from '@components';
import {TouchableOpacity, StyleSheet, View, Platform} from 'react-native';

const HomeHeader = ({
  title,
  myTheme,
  cardText,
  backgroundColor,
  menuButtonPressed,
}: {
  title?: any;
  myTheme?: any;
  cardText?: any;
  backgroundColor?: any;
  menuButtonPressed?: () => void;
}) => {
  const styles = useStyles(myTheme.colors);

  return (
    <>
      <NotchView />
      <View style={styles.nameContainer}>
        <TouchableOpacity onPress={menuButtonPressed} style={styles.view}>
          <UserAvatar />
          <Text
            style={styles.ml}
            size={typography.h3}
            semiBold
            color={txt_gray}>
            {title}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.middleView,
            {
              backgroundColor: backgroundColor,
            },
          ]}
          onPress={() => {
            navigate('Earn_Rewards');
          }}>
          <Text color={WHITE} medium size={typography.normal} align>
            {cardText}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeHeader;

export const useStyles = (colors: any) =>
  StyleSheet.create({
    ml: {marginLeft: RF(5)},
    view: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: RF(14),
      height: RF(14),
      marginRight: RF(5),
    },
    middleView_Card: {
      width: RF(125),
      height: RF(40),
      borderRadius: RF(50),
      alignItems: 'center',
      backgroundColor: green,
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: borderClr,
    },
    middleView: {
      width: '40%',
      height: RF(40),
      borderRadius: RF(50),
      alignItems: 'center',
      backgroundColor: primaryDarkColor,
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: borderClr,
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? RF(25) : RF(40),
      marginHorizontal: RF(15),
    },
    nameTextStyle: {
      fontSize: RF(20),
      marginTop: RF(5),
      fontWeight: '700',
      fontFamily: mulish_bold,
      color: colors.LABEL_COLOR,
    },
    welcomeTextStyle: {
      fontSize: RF(15),
      marginTop: RF(5),
      fontWeight: '600',
      fontFamily: mulish_regular,
    },
  });
