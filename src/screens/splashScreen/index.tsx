import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import {
  RF,
  WHITE,
  typography,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  primaryDarkColor,
} from '@theme';
import {splashData} from '@utils';
import {navigate} from '@services';
import {logoDark, splashLogo} from '@assets';
import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {CustomButton, CustomPagination, Text} from '@components';

const Splash_Screen = () => {
  const myTheme: any = useTheme();
  const flatListRef: any = useRef();
  const styles = useStyles(myTheme.colors);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <StatusBar
        translucent
        barStyle={myTheme.colors.STATUS_BAR_STYLE}
        backgroundColor={
          activeSlide === 0
            ? myTheme.colors.GRADIENT_FIRST_COLOR
            : 'transparent'
        }
      />
      <Carousel
        data={splashData}
        ref={flatListRef}
        containerCustomStyle={styles.carousel}
        slideStyle={styles.margin}
        renderItem={({item, index, parallaxProps}: any) => {
          return (
            <>
              {index === 0 ? (
                <View style={styles.view}>
                  <Image
                    resizeMode="contain"
                    source={splashLogo}
                    style={styles.logo}
                  />
                  <Text
                    align
                    size={typography.h24}
                    semiBold
                    style={styles.txt}
                    color={primaryDarkColor}>
                    Plastk Rewards
                  </Text>
                  <Text
                    align
                    medium
                    size={typography.standard}
                    style={styles.text}
                    color={primaryDarkColor}>
                    {item?.txt}
                  </Text>
                </View>
              ) : (
                <ImageBackground
                  source={item?.url}
                  style={styles.imgStyle}
                  imageStyle={styles.imgBG}>
                  <Image
                    source={logoDark}
                    style={styles.logoo}
                    resizeMode={'contain'}
                  />
                  <Text
                    color={WHITE}
                    size={typography.heading}
                    style={styles.imgtxt}
                    semiBold>
                    {item?.txt}
                  </Text>
                </ImageBackground>
              )}
            </>
          );
        }}
        layout={'default'}
        layoutCardOffset={11}
        itemWidth={SCREEN_WIDTH}
        sliderWidth={SCREEN_WIDTH}
        sliderHeight={SCREEN_HEIGHT}
        onSnapToItem={index => {
          setActiveSlide(index);
        }}
        inactiveSlideScale={1}
        hasParallaxImages={true}
        contentContainerCustomStyle={styles.content}
      />
      <CustomPagination activeSlide={activeSlide} splash />
      <CustomButton
        text={'Get Started'}
        textStyle={[
          styles.clr,
          {color: activeSlide === 0 ? WHITE : primaryDarkColor},
        ]}
        btnStyle={[styles.imgBtn]}
        bgClr={activeSlide === 0 ? primaryDarkColor : WHITE}
        onPress={() => navigate('EmailPassword')}
      />
    </>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    margin: {marginVertical: 0},
    carousel: {
      paddingVertical: 0,
      backgroundColor: 'transparent',
    },
    clr: {color: primaryDarkColor},
    imgBtn: {position: 'absolute', bottom: RF(50)},
    imgtxt: {
      width: '60%',
      textAlign: 'center',
    },
    imgStyle: {
      flex: 1,
      // height: SCREEN_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoo: {
      width: '50%',
      top: RF(100),
      height: RF(100),
      position: 'absolute',
      alignSelf: 'center',
    },
    imgBG: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      resizeMode: 'cover',
    },

    view: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: WHITE,
      justifyContent: 'center',
    },
    btn: {
      position: 'absolute',
      bottom: RF(50),
    },

    logo: {
      width: '100%',
      top: Platform.OS === 'ios' ? RF(80) : RF(100),
      height: RF(287),
      position: 'absolute',
    },
    txt: {
      fontSize: RF(32),
      marginTop: Platform.OS === 'ios' ? RF(180) : RF(150),
      marginBottom: RF(10),
    },
    text: {
      width: '70%',
      alignSelf: 'center',
    },
    content: {
      backgroundColor: 'transparent',
    },
  });

export default Splash_Screen;
