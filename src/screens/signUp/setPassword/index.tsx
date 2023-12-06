import {
  Header,
  Wrapper,
  TextInput,
  CustomLoader,
  CustomButton,
} from '@components';
import {styles} from './styles';
import {View} from 'react-native';
import {navigate} from '@services';
import React, {useState} from 'react';
import {Formik, useFormik} from 'formik';
import {CreateProfileSchema} from '@utils';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SetPassword = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const myTheme: any = useTheme();
  const [loading, setloading] = useState(false);
  const {user} = useSelector((state: any) => state.root.user);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values: any) => {
      //handling submit
    },
  });
  const submitHandler = (values: any) => {
    setloading(true);
    setTimeout(() => {
      navigate('SignUpSuccess');
      setloading(false);
    }, 3000);
    //   setloading(true);
    //   reset_password(createProfileDataObject)
    //     .then((res: any) => {
    //       if (res.data.success) {
    //         login(loginDataObject)
    //           .then(res => {
    //             if (res.data.code == 200) {
    //               dispatch(setAuthToken(res.data.token));
    //               dispatch(setFcmDeviceID(res.data.fcm_device_id));
    //               dispatch(setSecurityLabel(res.data.label));
    //             }
    //           })
    //           .catch(err => showToast('Error', err.response.data.message, false));
    //         navigation.navigate('RegisterSecureLogin');
    //       }
    //     })
    //     .catch((err: any) => {
    //       showToast('Error', err.response.data.message, false);
    //     })
    //     .finally(() => setloading(false));
  };
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const updateSecureConfirmTextEntry = () => {
    setSecureConfirmTextEntry(!secureConfirmTextEntry);
  };
  return (
    <Wrapper>
      <Header showBackButton title="Set Password" navigation={navigation} />
      <Formik
        enableReinitialize={true}
        initialValues={formik.initialValues}
        validationSchema={CreateProfileSchema}
        onSubmit={submitHandler}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <TextInput
                theme={myTheme}
                icon="lock-outline"
                ionicons="eye-off"
                antDesign="eye"
                value={values.password}
                secureTextEntry={secureTextEntry ? true : false}
                onPress={updateSecureTextEntry}
                title="Password*"
                onChangeText={handleChange('password')}
                maxLength={25}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <TextInput
                antDesign="eye"
                maxLength={25}
                theme={myTheme}
                ionicons="eye-off"
                icon="lock-outline"
                title="Confirm Password*"
                value={values.confirmPassword}
                onPress={updateSecureConfirmTextEntry}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry={secureConfirmTextEntry ? true : false}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />
              <View style={styles.button}>
                <CustomButton text={'Set Password'} onPress={handleSubmit} />
              </View>
            </KeyboardAwareScrollView>
          </>
        )}
      </Formik>
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default SetPassword;
