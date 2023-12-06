import {
  Header,
  Wrapper,
  TextInput,
  CustomButton,
  CustomLoader,
} from '@components';
import {Formik} from 'formik';
import styles from './styles';
import {View} from 'react-native';
import React, {useState} from 'react';
import {AddCardSchema, showToast} from '@utils';
import {GST, dim_gray, txt_black} from '@theme';
import {create_Card, navigate} from '@services';
import {useDispatch} from 'react-redux';
import {setCard_Added, setCard_Number} from '@redux';

const initialValues = {
  digits: '',
  name: '',
};

const Add_Card = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const [loading, setLoading] = useState<any>(false);

  const submitHandler = (values: any) => {
    setLoading(true);
    let params = {
      card_number: values.digits,
      name: values.name,
    };
    create_Card(params)
      .then((res: any) => {
        if (res.data.status === true) {
          showToast('Success', res?.data?.message, true);
          navigate('MyCard');
          dispatch(setCard_Number(''));
          dispatch(setCard_Added(true));
        } else {
          showToast('Error', res?.data?.message, false);
        }
      })
      .catch((err: any) => {
        console.log('err...', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Wrapper isMarginHorizontal>
      <Header
        profile
        showBackButton
        title={'Add Card'}
        navigation={navigation}
        style={styles.header}
      />
      <>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={AddCardSchema}>
          {({values, errors, touched, handleChange, handleSubmit}) => (
            <View style={{flex: 1}}>
              <TextInput
                margin
                title="Last 4 Digits On Card"
                maxLength={4}
                value={values.digits}
                placeholderText={'0000'}
                placeHolderClr={dim_gray}
                onChangeText={handleChange('digits')}
                error={touched.digits && errors.digits ? errors.digits : ''}
              />
              <TextInput
                margin
                title="Card Nickname"
                maxLength={30}
                value={values.name}
                placeHolderClr={dim_gray}
                placeholderText={'Enter Card Nickname'}
                onChangeText={handleChange('name')}
                error={touched.name && errors.name ? errors.name : ''}
              />
              <View style={GST.mt20}>
                <CustomButton
                  text={'Add card'}
                  onPress={handleSubmit}
                  bgClr={txt_black}
                />
              </View>
            </View>
          )}
        </Formik>
      </>

      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default Add_Card;
