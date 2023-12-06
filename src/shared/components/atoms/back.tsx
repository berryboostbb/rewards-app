import {x} from '@assets';
import React from 'react';
import Text from './text';
import {Image, Pressable, StyleSheet} from 'react-native';
import {borderClr, RF, txt_gray, typography} from '@theme';

const Back = ({
  navigation,
  title,
  isMarginTop,
}: {
  title?: any;
  navigation?: any;
  isMarginTop?: any;
}) => {
  const onPress_CrossBtn = () => {
    navigation.goBack();
  };

  return (
    <>
      <Pressable onPress={onPress_CrossBtn} style={styles.imgView}>
        <Image source={x} resizeMode="contain" style={styles.img} />
      </Pressable>
      <Text
        size={typography.h24}
        color={txt_gray}
        medium
        style={{marginTop: isMarginTop ? 30 : 0}}>
        {title}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  img: {
    width: RF(20),
    height: RF(20),
  },
  imgView: {
    width: RF(40),
    height: RF(40),
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: borderClr,
    marginBottom: 30,
  },
});

export default Back;
