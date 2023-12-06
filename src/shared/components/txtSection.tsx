import React from 'react';
import Text from './atoms/text';
import {StyleSheet, View} from 'react-native';
import {primaryDarkColor, RF, typography} from '@theme';

const TextSection = ({
  myTheme,
  title,
  text,
  style,
  mh,
  top,
  wd,
}: {
  myTheme: any;
  title?: any;
  text?: any;
  style?: any;
  mh?: any;
  top?: any;
  wd?: any;
}) => {
  return (
    <View
      style={[
        styles.viewTxt,
        {marginHorizontal: mh ? 20 : 0, top: top ? top : RF(50)},
      ]}>
      <Text
        style={[styles.wText, {width: wd ? wd : RF(250)}]}
        color={primaryDarkColor}
        size={typography.heading}
        semiBold
        align>
        {title}
      </Text>
      <Text
        medium
        color={primaryDarkColor}
        size={typography.standard}
        style={style ? style : styles.txt}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewTxt: {
    position: 'absolute',
    alignSelf: 'center',
    flex: 1,
  },
  wText: {
    alignSelf: 'center',
  },
  txt: {marginTop: RF(10), textAlign: 'center'},
});

export default TextSection;
