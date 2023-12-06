import React from 'react';
import {Text} from '@components';
import {ligh_green, typography} from '@theme';
import ToggleSwitch from 'toggle-switch-react-native';
import {GST, primaryDarkColor, RF, txt_gray} from '@theme';
import {View, StyleSheet, Pressable, ViewStyle} from 'react-native';

const RememberMe = ({
  onPressForgotPass,
  title,
  style,
  onPress,
  onClick,
  viewStyle,
  rememberMe,
  theme,
  onToggle,
  isEnabled,
  storeTheme,
}: {
  title?: any;
  style?: any;
  rememberMe?: any;
  onPress?: () => void;
  onClick?: () => void;
  viewStyle?: ViewStyle;
  onPressForgotPass?: () => void;
  theme?: any;
  onToggle?: any;
  isEnabled?: any;
  storeTheme?: any;
}) => {
  return (
    <View style={[styles.forgotView, viewStyle]}>
      <View style={[GST.flexDir1, viewStyle, styles.toggle]}>
        {/* <RadioButton.Android
          color={green}
          value={isToggle}
          onPress={onPress}
          uncheckedColor={dim_gray}
          status={isToggle ? 'checked' : 'unchecked'}
          style={{backgroundColor: 'red'}}
        /> */}
        <ToggleSwitch
          size={'small'}
          isOn={isEnabled}
          offColor="#dcdcdc"
          onColor={ligh_green}
          onToggle={
            theme ? () => storeTheme('THEME_KEY', !isEnabled) : () => onToggle()
          }
        />
        <Text style={[styles.txt, style]} semiBold size={typography.normal}>
          {title}
        </Text>
      </View>

      {rememberMe && (
        <Pressable onPress={onClick}>
          <Text
            semiBold
            color={txt_gray}
            style={styles.passwordText}
            onPress={onPressForgotPass}>
            Forgot Password
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  toggle: {
    marginTop: RF(8),
    marginLeft: RF(10),
  },
  passwordText: {
    marginTop: RF(8),
    marginRight: RF(25),
    fontSize: RF(12),
  },
  forgotView: {
    flexDirection: 'row',
  },
  txt: {
    fontWeight: '600',
    color: primaryDarkColor,
    fontSize: RF(12),
    alignSelf: 'center',
    fontFamily: 'Plus Jakarta Sans',
    marginLeft: RF(10),
  },
});

export default RememberMe;
