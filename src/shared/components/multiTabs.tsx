import React from 'react';
import Text from './atoms/text';
import {
  gray,
  GST,
  LIGHT_GREY,
  linearClr,
  RF,
  txt_gray,
  typography,
  WHITE,
  SCREEN_WIDTH,
} from '@theme';
import {TEXT, mulish_regular} from '@theme';
import {personal_information, pImg} from '@assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ScoreIcon from 'react-native-vector-icons/Foundation';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';

interface MultiTabsProps {
  tabsData: any;
  colors?: any;
  isCard?: any;
  bgColor1?: any;
  bgColor2?: any;
  scoreIcon?: any;
  sentinel?: any;
  isWhite?: any;
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
}
const MultiTabs = (props: Partial<MultiTabsProps>) => {
  const {
    tabsData,
    bgColor1,
    bgColor2,
    isCard,
    colors,
    sentinel,
    isWhite,
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
  } = props;
  return (
    <View style={styles.gradientContainerStyle}>
      <View style={[styles.widgetContainerStyle, containerStyle]}>
        {tabsData.map((d: any, index: any) => (
          <Pressable onPress={() => setTabSelectedIndex(index)}>
            <View
              style={[
                styles.offerStyle,
                innerContainerStyle,
                {
                  backgroundColor:
                    tabSelectedIndex === index ? WHITE : 'transparent',
                  elevation: tabSelectedIndex === index ? 4 : 0,
                },
              ]}>
              {/* {firstIconName && firstIconFamily == 'EvilIcons' && (
                <EvilIcons
                  name={firstIconName}
                  color={tabSelectedIndex === 0 ? WHITE : colors.LABEL_COLOR}
                  size={27}
                  style={GST.pR5}
                />
              )} */}

              {/* {scoreIcon && (
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
              )} */}

              <Text color={txt_gray} size={typography.normal} semiBold>
                {d}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
export default MultiTabs;

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
    // height: RF(40),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: linearClr,
    marginHorizontal: RF(15),
  },
  offerStyle: {
    // flexDirection: 'row',
    borderRadius: RF(40),
    height: RF(36),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    width: SCREEN_WIDTH / 4.5,
  },
  redeemStyle: {
    flexDirection: 'row',
    borderRadius: RF(40),
    height: RF(36),
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginLeft: RF(10),
  },
  gradientContainerStyle: {
    paddingTop: RF(30),
    marginHorizontal: RF(5),
  },
});
