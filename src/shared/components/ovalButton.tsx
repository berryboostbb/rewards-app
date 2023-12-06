import React from 'react';
import Text from './atoms/text';
import {
  GST,
  light_grey,
  primaryDarkColor,
  RF,
  txt_gray,
  typography,
  WHITE,
} from '@theme';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import {useSelector} from 'react-redux';

const OvalButton = ({
  onPress,
  title,
  source,
  color,
}: {
  onPress?: any;
  title?: any;
  source?: any;
  color?: any;
}) => {
  const {user, colorCode} = useSelector((state: any) => state.root.user);

  return (
    <View style={GST.AIC}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.onClick,
          {backgroundColor: color ? colorCode : light_grey},
        ]}>
        <Image
          source={source}
          style={[styles.image, {tintColor: color ? WHITE : txt_gray}]}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <Text regular size={typography.standard} color={txt_gray}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: RF(20), height: RF(22)},
  onClick: {
    width: RF(80),
    height: RF(40),

    borderRadius: RF(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OvalButton;
