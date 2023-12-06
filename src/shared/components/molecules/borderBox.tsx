import React from 'react';
import {Pressable, View} from 'react-native';
import RememberMe from '../rememberMe';
import {dim_gray, green, RF} from '@theme';

const BorderBox = ({
  title,
  selected,
  onPressRadioBtn,
}: {
  title: any;
  selected?: any;
  onPressRadioBtn?: any;
}) => {
  return (
    <Pressable
      style={{
        width: '85%',
        height: RF(90),
        borderWidth: 2,
        marginTop: RF(8),
        alignSelf: 'center',
        borderRadius: RF(16),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: selected ? green : dim_gray,
      }}
      onPress={onPressRadioBtn}>
      <RememberMe title={title} isToggle={selected} onPress={onPressRadioBtn} />
    </Pressable>
  );
};

export default BorderBox;
