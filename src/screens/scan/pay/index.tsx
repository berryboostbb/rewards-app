import {success} from '@assets';
import {showToast} from '@utils';
import {Image} from 'react-native';
import {setPointsData} from '@redux';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {navigate, pay_Order} from '@services';
import {useTheme} from '@react-navigation/native';
import {CustomButton, CustomModal, Wrapper} from '@components';
import {format as prettyFormat} from 'pretty-format';
import LinearGradient from 'react-native-linear-gradient';

const Pay = ({navigation, route}: any) => {
  // const {e} = route?.params;
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState('');

  const fetch_Pay_Order = (type: any) => {
    let params = {
      pin: '',
      type: type,
      // order_id: e.data,
      //   cash_amount: '',
      //   points_amount: '',
    };
    // pay_Order(params)
    //   .then((res: any) => {
    //     setTimeout(() => {
    //       navigate('Home');
    //     }, 2000);
    //     dispatch(setPointsData(res?.data));
    //     showToast('Success', res.data.message, true);
    //   })
    //   .catch((err: any) => {
    //     setError(err.response.data.message);
    //     // showToast('Error', err.response.data.message, false);
    //   })
    //   .finally(() => setloading(false));
  };

  const showErrorModal = () => {
    if (error) {
      return (
        <CustomModal
          responseMessage={error}
          modalType="error"
          onPress={() => {
            setError('');
          }}
        />
      );
    }
  };

  return (
    <Wrapper>
      {/* <Header title={'Pay'} /> */}
      <Image
        source={success}
        resizeMode="contain"
        style={{width: '100%', height: 200}}
      />
      <LinearGradient
        colors={[
          theme.colors.DARK_GRADIENT_FIRST_COLOR,
          theme.colors.DARK_GRADIENT_SECOND_COLOR,
        ]}>
        <CustomButton
          text={'Pay with Card'}
          onPress={() => fetch_Pay_Order('card')}
        />
        <CustomButton
          text={'Pay with Points'}
          onPress={() => fetch_Pay_Order('points')}
        />
      </LinearGradient>

      {/* {showErrorModal()} */}
    </Wrapper>
  );
};

export default Pay;
