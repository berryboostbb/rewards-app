import Text from './atoms/text';
import TextInput from './textInput';
import {GREY, RED, RF} from '@theme';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

interface PickerProps {
  theme?: any;
  icon?: any;
  error?: any;
  style?: any;
  values?: any;
  downIcon?: any;
  title?: string;
  fontawesome?: any;
  containerStyle?: any;
  placeholder?: string;
  onChange?: (val: any, index: any) => void;
}

const Picker = (props: Partial<PickerProps>) => {
  const {
    icon,
    theme,
    title,
    error,
    style,
    values,
    onChange,
    downIcon,
    placeholder,
    fontawesome,
    containerStyle,
  } = props;

  // const theme: any = useTheme();
  const [label, setLabel] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (value: any, index: any) => {
    const label = index < 1 ? '' : values[index - 1].label;
    setSelectedValue(value);
    setLabel(label);
    if (onChange) {
      onChange(label, index);
    }
  };

  let temp = '';

  if (label !== '' && label !== null && label !== undefined) {
    temp = label;
  } else if (title !== null && title !== '' && title !== undefined) {
    temp = title;
  }

  return (
    <>
      <RNPickerSelect
        items={values}
        value={selectedValue}
        // disabled={disablePicker}
        onValueChange={(v, i) => handleValueChange(v, i)}
        placeholder={{label: 'Please select an item', color: GREY}}>
        <TextInput
          icon={icon}
          value={temp}
          style={style}
          // theme={theme}
          title={placeholder}
          // downIcon={downIcon}
          fontawesome={fontawesome}
        />
      </RNPickerSelect>
      {!!error && (
        <Text size={10} style={styles.errorStyle}>
          {error}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: RED,
    paddingTop: RF(3),
  },
});

export default Picker;
