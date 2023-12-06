import Text from './atoms/text';
import React, {useState} from 'react';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';
import {View, StyleSheet} from 'react-native';
import {
  colorRedDC143C,
  light_grey,
  primaryDarkColor,
  RF,
  typography,
} from '@theme';

const CustomCodeField = ({
  value,
  setValue,
  error,
}: {
  value?: any;
  setValue?: any;
  error?: any;
}) => {
  const ref = useBlurOnFulfill({value, cellCount: 4});
  // const [props, getCellOnLayoutHandler] = useClearByFocusCell({
  //   value,
  //   setValue,
  // });

  return (
    <View>
      <CodeField
        ref={ref}
        value={value}
        cellCount={4}
        onChangeText={(val: any) => setValue(val)}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={styles.codeFieldRoot}
        renderCell={({index, symbol, isFocused}) => (
          <View
            style={styles.cell}
            key={index}
            // onLayout={getCellOnLayoutHandler(index)}
          >
            <Text size={typography.h3} color={primaryDarkColor}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      {!!error && (
        <Text size={typography.normal} style={styles.errorStyle}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorStyle: {
    color: colorRedDC143C,
    paddingTop: RF(3),
    paddingLeft: RF(20),
  },
  codeFieldRoot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {flex: 1},
  cell: {
    marginRight: RF(8),
    width: RF(60),
    height: RF(60),
    borderRadius: RF(17),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: light_grey,
  },
  focusCell: {},
});

export default CustomCodeField;
