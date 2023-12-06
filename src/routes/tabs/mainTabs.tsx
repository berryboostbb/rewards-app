import {
  View,
  Image,
  Pressable,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import HomeStack from '../stacks/homeStack';
import ScanStack from '../stacks/scanStack';
import {getIsDarkModeEnabled, useDebounce} from '@utils';
import PointsStack from '../stacks/pointsStack';
import {useTheme} from '@react-navigation/native';
import ExploreStack from '../stacks/exploreStack';
import InsightsStack from '../stacks/InsightsStack';
import {RF, WHITE, primaryDarkColor, tab_gray} from '@theme';
import {homee, history, scan, search, myPoints} from '@assets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {setCaptureFlag} from '@redux';
import {navigate} from '@services';

const Tab = createBottomTabNavigator();

const MainTabs = ({navigation}: any) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);
  const dispatch = useDispatch();
  const {colorCode, captureFlag} = useSelector((state: any) => state.root.user);
  const [activeStack, setActiveStack] = useState('HomeStack');

  const CustomScanTabBarButton = ({onPress}: any) => {
    return (
      <Pressable
        // onPress={handleCaptureFlag}
        style={[styles.scan_view, {backgroundColor: colorCode}]}>
        <View style={styles.outer_scan}>
          <View style={styles.inner_scan} />
        </View>
      </Pressable>
    );
  };
  const requestCameraPermission = async (onPress: any) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Passport Camera Permission',
          message: 'Passport needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('Camera permission given');
        onPress();
      } else {
        // console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const handleCaptureFlag = () => {
    dispatch(setCaptureFlag(!captureFlag));
  };

  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: WHITE,
        tabBarStyle: styles.tabBarStyle,
        tabBarIconStyle: styles.tabIcon,
        tabBarInactiveTintColor: tab_gray,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({tintColor, color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={'HomeStack'}
              focused={focused}
              source={focused ? homee : getIsDarkModeEnabled() ? homee : homee}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              stack={'ExploreStack'}
              focused={focused}
              source={
                focused ? search : getIsDarkModeEnabled() ? search : search
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ScanStack"
        component={ScanStack}
        options={{
          tabBarIcon: ({color, focused, props}: any) =>
            focused ? (
              <CustomScanTabBarButton {...props} />
            ) : (
              <TabBarIcon
                colorCode={colorCode}
                color={color}
                focused={focused}
                activeStack={activeStack}
                setActiveStack={setActiveStack}
                handleCaptureFlag={handleCaptureFlag}
                stack={'ScanStack'}
                styles={styles}
                source={focused ? scan : getIsDarkModeEnabled() ? scan : scan}
              />
            ),
        }}
      />

      <Tab.Screen
        name="PointsStack"
        component={PointsStack}
        options={{
          tabBarIcon: ({color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              color={color}
              styles={styles}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              focused={focused}
              stack={'PointsStack'}
              source={
                focused
                  ? myPoints
                  : getIsDarkModeEnabled()
                  ? myPoints
                  : myPoints
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="InsightsStack"
        component={InsightsStack}
        options={{
          tabBarIcon: ({color, focused}: any) => (
            <TabBarIcon
              colorCode={colorCode}
              activeStack={activeStack}
              setActiveStack={setActiveStack}
              handleCaptureFlag={handleCaptureFlag}
              color={color}
              styles={styles}
              stack={'InsightsStack'}
              focused={focused}
              source={
                focused ? history : getIsDarkModeEnabled() ? history : history
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const onPressTab = (
  stack: any,
  activeStack: any,
  setActiveStack: any,
  handleCaptureFlag: any,
) => {
  navigate(stack);
  setActiveStack(stack);
  if (stack == 'ScanStack' && activeStack == 'ScanStack') {
    handleCaptureFlag();
  }
};

const TabBarIcon = ({
  color,
  source,
  styles,
  focused,
  colorCode,
  stack,
  activeStack,
  setActiveStack,
  handleCaptureFlag,
}: {
  source: any;
  styles?: any;
  color: string;
  focused?: any;
  colorCode?: any;
  stack: any;
  activeStack: any;
  setActiveStack: any;
  handleCaptureFlag: any;
}) => {
  return (
    <Pressable
      onPress={() =>
        onPressTab(stack, activeStack, setActiveStack, handleCaptureFlag)
      }>
      <View
        style={{
          width: RF(50),
          height: RF(50),
          alignItems: 'center',
          borderRadius: RF(50),
          justifyContent: 'center',
          backgroundColor: focused ? colorCode : WHITE,
        }}>
        <Image
          source={source}
          style={[
            styles.image,
            {
              tintColor: color,
            },
          ]}
          resizeMode={'contain'}
        />
      </View>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    inner_scan: {
      width: RF(42),
      height: RF(42),
      borderRadius: 42,
      alignItems: 'center',
      backgroundColor: WHITE,
      justifyContent: 'center',
    },
    outer_scan: {
      width: RF(52),
      height: RF(52),
      borderWidth: 1,
      borderRadius: 50,
      borderColor: WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scan_view: {
      width: RF(62),
      marginTop: -1,
      height: RF(62),
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: primaryDarkColor,
    },
    image: {width: RF(18), height: RF(18), opacity: 100, tintColor: '#fffff'},
    iconView: {
      width: RF(50),
      height: RF(50),
      alignItems: 'center',
      borderRadius: RF(50),
      justifyContent: 'center',
    },
    img: {},
    tabIcon: {
      marginTop: RF(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarStyle: {
      width: '90%',
      height: '8%',
      borderWidth: 0,
      borderTopWidth: 0,
      paddingBottom: RF(10),
      backgroundColor: WHITE,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: RF(100),
      position: 'absolute',
      bottom: 15,
      left: 20,
      right: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0.5},
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    tabBarBtnMainContainer: {
      width: RF(25),
      height: RF(25),
    },
    scan: {
      alignItems: 'center',
      justifyContent: 'center',
      width: RF(50),
      height: RF(50),
    },
  });

export default MainTabs;
