import {
  View,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Text from './atoms/text';
import {useSelector} from 'react-redux';
import PointsCard from './atoms/pointsCard';
import {pink, RF, typography, WHITE} from '@theme';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {borrowell_Feature, featured, koho_featured} from '@assets';

let width = 130;

interface Props {
  data: any;
}

const MultiFocusList = ({data}: Props) => {
  const {user} = useSelector((state: any) => state.root.user);

  return (
    <FlatList
      horizontal
      data={data}
      centerContent
      pagingEnabled={true}
      decelerationRate={0}
      snapToInterval={width}
      keyExtractor={item => item.id}
      contentOffset={{x: 138, y: 0}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <View
            key={index}
            style={[styles.container, {marginLeft: index == 0 ? 10 : 0}]}>
            <ImageBackground source={item?.url} imageStyle={styles.imgStyle}>
              <View style={styles.pointContainer}>
                <PointsCard
                  item={item}
                  mini
                  backgroundColor={WHITE}
                  pointsValue={500}
                />

                <TouchableOpacity style={styles.iconView}>
                  {item?.isFavorite ? (
                    <AntDesign size={RF(18)} name={'heart'} color={pink} />
                  ) : (
                    <Feather size={RF(18)} name={'heart'} color={WHITE} />
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.txtView}>
                <Text semiBold size={typography.h3} color={WHITE}>
                  {item?.txt}
                </Text>

                <Text
                  medium
                  color={WHITE}
                  style={styles.miniText}
                  size={typography.normal}>
                  {item?.miniTxt}
                </Text>
              </View>
            </ImageBackground>
            <Image
              style={[styles.feature]}
              source={
                user?.user_type == 'Borrowell'
                  ? borrowell_Feature
                  : user?.user_type == 'KOHO'
                  ? koho_featured
                  : featured
              }
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  feature: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 78,
    height: 78,
  },
  container: {
    height: RF(180),
    width: RF(150),
    backgroundColor: WHITE,
    marginRight: RF(10),
    borderRadius: RF(18),
    marginTop: RF(5),
  },
  imgStyle: {
    width: '100%',
    height: RF(180),
    borderRadius: 20,
    resizeMode: 'stretch',
  },
  p_img_View: {
    borderRadius: RF(10),
    height: 32,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pointContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtimage: {
    width: RF(18),
    height: RF(18),
    marginRight: 10,
  },
  textStyle: {marginLeft: -8},
  iconView: {
    marginTop: RF(9),
  },
  txtView: {
    left: RF(16),
    top: RF(75),
  },
  miniText: {
    width: RF(100),
    height: RF(30),
    // lineHeight: 14,
  },
});

export default MultiFocusList;
