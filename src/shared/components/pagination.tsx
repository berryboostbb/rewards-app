import React from 'react';
import {splashData} from '@utils';
import {StyleSheet} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';
import {LIGHT_GREY, primaryDarkColor, RF, WHITE} from '@theme';

const CustomPagination = ({
  activeSlide,
  splash,
  data,
}: {
  data?: any;
  splash?: any;
  dotColor?: any;
  activeSlide?: any;
}) => {
  return (
    <Pagination
      inactiveDotScale={1}
      dotStyle={styles.dot}
      animatedDuration={100}
      inactiveDotOpacity={0.4}
      activeDotIndex={activeSlide}
      inactiveDotColor={LIGHT_GREY}
      inactiveDotStyle={styles.inaciveDot}
      dotsLength={splash ? splashData?.length : data?.length}
      dotColor={
        splash && activeSlide === 0
          ? primaryDarkColor
          : splash && activeSlide === 1
          ? WHITE
          : splash && activeSlide === 2
          ? WHITE
          : splash && activeSlide === 3
          ? WHITE
          : activeSlide === 0
          ? primaryDarkColor
          : activeSlide === 1 || activeSlide === 2 || activeSlide === 3
          ? primaryDarkColor
          : WHITE
      }
      containerStyle={splash ? styles.container : styles.containerView}
      dotContainerStyle={splash ? {marginHorizontal: 2.5} : null}
    />
  );
};

const styles = StyleSheet.create({
  inaciveDot: {
    width: RF(5),
    height: RF(5),
  },
  dot: {
    width: RF(12),
    height: RF(5),
  },
  container: {
    bottom: 200,
    width: RF(50),
    paddingVertical: 0,
    alignSelf: 'center',
    alignItems: 'center',
    // position: 'absolute',
    justifyContent: 'center',
  },
  containerView: {
    marginTop: RF(160),
    alignSelf: 'center',
  },
});

export default CustomPagination;
