import React from 'react';
import Text from './atoms/text';
import {RF, txt_gray, typography} from '@theme';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const SeeAll = ({title, onPress}: {title?: any; onPress?: any}) => {
  return (
    <View style={styles.mainView}>
      <Text size={typography.h3} color={txt_gray} semiBold>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text size={typography.standard} medium color={txt_gray}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: RF(25),
    marginBottom: RF(5),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: RF(40),
    justifyContent: 'space-between',
  },
});

export default SeeAll;
