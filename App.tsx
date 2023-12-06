import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import Routes from './src/routes/routes';
import {setFCMToken, store} from '@redux';
import {useColorScheme} from 'react-native';
import Toast from 'react-native-toast-message';
import React, {useEffect, useState} from 'react';
import {persistor} from './src/shared/redux/store';
import {darkThemeStyle, defaultTheme} from '@theme';
import messaging from '@react-native-firebase/messaging';
import {EventRegister} from 'react-native-event-listeners';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getDataFromUserDefaults, navigationRef} from '@services';
import {initialConfig, setIsDarkModeEnabled, toastConfig} from '@utils';
import UserInactivity from 'react-native-user-inactivity';
import {signOut} from '@redux';

const App = () => {
  const [timer, setTimer] = useState((__DEV__ ? 10 : 2) * 60000);
  const colorScheme = useColorScheme();
  const [isEnabledOne, setIsEnabledOne] = useState(false);
  const [active, setActive] = useState(true);
  let appTheme = isEnabledOne ? darkThemeStyle : defaultTheme;

  useEffect(() => {
    PushNotification.configure({
      onNotification: function (notification: any) {
        foreground: true;
      },
      requestPermissions: true,
    });
    createChannel();
    firebase_notification();
  }, []);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'test channel',
    });
  };

  const firebase_notification = () => {
    messaging()
      .getToken()
      .then(token => {
        // console.log('token..', token);
        store.dispatch(setFCMToken(token));
      });
    messaging().onMessage(async (remoteMessage: any) => {
      console.log('remoteMessage..', remoteMessage);
      handleNotification(remoteMessage);
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {});
  };

  const handleNotification = (remoteMessage: any) => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
  };

  //initialConfig
  useEffect(() => {
    initialConfig(store.dispatch);
    // configureNotification();
  }, []);

  useEffect(() => {
    let listener = EventRegister.addEventListener('appThemeChange', data => {
      setIsEnabledOne(data);
    });
    return () => {
      EventRegister.removeEventListener(listener as any);
    };
  }, []);

  useEffect(() => {
    (async () => {
      let isEnabled = await getDataFromUserDefaults('THEME_KEY');

      if (
        (isEnabled !== undefined && isEnabled === 'true') ||
        (isEnabled === undefined && colorScheme === 'dark')
      ) {
        setIsEnabledOne(true);
        setIsDarkModeEnabled(true);
        appTheme = darkThemeStyle;
        console.log('dark_mode');
      } else {
        console.log('light_mode');
      }
    })();
  }, []);

  const onUserActivityTimeOut = (isActive: any) => {
    // if (__DEV__) {
    //   return;
    // }
    if (!isActive) {
      store.dispatch(signOut());
    }
    setActive(isActive);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <UserInactivity
            isActive={active}
            timeForInactivity={timer}
            onAction={isActive => {
              onUserActivityTimeOut(isActive);
            }}>
            <NavigationContainer ref={navigationRef} theme={appTheme as any}>
              <Routes />
              <Toast position="bottom" config={toastConfig} />
            </NavigationContainer>
          </UserInactivity>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
