import styles from './styles';
import React, {useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  Wrapper,
  CustomLoader,
  Change_Password,
  Success,
  Header,
  Text,
} from '@components';
import {showToast} from '@utils';
import {reset_password, update_password} from '@services';
import {useSelector} from 'react-redux';
import {typography} from '@theme';
import {View} from 'react-native';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
      email?: any;
    };
  }>;
}

const Update_Password = ({route, navigation}: Props) => {
  const {email, type} = route.params;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [changepassword, setChangePassword] = useState(false);
  const {user} = useSelector((state: any) => state.root.user);

  const submitHandler = (values: any) => {
    if (type === 'profile') {
      updatePassword(values);
    } else if (type == 'forgot') {
      resetPassword(values);
    }
  };
  const resetPassword = (values: any) => {
    setLoading(true);
    let params = {
      email: email,
      password: values.newPassword,
    };
    reset_password(params)
      .then((res: any) => {
        if (res?.data?.error) {
          showToast('Error', res?.data?.message, false);
        } else if (res.data.status === true) {
          showToast('Success', res?.data?.message, true);
          setSuccess(true);
        }
        console.log('pas....', res.data);
        // showToast('Success', res?.data?.message, true);
      })
      .catch((err: any) => {
        console.log('send error.nnnnn..', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const updatePassword = (values: any) => {
    setLoading(true);
    let params = {
      current_password: values?.password,
      new_password: values.newPassword,
      confirm_password: values?.confirmPassword,
    };
    update_password(params)
      .then((res: any) => {
        if (res?.data?.error) {
          showToast('Error', res?.data?.message, false);
        } else if (res.data.status === true) {
          showToast('Success', res?.data?.message, true);
          setChangePassword(true);
          // navigation.goBack();
        }
      })
      .catch((err: any) => {
        console.log('send error.nnnnn..', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Wrapper isMarginHorizontal>
      {!success && changepassword === false ? (
        <Change_Password
          type={type}
          navigation={navigation}
          submitHandler={submitHandler}
        />
      ) : changepassword ? (
        <>
          <Header
            profile
            showBackButton
            title={'Contact Us'}
            navigation={navigation}
            style={styles.header}
          />
          <View style={styles.checkView}>
            <Text size={typography.subHeading} regular>
              Thank You!
            </Text>
            <Text
              align
              medium
              size={typography.standard}
              style={styles.innerText}
              numberOfLines={2}>
              Your Inquiry has been sent to our team! We will contact you
              shortly regarding this issue...
            </Text>
          </View>
        </>
      ) : (
        <Success title={'Your password has been changed.'} />
      )}

      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default Update_Password;
