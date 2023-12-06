import React from 'react';
import {Text} from '@components';
import {GST, ligh_green, Moderateyellow, RF, WHITE} from '@theme';
import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import {ImageBackground} from 'react-native';
import {Image} from 'react-native';
import {ViewStyle} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {personal_information, pImg} from '@assets';
// import { getIsDarkModeEnabled } from '@utils';

interface HeaderProps {
  colors: any;
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  navigation: any;
  titleStyle: any;
  entypoIcon: any;
  materialIconsIcon: any;
  foundationIcon: any;
  iconStyle: any;
  fontistoIcon: any;
  fontAwesome5Icon: any;
  ionIconsIcon: any;
  buttonStyle: any;
  plastkSentinal: any;
  logOutIcon: any;
  antDesign: any;
}

const GradientButton = (props: Partial<HeaderProps>) => {
  const {
    title,
    style,
    onPress,
    titleStyle,
    entypoIcon,
    materialIconsIcon,
    foundationIcon,
    iconStyle,
    fontistoIcon,
    fontAwesome5Icon,
    ionIconsIcon,
    buttonStyle,
    plastkSentinal,
    logOutIcon,
    antDesign,
  } = props;
  const iconSize = RF(23);
  const theme: any = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={[
        styles.button,
        buttonStyle,
        {
          backgroundColor: '#f5f5f5',
        },
      ]}>
      <LinearGradient
        colors={[
          theme.colors.PROFILE_SCREEN_START_BUTTON,
          theme.colors.PROFILE_SCREEN_END_BUTTON,
        ]}
        style={[styles.btnContainer, style]}>
        {fontAwesome5Icon && (
          <FontAwesome5
            name={fontAwesome5Icon}
            color={Moderateyellow}
            size={iconSize}
          />
        )}
        {antDesign && (
          <AntDesign name={antDesign} color={Moderateyellow} size={iconSize} />
        )}
        {materialIconsIcon && (
          <MaterialIcons
            name={materialIconsIcon}
            color={Moderateyellow}
            size={iconSize}
          />
        )}
        {entypoIcon && (
          <Entypo name={entypoIcon} color={Moderateyellow} size={iconSize} />
        )}
        {ionIconsIcon && (
          <Ionicons
            name={ionIconsIcon}
            color={Moderateyellow}
            size={iconSize}
          />
        )}
        {fontistoIcon && (
          <Fontisto
            name={fontistoIcon}
            color={Moderateyellow}
            size={iconSize}
          />
        )}
        {foundationIcon && (
          <Foundation
            name={foundationIcon}
            color={Moderateyellow}
            size={iconSize}
          />
        )}

        {plastkSentinal && (
          <View style={styles.view}>
            <ImageBackground
              source={personal_information}
              imageStyle={styles.outerImg}
              resizeMode="contain">
              <Image source={pImg} style={styles.img} resizeMode="contain" />
            </ImageBackground>
          </View>
        )}

        <Text style={[styles.btnText, titleStyle]}>{title}</Text>

        {logOutIcon && (
          <View style={GST.mR10}>
            <MaterialCommunityIcons name="logout" color="#fe5c31" size={22} />
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  outerImg: {
    height: RF(14),
  },
  img: {height: RF(12), width: RF(12)},
  view: {
    backgroundColor: ligh_green,
    borderRadius: RF(24),
    width: RF(24),
    height: RF(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    height: RF(45) > 60 ? 60 : RF(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
    // shadowOpacity: 0.15,
    // shadowOffset: { width: 0, height: 0 },
  },
  btnText: {
    color: WHITE,
  },
  iconView: {},
  icon: {
    marginLeft: RF(0),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RF(10),
    borderRadius: RF(12),
    padding: 1,
  },
});
