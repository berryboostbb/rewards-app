import {forYou} from '@utils';
import * as React from 'react';
import {RF, sea_blue} from '@theme';
import {Coloured_Card} from '@components';
import {Dimensions, ScrollView, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {useHeaderHeight} from '@react-navigation/elements';

const AnimatedCarousel = () => {
  const width = Dimensions.get('window').width;

  return (
    <Carousel
      loop
      vertical
      width={width}
      data={forYou}
      height={width / 2}
      scrollAnimationDuration={1000}
      style={{
        flex: 1,
        marginTop: RF(20),
        paddingTop: RF(10),
        alignItems: 'center',
        marginHorizontal: RF(20),
      }}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={({index, item}) => <Coloured_Card item={item} />}
    />
  );
};

export default AnimatedCarousel;
