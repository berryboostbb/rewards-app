import React from 'react';
import {
  BAP_Promotion,
  BAP_Store_Detail,
  BMP_Promotion,
  BMP_Store_Detail,
  Earn_Rewards,
  Explore,
  PromotionDetail,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ExploreStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Earn_Rewards" component={Earn_Rewards} />
      <Stack.Screen name="BMP_Promotion" component={BMP_Promotion} />
      <Stack.Screen name="BAP_Promotion" component={BAP_Promotion} />
      <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
      <Stack.Screen name="BAP_Store_Detail" component={BAP_Store_Detail} />
      <Stack.Screen name="BMP_Store_Detail" component={BMP_Store_Detail} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
