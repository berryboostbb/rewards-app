import React from 'react';
import {Profile, Insights, Earn_Rewards} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RewardStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Insights" component={Insights} />
      <Stack.Screen name="Earn_Rewards" component={Earn_Rewards} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
};

export default RewardStack;
