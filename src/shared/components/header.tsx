import React from 'react';
import {Text} from '@components';
import {NotchView} from '@components';
import {RF, txt_gray, typography, WHITE} from '@theme';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

interface HeaderProps {
  faq?: any;
  title?: any;
  profile?: any;
  navigation?: any;
  style?: ViewStyle;
  showBackButton?: boolean;
}

const Header = (props: Partial<HeaderProps>) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);
  const {style, title, navigation, showBackButton, profile, faq} = props;

  return (
    <>
      <NotchView />
      <View style={[styles.headerContainer, style]}>
        {!showBackButton ? null : (
          <TouchableOpacity
            style={profile ? styles.profileBackView : styles.backArrow}
            onPress={() => navigation.goBack()}>
            <AntDesign
              color={profile ? txt_gray : WHITE}
              name="arrowleft"
              size={RF(20)}
            />
          </TouchableOpacity>
        )}
        <View style={profile ? styles.profileView : styles.txtView}>
          <Text
            center
            numberOfLines={1}
            semiBold
            color={profile ? txt_gray : WHITE}
            size={typography.h3}
            style={faq ? styles.header_FAQ_Text : styles.headerText}>
            {title}
          </Text>
        </View>
      </View>
    </>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    profileBackView: {
      marginTop: 5,
    },
    profileView: {
      marginLeft: RF(20),
      width: '70%',
    },
    txtView: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      height: RF(55),
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    backArrow: {
      width: RF(35),
      height: RF(35),
      shadowOpacity: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: {width: 0, height: 0},
    },
    headerText: {
      // width: 60,
    },
    header_FAQ_Text: {
      width: '110%',
      numberOfLines: 1,
    },
  });

export default Header;
