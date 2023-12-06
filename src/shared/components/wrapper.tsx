import React from 'react';
import {BLACK, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, StatusBar, View, ImageBackground} from 'react-native';

const Wrapper = ({
  isCard,
  style,
  source,
  isMargin,
  children,
  isTransparent,
  isMarginHorizontal,
}: {
  isCard?: any;
  style?: any;
  source?: any;
  children?: any;
  isMargin?: any;
  isTransparent?: any;
  isMarginHorizontal?: any;
}) => {
  const theme: any = useTheme();

  return (
    <>
      {isCard === true ? (
        <ImageBackground
          source={source}
          style={[
            styles.container,
            style,
            {
              marginHorizontal: isMarginHorizontal ? RF(25) : 0,
              marginTop: isMargin ? RF(20) : 0,
            },
          ]}>
          <StatusBar
            translucent
            barStyle={theme.colors.STATUS_BAR_WHITE}
            backgroundColor={BLACK}
          />
          {children}
        </ImageBackground>
      ) : (
        <ImageBackground
          source={source}
          style={[
            styles.container,
            style,
            {
              marginHorizontal: isMarginHorizontal ? RF(25) : 0,
              marginTop: isMargin ? RF(20) : 0,
            },
          ]}>
          <StatusBar
            translucent
            barStyle={theme.colors.STATUS_BAR_STYLE}
            backgroundColor={
              isTransparent ? 'transparent' : theme.colors.GRADIENT_FIRST_COLOR
            }
          />
          {children}
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;
