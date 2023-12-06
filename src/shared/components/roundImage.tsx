import React from 'react';
import Text from './atoms/text';
import {RF, typography, WHITE} from '@theme';
import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';

const RoundImage = ({
  style,
  source,
  title,
  onPress,
}: {
  style?: any;
  source?: any;
  title?: any;
  onPress?: any;
}) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <ImageBackground
        source={source}
        imageStyle={styles.img}
        style={styles.imgBG}>
        <Text
          color={WHITE}
          size={typography.normal}
          semiBold
          numberOfLines={1}
          style={{width: 50}}>
          {title}
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imgBG: {
    width: RF(60),
    height: RF(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RF(100),
    // backgroundColor: '#000',
  },
  img: {borderRadius: 100 / 2},
});

export default RoundImage;
