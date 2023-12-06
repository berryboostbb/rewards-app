import {
  b,
  d,
  e,
  all,
  auto,
  tech,
  toys,
  baby,
  books,
  games,
  music,
  pizza,
  beauty,
  e_home,
  travel,
  sports,
  fashion,
  wellness,
  furniture,
} from '@assets';
import React from 'react';
import Text from './atoms/text';
import RoundImage from './roundImage';
import {BLACK, RF, SCREEN_WIDTH, txt_gray, typography} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const HexaGon = ({
  onGoBack,
  onPress,
  categories,
}: {
  onGoBack?: any;
  onPress?: any;
  categories?: any;
}) => {
  return (
    <>
      <View style={styles.view}>
        <TouchableOpacity style={styles.backArrow} onPress={onGoBack}>
          <AntDesign color={BLACK} name="arrowleft" size={RF(15)} />
        </TouchableOpacity>
        <Text semiBold size={typography.h2} style={styles.txt} color={txt_gray}>
          Categories
        </Text>
      </View>

      <View style={styles.hexaView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <RoundImage
              style={{bottom: 10}}
              source={{
                uri: categories[9]?.category_image_url
                  ? categories[9]?.category_image_url
                  : categories[9]?.logo,
              }}
              title={
                categories[9]?.category_name
                  ? categories[9]?.category_name
                  : categories[9]?.name
              }
              onPress={() => onPress('Fashion')}
            />
            <RoundImage
              style={{bottom: 5}}
              source={{
                uri: categories[10]?.category_image_url
                  ? categories[10]?.category_image_url
                  : categories[10]?.logo,
              }}
              title={
                categories[10]?.category_name
                  ? categories[10]?.category_name
                  : categories[10]?.name
              }
              onPress={() => onPress('Furniture')}
            />
            <RoundImage
              source={{
                uri: categories[11]?.category_image_url
                  ? categories[11]?.category_image_url
                  : categories[11]?.logo,
              }}
              title={
                categories[11]?.category_name
                  ? categories[11]?.category_name
                  : categories[11]?.name
              }
              onPress={() => onPress('Games')}
            />
          </View>
          <View>
            <RoundImage
              style={{bottom: 15}}
              source={{
                uri: categories[8]?.category_image_url
                  ? categories[8]?.category_image_url
                  : categories[8]?.logo,
              }}
              title={
                categories[8]?.category_name
                  ? categories[8]?.category_name
                  : categories[8]?.name
              }
              onPress={() => onPress('Baby')}
            />
            <RoundImage
              style={{bottom: 10}}
              source={{
                uri: categories[2]?.category_image_url
                  ? categories[2]?.category_image_url
                  : categories[2]?.logo,
              }}
              title={
                categories[2]?.category_name
                  ? categories[2]?.category_name
                  : categories[2]?.name
              }
              onPress={() => onPress('Pets')}
            />
            <RoundImage
              style={{bottom: 5}}
              source={{
                uri: categories[3]?.category_image_url
                  ? categories[3]?.category_image_url
                  : categories[3]?.logo,
              }}
              title={
                categories[3]?.category_name
                  ? categories[3]?.category_name
                  : categories[3]?.name
              }
              onPress={() => onPress('Clothing')}
            />
            <RoundImage
              source={{
                uri: categories[12]?.category_image_url
                  ? categories[12]?.category_image_url
                  : categories[12]?.logo,
              }}
              title={
                categories[12]?.category_name
                  ? categories[12]?.category_name
                  : categories[12]?.name
              }
              onPress={() => onPress('Toys')}
            />
          </View>
          <View>
            <RoundImage
              style={{bottom: 20}}
              source={{
                uri: categories[7]?.category_image_url
                  ? categories[7]?.category_image_url
                  : categories[7]?.logo,
              }}
              title={
                categories[7]?.category_name
                  ? categories[7]?.category_name
                  : categories[7]?.name
              }
              onPress={() => onPress('Drinks')}
            />
            <RoundImage
              style={{bottom: 15}}
              source={{
                uri: categories[1]?.category_image_url
                  ? categories[1]?.category_image_url
                  : categories[1]?.logo,
              }}
              title={
                categories[1]?.category_name
                  ? categories[1]?.category_name
                  : categories[1]?.name
              }
              onPress={() => onPress('Music')}
            />
            <RoundImage
              style={{bottom: 10}}
              source={{
                uri: categories[0]?.category_image_url
                  ? categories[0]?.category_image_url
                  : categories[0]?.logo,
              }}
              title={
                categories[0]?.category_name
                  ? categories[0]?.category_name
                  : categories[0]?.name
              }
              onPress={() => onPress('All')}
            />
            <RoundImage
              style={{bottom: 5}}
              source={{
                uri: categories[4]?.category_image_url
                  ? categories[4]?.category_image_url
                  : categories[4]?.logo,
              }}
              title={
                categories[4]?.category_name
                  ? categories[4]?.category_name
                  : categories[4]?.name
              }
              onPress={() => onPress('Tech')}
            />
            <RoundImage
              source={{
                uri: categories[13]?.category_image_url
                  ? categories[13]?.category_image_url
                  : categories[13]?.logo,
              }}
              title={
                categories[13]?.category_name
                  ? categories[13]?.category_name
                  : categories[13]?.name
              }
              onPress={() => onPress('Sports')}
            />
          </View>
          <View>
            <RoundImage
              style={{bottom: 15}}
              source={{
                uri: categories[18]?.category_image_url
                  ? categories[18]?.category_image_url
                  : categories[18]?.logo,
              }}
              title={
                categories[18]?.category_name
                  ? categories[18]?.category_name
                  : categories[18]?.name
              }
              onPress={() => onPress('Travel')}
            />
            <RoundImage
              style={{bottom: 10}}
              source={{
                uri: categories[6]?.category_image_url
                  ? categories[6]?.category_image_url
                  : categories[6]?.logo,
              }}
              title={
                categories[6]?.category_name
                  ? categories[6]?.category_name
                  : categories[6]?.name
              }
              onPress={() => onPress('Wellness')}
            />
            <RoundImage
              style={{bottom: 5}}
              source={{
                uri: categories[5]?.category_image_url
                  ? categories[5]?.category_image_url
                  : categories[5]?.logo,
              }}
              title={
                categories[5]?.category_name
                  ? categories[5]?.category_name
                  : categories[5]?.name
              }
              onPress={() => onPress('Auto')}
            />
            <RoundImage
              source={{
                uri: categories[14]?.category_image_url
                  ? categories[14]?.category_image_url
                  : categories[14]?.logo,
              }}
              title={
                categories[14]?.category_name
                  ? categories[14]?.category_name
                  : categories[14]?.name
              }
              onPress={() => onPress('Beauty')}
            />
          </View>
          <View>
            <RoundImage
              style={{bottom: 10}}
              source={{
                uri: categories[17]?.category_image_url
                  ? categories[17]?.category_image_url
                  : categories[17]?.logo,
              }}
              title={
                categories[17]?.category_name
                  ? categories[17]?.category_name
                  : categories[17]?.name
              }
              onPress={() => onPress('Food')}
            />
            <RoundImage
              style={{bottom: 5}}
              source={{
                uri: categories[16]?.category_image_url
                  ? categories[16]?.category_image_url
                  : categories[16]?.logo,
              }}
              title={
                categories[16]?.category_name
                  ? categories[16]?.category_name
                  : categories[16]?.name
              }
              onPress={() => onPress('Books')}
            />
            <RoundImage
              source={{
                uri: categories[15]?.category_image_url
                  ? categories[15]?.category_image_url
                  : categories[15]?.logo,
              }}
              title={
                categories[15]?.category_name
                  ? categories[15]?.category_name
                  : categories[15]?.name
              }
              onPress={() => onPress('Home')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {marginLeft: -7, marginTop: 3},
  hexaView: {
    width: SCREEN_WIDTH,
    height: RF(350),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(10),
  },
  backArrow: {
    width: RF(35),
    height: RF(35),
    shadowOpacity: 0.2,
    marginLeft: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 0},
  },
  view: {
    flexDirection: 'row',
    marginTop: 10,
  },
});

export default HexaGon;
