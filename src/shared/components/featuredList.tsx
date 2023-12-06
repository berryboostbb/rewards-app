import React from 'react';
import Text from './atoms/text';
import {useTheme} from '@react-navigation/native';
import {BLACK, GST, ligh_green, RF, WHITE} from '@theme';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';

const FeaturedList = ({
  data,
  onPress,
  onPressAll,
  selectedFeatured,
  selectedAllFeatured,
}: {
  data?: any;
  selectedFeatured?: any;
  onPress?: () => void;
  onPressAll?: () => void;
  selectedAllFeatured?: any;
}) => {
  const theme: any = useTheme();

  return (
    <View style={GST.mt15}>
      <Text size={20} style={GST.bold}>
        Featured
      </Text>

      <View style={GST.flexDir1}>
        <Pressable
          style={[
            styles.containerAll,
            {
              backgroundColor: selectedAllFeatured ? ligh_green : WHITE,
            },
          ]}
          onPress={onPressAll}>
          <Text
            center
            style={GST.w70}
            numberOfLines={2}
            color={selectedAllFeatured ? WHITE : BLACK}>
            All
          </Text>
        </Pressable>

        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any, index: any) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <Pressable
                style={{
                  marginRight: RF(5),
                  borderRadius: RF(20),
                  backgroundColor:
                    selectedFeatured === index ? ligh_green : WHITE,
                }}
                onPress={() => onPress(item, index)}>
                <View style={styles.container}>
                  <Text
                    center
                    color={selectedFeatured === index ? WHITE : BLACK}>
                    {item.sub_category_name}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {width: '50%', height: RF(100)},
  containerAll: {
    padding: RF(5),
    alignItems: 'center',
    borderRadius: RF(50),
    marginHorizontal: RF(10),
    elevation: 5,
  },
  container: {
    padding: RF(5),
    alignItems: 'center',
    borderRadius: RF(50),
  },
  linearGradientContainer: {
    borderRadius: RF(50),
    height: RF(50),
    width: RF(50),
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: ligh_green,
  },
  linearGradientContainerGreen: {
    borderRadius: RF(50),
    height: RF(50),
    width: RF(50),
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeaturedList;
