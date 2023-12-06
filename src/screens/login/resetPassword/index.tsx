import {
  Text,
  Header,
  Wrapper,
  TextInput,
  CustomLoader,
  CustomButton,
  TextSection,
  SignUp_Section,
} from '@components';
import {GST} from '@theme';
import {styles} from './styles';
import {View} from 'react-native';
import React, {useState} from 'react';
import {Formik, useFormik} from 'formik';
import {forgetPassword, navigate} from '@services';
import {ForgotPasswordEmailSchema, showToast} from '@utils';
import {useTheme} from '@react-navigation/native';

const ResetPassword = (props: any) => {
  const myTheme = useTheme();
  const [loading, setloading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: values => {
      // setloading(true);
      // let params = {email: values.email};
      // forgetPassword(params)
      //   .then((res: any) => {
      //     setTimeout(() => {
      //       setloading(false);
      //       showToast('Success', 'Email successfully sent', true);
      //       navigate('ForgotPasswordSent', {email: values.email});
      //     }, 2000);
      //   })
      //   .catch((err: any) => {
      //     showToast('Error', err.response.data.message, false);
      //   })
      //   .finally(() => setloading(false));
    },
  });

  const submitHandler = (values: any) => {
    navigate('Update_Password', {values: '', type: 'update'});
  };
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <Wrapper isMarginHorizontal>
      <Formik
        enableReinitialize={true}
        initialValues={formik.initialValues}
        validationSchema={ForgotPasswordEmailSchema}
        onSubmit={submitHandler}>
        {({values, errors, touched, handleSubmit, handleChange}) => (
          <View style={GST.flex}>
            <TextSection
              myTheme={myTheme}
              title={'Reset Password'}
              text={'Please enter your account details'}
            />

            <View style={styles.emailView}>
              <TextInput
                title="Enter Email"
                maxLength={40}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                containerStyle={styles.textinput_style}
                error={touched.email && errors.email ? errors.email : ''}
              />
              <TextInput
                margin
                maxLength={25}
                title="New Password"
                value={values.password}
                onPress={updateSecureTextEntry}
                onChangeText={handleChange('password')}
                secureTextEntry={secureTextEntry}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <TextInput
                margin
                maxLength={25}
                title="Confirm New Password"
                value={values.confirmPassword}
                onPress={updateSecureTextEntry}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry={secureTextEntry}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />

              <SignUp_Section handleSubmit={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>

      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default ResetPassword;
