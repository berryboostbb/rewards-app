import {
  Earn_Rewards,
  BAP_Promotion,
  BMP_Promotion,
  PromotionDetail,
  BAP_Store_Detail,
  BMP_Store_Detail,
  Refer_A_Friend,
  FAQ,
  MyCard,
} from '@screens';
import React from 'react';
import MainTabs from '../tabs/mainTabs';
import {CustomDrawerContent} from '@components';
import {useTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const theme: any = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.colors.DRWAER_FIRST_COLOR,
        },
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainTabs" component={MainTabs} />
      <Drawer.Screen name="Earn_Rewards" component={Earn_Rewards} />
      <Drawer.Screen name="Refer_A_Friend" component={Refer_A_Friend} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
