import React from 'react';
import {Text, Custom_CheckBox} from '@components';
import {green, GST, RF, typography} from '@theme';
import {View, StyleSheet, Image, Pressable} from 'react-native';

const Custom_CheckRequirements = ({
  type,
  size,
  title,
  isNumber,
  isCharacters,
  isUpper_LowerCase,
}: {
  size?: any;
  type?: any;
  title?: any;
  isNumber?: any;
  isCharacters?: any;
  isUpper_LowerCase?: any;
}) => {
  return (
    <View>
      <Text size={size ? size : typography.standard} semiBold>
        {title}
        {/* {type === 'profile'
          ? 'Password requirements'
          : 'Your password needs to be at least'} */}
      </Text>
      <Custom_CheckBox
        isSelected={isCharacters}
        title={'8 Characters long'}
        // setSelection={() => onClick('character')}
      />
      <Custom_CheckBox
        isSelected={isUpper_LowerCase}
        title={'Including 1 Uppercase and 1 lowercase'}
        // setSelection={() => onClick('lowerUpper')}
      />
      <Custom_CheckBox
        isSelected={isNumber}
        title={'And 1 number'}
        // setSelection={() => onClick('number')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Custom_CheckRequirements;
