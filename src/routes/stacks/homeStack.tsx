import React from 'react';
import {
  Home,
  SeeAllScreen,
  Earn_Rewards,
  Profile_ContactUs,
  Notifications,
  EditProfile,
  Update_Password,
  Stores_SeeAll,
  BMP_Promotion,
  BAP_Promotion,
  PromotionDetail,
  BAP_Store_Detail,
  BMP_Store_Detail,
  FAQ,
  MyCard,
  Add_Card,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileStack from './profileStack';

const Stack = createStackNavigator();

const HomeStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SeeAllScreen" component={SeeAllScreen} />
      <Stack.Screen name="Earn_Rewards" component={Earn_Rewards} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
      <Stack.Screen name="Profile_ContactUs" component={Profile_ContactUs} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Update_Password" component={Update_Password} />
      <Stack.Screen name="Stores_SeeAll" component={Stores_SeeAll} />
      <Stack.Screen name="BMP_Promotion" component={BMP_Promotion} />
      <Stack.Screen name="BAP_Promotion" component={BAP_Promotion} />
      <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
      <Stack.Screen name="BAP_Store_Detail" component={BAP_Store_Detail} />
      <Stack.Screen name="BMP_Store_Detail" component={BMP_Store_Detail} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="MyCard" component={MyCard} />
      <Stack.Screen name="Add_Card" component={Add_Card} />
    </Stack.Navigator>
  );
};

export default HomeStack;
