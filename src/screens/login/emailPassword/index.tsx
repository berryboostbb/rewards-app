import {
  Text,
  Wrapper,
  TextInput,
  RememberMe,
  CustomLoader,
  TextSection,
  SignUp_Section,
  SocialLoginBtn,
} from '@components';
import styles from './styles';
import {Formik} from 'formik';
import {Platform, View} from 'react-native';
import {LoginSchema, showToast} from '@utils';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStoresByLocation, login, navigate, signUp} from '@services';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  setUser,
  setStores,
  setAuthToken,
  setCard_Added,
  setColorCode,
  setFirstLogin,
  setIsLoggedIn,
} from '@redux';
import {fb, g_logo, ios} from '@assets';
import {blue, BLACK, WHITE} from '@theme';
import {useTheme} from '@react-navigation/native';
import {format as prettyFormat} from 'pretty-format';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import DeviceInfo from 'react-native-device-info';

interface LoginProps {}

const initialValues = {
  email: '',
  password: '',
};

const EmailPassword: FunctionComponent<LoginProps> = ({navigation}: any) => {
  const dispatch = useDispatch();
  const myTheme: any = useTheme();
  const [deviceId, setDeviceId] = useState<any>('');
  const [loading, setloading] = useState(false);
  const [rememberEmail, setRememberEmail] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {fcm_token, firstLogin} = useSelector((state: any) => state.root.user);

  useEffect(() => {
    getdeviceId();
  }, []);

  const getdeviceId = () => {
    var uniqueId: any = DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
  };

  const getStores_byLocation = () => {
    let params = {
      getLogos: false,
    };
    fetchStoresByLocation(params)
      .then((res: any) => {
        dispatch(setStores(res?.data?.data));
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  const submitHandler = (values: any) => {
    let params = {
      email: values?.email,
      password: values?.password,
      fcm_id: fcm_token,
    };
    setloading(true);
    login(params)
      .then(async (res: any) => {
        if (res?.data?.status == true) {
          await dispatch(setCard_Added(res?.data?.data?.card_added));
          dispatch(setAuthToken(res?.data?.data?.token));
          dispatch(setIsLoggedIn(true));
          dispatch(setUser(res?.data?.data));
          getStores_byLocation();
          dispatch(setColorCode('#19383A'));
          if (!firstLogin) {
            dispatch(setFirstLogin(false));
          }
        } else {
          console.log(res, 'res?.data?');
          showToast('Error', res?.data?.error, false);
        }
      })
      .catch((err: any) => {
        showToast(
          'Error',
          err?.response?.data?.message
            ? err?.response?.data?.message
            : 'Something went wrong',
          false,
        );
        console.log(err, 'res?.data?');
      })
      .finally(() => {
        setloading(false);
      });
  };
  const onPressToggleButton = () => {
    setRememberEmail(!rememberEmail);
  };
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const onPressForgotPass = () => {
    navigate('ForgotPassword');
  };
  const handleLoginWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '631686410683-4ok1uj3m7i13k6i1dnp07om62a7trp33.apps.googleusercontent.com',
      });
      //   {
      //   iosClientId:
      //     '5201841271-cjr5qbbtk1bot6p991n2htcf1lg9cbuq.apps.googleusercontent.com',
      // }
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.idToken && userInfo.idToken !== null) {
        // console.log('gooogle...', userInfo.user);
        let params = {
          device_id: deviceId._z,
          email: userInfo.user.email,
          last_name: userInfo.user.familyName,
          first_name: userInfo.user.givenName,
        };
        console.log('params.....', params);
        navigate('AccountDetail', {data: params});

        // signUp(params)
        //   .then((res: any) => {
        //     if (res?.data?.error) {
        //       showToast('Error', res?.data?.message, false);
        //     } else if (res.data.status === true) {
        //       showToast('Success', res.data.message, true);
        //       navigate('Verification', {formData: params});
        //     }
        //   })
        //   .catch((err: any) => {
        //     showToast('Error', err.response.data.error, false);
        //   })
        //   .finally(() => setloading(false));
      }
    } catch (e) {
      console.log('google login failed', e);
    }
  };
  const handleFacebook_Login = async () => {
    if (Platform.OS === 'android') {
      LoginManager.setLoginBehavior('web_only');
    }
    await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result: any) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then((data: any) => {
            console.log(data.accessToken.toString());
            console.log('result-->', result);
            const {accessToken} = data;
            initUser(accessToken);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  const initUser = (token: any) => {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        console.log('json..', json);
        // Some user object has been set up somewhere, build that user here
        // user.name = json.name
        // user.id = json.id
        // user.user_friends = json.friends
        // user.email = json.email
        // user.username = json.name
        // user.loading = false
        // user.loggedIn = true
        // user.avatar = setAvatar(json.id)
      })
      .catch(() => {
        console.log('err.....');

        // reject('ERROR GETTING DATA FROM FACEBOOK')
      });
  };

  return (
    <Wrapper isMarginHorizontal>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={LoginSchema}>
          {({values, errors, touched, handleChange, handleSubmit}) => (
            <View style={{flex: 1}}>
              <TextSection
                myTheme={myTheme}
                title={'Welcome Back'}
                text={'Please enter your account details'}
              />
              <View style={styles.emailView}>
                <TextInput
                  margin
                  title="Email"
                  maxLength={40}
                  value={values.email}
                  keyboardType="email-address"
                  placeholderText={'Email Address'}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email ? errors.email : ''}
                />
                <TextInput
                  margin
                  _secure
                  maxLength={25}
                  title="Password"
                  value={values.password}
                  onPress={updateSecureTextEntry}
                  secureTextEntry={secureTextEntry}
                  placeholderText={'Enter Password'}
                  onChangeText={handleChange('password')}
                  error={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
                <RememberMe
                  rememberMe
                  title={'Remember Me'}
                  isEnabled={rememberEmail}
                  onClick={onPressForgotPass}
                  onToggle={onPressToggleButton}
                  viewStyle={styles.rememberBtnView}
                />

                <View style={styles.line_v}>
                  <View style={styles.line} />
                  <Text style={styles.or}>Or</Text>
                  <View style={styles.line} />
                </View>

                <SocialLoginBtn
                  src={fb}
                  bgClr={blue}
                  onPress={handleFacebook_Login}
                  title={'Sign Up with Facebook'}
                />
                <SocialLoginBtn
                  src={g_logo}
                  bgClr={WHITE}
                  title={'Sign Up with Google'}
                  onPress={handleLoginWithGoogle}
                />
                <SocialLoginBtn
                  src={ios}
                  bgClr={BLACK}
                  title={'Sign Up with Apple'}
                />

                <SignUp_Section handleSubmit={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default EmailPassword;
// if (res?.data?.reward_user?.user_type == 'Borrowell') {
//   dispatch(setColorCode('#312D84'));
// } else if (res?.data?.reward_user?.user_type == 'KOHO') {
//   dispatch(setColorCode('#2E5CA9'));
// } else if (res?.data?.reward_user?.user_type == 'BRIM') {
//   dispatch(setColorCode('#03BBD2'));
// } else {
//   dispatch(setColorCode('#19383A'));
// }
// getUser()
//   .then((res: any) => {
//     // dispatch(setIsLoggedIn(true));
//     // dispatch(setUser(res?.data?.reward_user));
//     if (res?.data?.reward_user?.user_type == 'Borrowell') {
//       dispatch(setColorCode('#312D84'));
//     } else if (res?.data?.reward_user?.user_type == 'KOHO') {
//       dispatch(setColorCode('#2E5CA9'));
//     } else if (res?.data?.reward_user?.user_type == 'BRIM') {
//       dispatch(setColorCode('#03BBD2'));
//     } else {
//       dispatch(setColorCode('#19383A'));
//     }
//   })
//   .catch((err: any) => {
//     console.log('error.....', err.message);
//     // showToast('Error....', err.response.data.message, false);
//   })
//   .finally(() => setloading(false));

// const data = {
//   name: userInfo.user.name,
//   email: userInfo.user.email,
//   imageUrl: userInfo.user.photo,
//   latitude: this.state.latitude,
//   longitude: this.state.longitude,
//   source: 'google',
//   type: 'trainee',
// };
// const res = await this.props.socialLogin(data);
// if (res == true) {
//   this.setState({
//     loading: false,
//   });
// } else {
//   this.setState({
//     loading: false,
//   });
// }
