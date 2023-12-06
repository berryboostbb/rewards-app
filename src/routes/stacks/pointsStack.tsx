import React from 'react';
import {Earn_Rewards, Insights, Points_Sreen} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const PointsStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Points" component={Points_Sreen} />
      <Stack.Screen name="Insights" component={Insights} />
      <Stack.Screen name="Earn_Rewards" component={Earn_Rewards} />
    </Stack.Navigator>
  );
};

export default PointsStack;
