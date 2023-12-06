import React from 'react';
import Text from '../atoms/text';
import {RF, txt_gray, typography} from '@theme';
import {Image, Pressable, StyleSheet} from 'react-native';

const Text_Image = ({
  source,
  text,
  onOpen,
}: {
  source?: any;
  text?: any;
  onOpen?: any;
}) => {
  return (
    <Pressable style={styles.mainView} onPress={onOpen}>
      <Image
        source={source}
        resizeMode="contain"
        style={{width: RF(50), height: RF(20)}}
      />
      <Text size={typography.standard} semiBold color={txt_gray}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: RF(60),
    marginTop: RF(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Text_Image;
