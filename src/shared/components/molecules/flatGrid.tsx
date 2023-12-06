import {borderClr, primaryDarkColor, RF, typography, WHITE} from '@theme';
import React from 'react';
import {FlatList, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@components';

const CustomFlatGrid = ({
  data,
  onPress,
  selected,
  height,
  selectedItem,
  pH,
  bmp,
}: {
  pH?: any;
  data?: any;
  height?: any;
  selected?: any;
  selectedItem?: any;
  bmp?: any;
  onPress?: (item?: any, index?: any) => void;
}) => {
  return (
    <FlatList
      data={data}
      numColumns={3}
      style={[
        styles.gridView,
        {
          marginTop: pH ? 50 : 0,
        },
      ]}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={[
        styles.column,
        {
          paddingHorizontal: pH || bmp ? 10 : 0,
        },
      ]}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                backgroundColor: selected?.includes(item)
                  ? primaryDarkColor
                  : WHITE,
                height: height,
                padding: pH || bmp ? 5 : 0,
              },
            ]}
            onPress={() => onPress(item, index)}>
            <Text
              align={pH || bmp ? true : false}
              numberOfLines={pH || bmp ? 3 : 1}
              color={selected.includes(item) ? WHITE : primaryDarkColor}
              size={typography.standard}>
              {item?.value ? item?.value : item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  column: {
    justifyContent: 'space-evenly',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 15,
    // alignSelf: 'center',
  },
  gridView: {
    paddingTop: RF(10),
  },
  itemContainer: {
    width: '30%',
    justifyContent: 'center',
    // elevation: 5,
    borderWidth: 1,
    borderColor: borderClr,
    borderRadius: RF(10),
    // paddingHorizontal: Platform.OS === 'ios' ? RF(12) : RF(15),
    // paddingVertical: RF(7),
    marginBottom: RF(15),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  itemName: {
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default CustomFlatGrid;
