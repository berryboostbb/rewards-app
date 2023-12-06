import {
  Text,
  Wrapper,
  TextInput,
  RememberMe,
  CustomButton,
  CustomLoader,
} from '@components';
import {logo} from '@assets';
import {Formik} from 'formik';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {login, navigate} from '@services';
import {LoginSchema, showToast} from '@utils';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, View} from 'react-native';
import {format as prettyFormat} from 'pretty-format';
import {GST, LIGHT_GREY, ligh_green, RF} from '@theme';
import React, {FunctionComponent, useState} from 'react';
import {setAuthToken, setIsLoggedIn, setUser} from '@redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface LoginProps {}

const initialValues = {
  email: '',
  password: '',
};

const Login: FunctionComponent<LoginProps> = ({navigation}: any) => {
  const dispatch = useDispatch();
  const myTheme: any = useTheme();
  const [loading, setloading] = useState(false);
  const [rememberEmail, setRememberEmail] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const submitHandler = (values: any) => {
    console.log('ewfklwkfjwpio');
    
   
  };
  const onPressToggleButton = () => {
    setRememberEmail(!rememberEmail);
  };
  const onClick = () => {
    navigate('ForgotPassword');
  };
  const onSignUp = () => {
    navigate('SignUpForm');
  };
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Wrapper isMarginHorizontal>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={LoginSchema}>
          {({values, errors, touched, handleChange, handleSubmit}) => (
            <>
              <Section styles={styles} myTheme={myTheme} />
              <View style={GST.mt30}>
                <TextInput
                  margin
                  icon="email"
                  title="Email"
                  maxLength={40}
                  value={values.email}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email ? errors.email : ''}
                />
                <TextInput
                  margin
                  maxLength={25}
                  antDesign="eye"
                  title="Password"
                  ionicons="eye-off"
                  icon="lock-outline"
                  value={values.password}
                  onPress={updateSecureTextEntry}
                  onChangeText={handleChange('password')}
                  secureTextEntry={secureTextEntry ? true : false}
                  error={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
                <RememberMe
                  rememberMe
                  onClick={onClick}
                  title={'Remember me'}
                  isToggle={rememberEmail}
                  onPress={onPressToggleButton}
                  viewStyle={styles.rememberBtnView}
                />
              </View>

              <View style={GST.mt50}>
                <CustomButton text={'Login'} onPress={handleSubmit} />
              </View>
              <View style={styles.view}>
                <Text color={LIGHT_GREY}> Don't have an account? </Text>
                <Pressable
                  onPress={onSignUp}
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                  <Text style={styles.link}>Sign up</Text>
                </Pressable>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

const Section = ({styles, myTheme}: {styles: any; myTheme: any}) => {
  return (
    <>
      <View style={GST.mt30}>
        <Image source={logo} style={styles.img} resizeMode="contain" />
      </View>
      <Text style={styles.wText} color={ligh_green}>
        Rewards
      </Text>
    </>
  );
};

export default Login;
