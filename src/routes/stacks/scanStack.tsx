import React from 'react';
import {Scan, Pay, Scan_Verification, ScanResult} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScanStack = ({route}: any) => {
  return (
    <Stack.Navigator
      // defaultScreenOptions={Scan}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Scan_Verification" component={Scan_Verification} />
      <Stack.Screen name="ScanResult" component={ScanResult} />
      {/* <Stack.Screen name="Pay" component={Pay} /> */}
    </Stack.Navigator>
  );
};

export default ScanStack;
