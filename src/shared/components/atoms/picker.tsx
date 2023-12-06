import React from 'react';
import {txt_gray} from '@theme';
import {StyleSheet} from 'react-native';
import {WheelPicker} from 'react-native-wheel-picker-android';

const wheelPickerData = ['Default', 'Alphabetical (A-Z)', 'Alphabetical (Z-A)'];

const CustomPicker = ({
  selected,
  onSelected,
}: {
  selected?: any;
  onSelected?: any;
}) => {
  return (
    <WheelPicker
      itemTextSize={19}
      data={wheelPickerData}
      initPosition={selected}
      selectedItem={selected}
      itemTextColor={'#a1a1a4'}
      selectedItemTextSize={23}
      indicatorColor={'#c0c0c4'}
      selectedItemTextColor={txt_gray}
      itemTextFontFamily={'Plus Jakarta Sans'}
      onItemSelected={(item: any) => onSelected(item)}
      selectedItemTextFontFamily={'Plus Jakarta Sans'}
    />
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
