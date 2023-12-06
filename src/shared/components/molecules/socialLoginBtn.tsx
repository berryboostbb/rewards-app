import * as React from 'react';
import {Text} from '@components';
import {useSelector} from 'react-redux';
import {dull_gray, gray, RF, typography, WHITE} from '@theme';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const SocialLoginBtn = ({
  title,
  onPress,
  btnStyle,
  disable,
  disabled,
  textStyle,
  children,
  bgClr,
  width,
  src,
}: {
  src?: any;
  width?: any;
  bgClr?: any;
  title?: any;
  disable?: any;
  children?: any;
  btnStyle?: any;
  disabled?: any;
  textStyle?: any;
  onPress?: () => void;
}) => {
  const {colorCode} = useSelector((state: any) => state.root.user);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        btnStyle,
        disable && styles.disable,
        {
          backgroundColor: bgClr ? bgClr : colorCode,
          width: width ? width : RF(280),
        },
      ]}>
      <Image
        source={src}
        style={{
          resizeMode: 'contain',
          width: RF(15),
          height: RF(15),
          marginRight: RF(10),
        }}
      />
      <Text
        style={[
          styles.text,
          textStyle,
          {color: bgClr === WHITE ? gray : WHITE},
        ]}
        size={typography.normal}
        medium>
        {title}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export default SocialLoginBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: RF(35),
    alignItems: 'center',
    borderRadius: RF(6),
    elevation: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
    marginBottom: RF(10),
    alignSelf: 'center',
    paddingLeft: 20,
  },
  disable: {
    flexDirection: 'row',
    width: '100%',
    height: RF(50),
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(10),
    elevation: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
  },
  text: {
    fontSize: RF(12),
    fontWeight: 'bold',
  },
});
