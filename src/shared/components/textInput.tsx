import {
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  TextInput as RNTextInput,
  Image,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  colorRedDC143C,
  light_grey,
  linearClr,
  RF,
  txt_gray,
  typography,
} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '@components';
import {secure, unsecure} from '@assets';

interface Props extends TextInputProps {
  icon?: any;
  txtStyle?: any;
  width?: any;
  title?: any;
  value?: any;
  error?: any;
  margin?: any;
  _secure?: any;
  iconSize?: any;
  onPress?: any;
  optional?: any;
  ionicons?: any;
  txtMargin?: any;
  txtInput?: any;
  multiline?: any;
  maxLength?: any;
  antDesign?: any;
  isEditable?: any;
  fontawesome?: any;
  keyboardType?: any;
  defaultValue?: any;
  onChangeText?: any;
  placeHolderClr?: any;
  autoCapitalize?: any;
  containerStyle?: any;
  onSubmitEditing?: any;
  placeholderText?: any;
  secureTextEntry?: any;
}

const TextInput = (props: Partial<Props>) => {
  const {
    icon,
    txtStyle,
    title,
    width,
    value,
    error,
    margin,
    onPress,
    _secure,
    optional,
    txtMargin,
    txtInput,
    ionicons,
    iconSize,
    maxLength,
    multiline,
    antDesign,
    isEditable,
    fontawesome,
    keyboardType,
    defaultValue,
    onChangeText,
    autoCapitalize,
    containerStyle,
    placeholderText,
    placeHolderClr,
    secureTextEntry,
    onSubmitEditing,
  } = props;
  let maxLen = maxLength === undefined ? 100 : maxLength;
  let editable = isEditable === undefined ? true : isEditable;

  const theme: any = useTheme();

  return (
    <>
      <View
        style={[
          containerStyle,
          styles.inputContainer,
          {marginTop: margin ? RF(10) : RF(5)},
        ]}>
        <View style={[styles.textContainer, {marginTop: txtMargin && RF(10)}]}>
          {title && (
            <Text
              bold
              size={typography.standard}
              color={txt_gray}
              style={txtStyle}>
              {title}
            </Text>
          )}
          <Text style={styles.OptionalText}>{optional}</Text>
        </View>

        <View style={styles.iconInputContainer}>
          {icon && (
            <MaterialIcons
              name={icon}
              style={styles.icon}
              size={iconSize || RF(16)}
              color={theme.colors.LABEL_COLOR}
            />
          )}
          {fontawesome && (
            <FontAwesome
              name={fontawesome}
              style={styles.icon}
              size={iconSize || RF(16)}
              color={theme.colors.LABEL_COLOR}
            />
          )}

          <RNTextInput
            multiline={multiline}
            placeholder={placeholderText}
            placeholderTextColor={
              placeHolderClr ? placeHolderClr : theme.colors.LABEL_COLOR
            }
            style={[
              txtInput
                ? txtInput
                : multiline
                ? styles.multilineView
                : styles.input,
              {
                width,
                textAlignVertical: multiline ? 'top' : 'center',
                color: theme.colors.LABEL_COLOR,
              },
            ]}
            value={value}
            maxLength={maxLen}
            editable={editable}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            // autoCapitalize={'words'}
          />
          {_secure && (
            <TouchableOpacity
              onPress={onPress}
              style={{
                height: RF(40),
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
              }}>
              {secureTextEntry ? (
                <Image
                  source={unsecure}
                  style={{
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    tintColor: '#1C1C1E',
                  }}
                />
              ) : (
                <Image
                  source={secure}
                  style={{
                    resizeMode: 'contain',
                    width: 20,
                    height: 20,
                    tintColor: '#1C1C1E',
                  }}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!!error && (
        <Text size={typography.normal} style={styles.errorStyle}>
          {error}
        </Text>
      )}
    </>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  errorStyle: {
    color: colorRedDC143C,
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
  txt: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: RF(10),
    paddingRight: RF(10),
  },
  inputContainer: {
    paddingVertical: RF(10),
  },
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: light_grey,
    height: RF(45),
    borderRadius: RF(50),
    padding: 10,
  },
  multilineView: {
    backgroundColor: linearClr,
    height: RF(200),
    borderRadius: 20,
    paddingLeft: RF(25),
  },
  input: {
    flex: 1,
    backgroundColor: light_grey,
    height: RF(40),
    borderRadius: RF(50),
    fontSize: RF(12.5),
    opacity: 1,
    paddingLeft: RF(15),
    fontWeight: '500',
    fontFamily: 'Plus Jakarta Sans',
  },
  icon: {
    marginRight: RF(5),
  },
  placeholderText: {},
  textContainer: {
    marginHorizontal: RF(20),
  },
  OptionalText: {
    color: '#4A5568',
    // fontFamily: mulish_regular,
    fontSize: RF(11),
  },
});
