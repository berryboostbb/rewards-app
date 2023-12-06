import React from 'react';
import {
  SignUpForm,
  SetPassword,
  SignUpSuccess,
  Splash_Screen,
  ResetPassword,
  ForgotPasswordSent,
  EmailPassword,
  AccountDetail,
  Verification,
  Update_Password,
  ForgotPassword,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  const {firstLogin} = useSelector((state: any) => state.root.user);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      {...{
        initialRouteName: firstLogin ? 'Splash_Screen' : 'EmailPassword',
      }}>
      <Stack.Screen name="Splash_Screen" component={Splash_Screen} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="SignUpForm" component={SignUpForm} />
      <Stack.Screen name="SetPassword" component={SetPassword} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} />
      <Stack.Screen name="AccountDetail" component={AccountDetail} />
      <Stack.Screen name="EmailPassword" component={EmailPassword} />
      <Stack.Screen name="Update_Password" component={Update_Password} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordSent" component={ForgotPasswordSent} />
    </Stack.Navigator>
  );
};

export default AuthStack;
