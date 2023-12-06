import React from 'react';
import {Text} from '@components';
import {checkbox} from '@assets';
import {borderClr, green, GST, RF, typography} from '@theme';
import {View, StyleSheet, Image, Pressable} from 'react-native';

const Custom_CheckBox = ({
  title,
  isSelected,
  setSelection,
}: {
  title?: any;
  isSelected?: any;
  setSelection?: any;
}) => {
  return (
    <View style={styles.view}>
      <Pressable onPress={setSelection}>
        {isSelected ? (
          <Image
            source={checkbox}
            resizeMode="contain"
            style={{width: RF(20), height: RF(20)}}
          />
        ) : (
          <View style={styles.borderView} />
        )}
      </Pressable>
      <Text size={typography.standard} regular style={GST.ml3}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderView: {
    // borderWidth: 1,
    // borderColor: green,
    backgroundColor: borderClr,
    width: RF(20),
    height: RF(20),
    borderRadius: 6,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(10),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {},
  label: {
    margin: 8,
  },
});

export default Custom_CheckBox;
