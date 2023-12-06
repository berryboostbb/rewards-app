import React from 'react';
import Text from './atoms/text';
import {GST, linearClr, RF, txt_gray, typography, WHITE} from '@theme';
import {mulish_regular} from '@theme';
import {personal_information, pImg} from '@assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ScoreIcon from 'react-native-vector-icons/Foundation';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';

interface TabWidgetProps {
  colors?: any;
  scoreIcon?: any;
  sentinel?: any;
  getOffers?: any;
  containerStyle?: any;
  firstTabTitle?: string;
  secondTabTitle?: string;
  firstIconName?: string;
  secondIconName?: string;
  firstIconFamily?: string;
  secondIconFamily?: string;
  innerContainerStyle?: any;
  tabSelectedIndex?: number;
  setTabSelectedIndex?: any;
  getMyProducts?: any;
  getTopPicks?: any;
}
const TabWidget = (props: Partial<TabWidgetProps>) => {
  const {
    colors,
    sentinel,
    scoreIcon,
    firstTabTitle,
    firstIconName,
    containerStyle,
    secondTabTitle,
    secondIconName,
    firstIconFamily,
    secondIconFamily,
    tabSelectedIndex,
    setTabSelectedIndex,
    innerContainerStyle,
    getOffers,
    getMyProducts,
    getTopPicks,
  } = props;
  return (
    <View style={styles.gradientContainerStyle}>
      <View style={[styles.widgetContainerStyle, containerStyle]}>
        <Pressable
          onPress={() => setTabSelectedIndex(0)}
          style={[
            styles.offerStyle,
            {
              backgroundColor: tabSelectedIndex === 0 ? WHITE : 'transparent',
              elevation: tabSelectedIndex === 0 ? 4 : 0,
            },
          ]}>
          <View style={[styles.offerInnerStyle, innerContainerStyle]}>
            {firstIconName && firstIconFamily == 'EvilIcons' && (
              <EvilIcons
                name={firstIconName}
                color={tabSelectedIndex === 0 ? WHITE : colors.LABEL_COLOR}
                size={27}
                style={GST.pR5}
              />
            )}

            {scoreIcon && (
              <View
                style={[
                  styles.iconView,
                  {
                    borderColor:
                      tabSelectedIndex === 0
                        ? colors.score
                        : colors.LABEL_COLOR,
                  },
                ]}>
                <ScoreIcon
                  name={'dollar'}
                  color={
                    tabSelectedIndex === 0 ? colors.score : colors.LABEL_COLOR
                  }
                  size={RF(25)}
                />
              </View>
            )}

            <Text color={txt_gray} size={typography.normal} semiBold>
              {firstTabTitle}
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            setTabSelectedIndex(1);
            getOffers('favourite');
            // getMyProducts('favourite');
            // getTopPicks('favourite');
          }}
          style={[
            styles.redeemStyle,
            {
              backgroundColor: tabSelectedIndex === 1 ? WHITE : 'transparent',
              elevation: tabSelectedIndex === 1 ? 4 : 0,
            },
          ]}>
          <View style={[styles.redeemInnerStyle, innerContainerStyle]}>
            {secondIconName && secondIconFamily == 'Ionicons' && (
              <Ionicons
                name={secondIconName}
                color={tabSelectedIndex === 1 ? WHITE : colors.LABEL_COLOR}
                size={RF(20)}
                style={GST.pl5}
              />
            )}

            {sentinel && (
              <ImageBackground
                source={personal_information}
                style={styles.img}
                resizeMode="contain">
                <Image
                  source={pImg}
                  style={styles.innerImg}
                  resizeMode="contain"
                />
              </ImageBackground>
            )}

            <Text color={txt_gray} size={typography.normal} semiBold>
              {secondTabTitle}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
export default TabWidget;

const styles = StyleSheet.create({
  txt: {fontFamily: mulish_regular, fontSize: RF(15), fontWeight: '600'},
  innerImg: {height: RF(18), width: RF(18)},
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RF(25),
    height: RF(25),
  },
  iconView: {
    borderRadius: RF(27),
    borderWidth: 1,
    width: RF(27),
    height: RF(27),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RF(5),
  },
  text: {},
  widgetContainerStyle: {
    borderRadius: RF(40),
    flexDirection: 'row',
    height: RF(40),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: linearClr,
    marginHorizontal: RF(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    width: '90%',
    elevation: 2,
    alignSelf: 'center',
  },
  offerStyle: {
    borderRadius: RF(40),
    height: RF(40),
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerInnerStyle: {
    flexDirection: 'row',
  },
  redeemStyle: {
    borderRadius: RF(40),
    height: RF(42),
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  redeemInnerStyle: {
    flexDirection: 'row',
  },
  gradientContainerStyle: {
    paddingVertical: RF(15),
  },
});
