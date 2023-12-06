import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import MainDrawer from './drawer/mainDrawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Routes = () => {
  const {isLoggedIn, user} = useSelector((state: any) => state.root.user);

  return (
    <SafeAreaProvider>
      {isLoggedIn ? <MainDrawer /> : <AuthStack />}
    </SafeAreaProvider>
  );
};

export default Routes;
