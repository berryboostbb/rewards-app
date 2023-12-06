import {
  RF,
  WHITE,
  LIGHT_GREY,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  primaryDarkColor,
} from '@theme';
import React, {useState} from 'react';
import CustomLoader from '../customLoader';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Carousel_Pagination = ({
  data,
  renderItem,
  flatListRef,
  activeSlide,
  setActiveSlide,
  setcarousel_Index,
}: {
  data?: any;
  renderItem?: any;
  flatListRef?: any;
  activeSlide?: any;
  setActiveSlide?: any;
  setcarousel_Index?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [loading, setLoading] = useState(false);
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.98);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const onSnap = (index: any) => {
    if (activeSlide !== index) {
      setLoading(true);
      setActiveSlide(index);
      setcarousel_Index(index);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Pagination
        inactiveDotScale={1}
        dotStyle={styles.dot}
        animatedDuration={650}
        inactiveDotOpacity={0.4}
        dotsLength={data?.length}
        activeDotIndex={activeSlide}
        inactiveDotColor={LIGHT_GREY}
        inactiveDotStyle={styles.inaciveDot}
        containerStyle={styles.containerView}
        dotColor={
          activeSlide === 0 ||
          activeSlide === 1 ||
          activeSlide === 2 ||
          activeSlide === 3
            ? primaryDarkColor
            : WHITE
        }
        animatedTension={70}
      />
      <Carousel
        useScrollView={true}
        // loop={activeSlide === 1 && true}
        enableSnap
        data={data}
        ref={flatListRef}
        layout={'default'}
        itemWidth={ITEM_WIDTH}
        renderItem={renderItem}
        sliderHeight={ITEM_HEIGHT}
        sliderWidth={SLIDER_WIDTH}
        onSnapToItem={index => onSnap(index)}
        hasParallaxImages={true}
        inactiveSlideOpacity={1}
      />
      {loading && <CustomLoader />}
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    inaciveDot: {
      width: RF(5),
      height: RF(5),
    },
    dot: {
      width: RF(12),
      height: RF(5),
    },
    container: {
      width: SCREEN_WIDTH,
      paddingVertical: 0,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: SCREEN_HEIGHT,
    },
    containerView: {
      marginTop: RF(150),
      alignSelf: 'center',
    },
  });

export default Carousel_Pagination;
