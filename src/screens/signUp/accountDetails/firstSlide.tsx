import {
  RF,
  txt_gray,
  light_grey,
  typography,
  colorRedDC143C,
  primaryDarkColor,
} from '@theme';
import moment from 'moment';
import {navigate} from '@services';
import {setUserFormData} from '@redux';
import {Formik, useFormik} from 'formik';
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pressable, StyleSheet, View} from 'react-native';
import {AccountDetailSchema, firstCapitalize} from '@utils';
import {Text, TextInput, DatePicker, CustomButton} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FirstSlide = (props: any) => {
  const date: any = new Date();
  const dispatch: any = useDispatch();
  const addressRef = useRef<any>(null);
  const sheetRef: any = useRef<any>(null);
  const {submitHandler, myTheme, address, isKeyboardVisible, onOpenSheet} =
    props;
  const {userFormData} = useSelector((state: any) => state.root.user);

  const formik = useFormik({
    initialValues: {
      dob: userFormData.dob,
      address: userFormData.homeAddress,
      lastName: userFormData.lastName,
      firstName: userFormData.firstName,
      middleName: userFormData.middleName,
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  // const onOpenSheet = async () => {
  //   await sheetRef?.current?.open();
  //   setShowSheet(true);
  // };

  const formikRef: any = useRef();

  useEffect(() => {
    if (formikRef?.current) {
      formikRef?.current?.setFieldValue('address', address);
    }
  }, [address]);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: RF(20),
        marginBottom: isKeyboardVisible ? 150 : 0,
      }}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <>
          <Formik
            innerRef={formikRef}
            onSubmit={submitHandler}
            initialValues={formik.initialValues}
            validationSchema={AccountDetailSchema}>
            {({
              values,
              errors,
              touched,
              setTouched,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <View style={styles.emailView}>
                <>
                  {addressRef?.current?.isFocused() &&
                  isKeyboardVisible ? null : (
                    <>
                      <TextInput
                        maxLength={20}
                        title="First Name *"
                        value={values.firstName}
                        placeholderText="First Name"
                        onChangeText={handleChange('firstName')}
                        error={
                          touched.firstName && errors.firstName
                            ? errors.firstName
                            : ''
                        }
                      />
                      <TextInput
                        title="Middle Name"
                        maxLength={20}
                        value={firstCapitalize(values.middleName)}
                        placeholderText="Middle Name"
                        onChangeText={handleChange('middleName')}
                      />
                      <TextInput
                        title="Last Name *"
                        maxLength={20}
                        value={values.lastName}
                        placeholderText="Last Name"
                        onChangeText={handleChange('lastName')}
                        error={
                          touched.lastName && errors.lastName
                            ? errors.lastName
                            : ''
                        }
                      />
                      {/* {userFormData?.dob && ( */}
                      <DatePicker
                        theme={myTheme}
                        dateVisible={true}
                        date={
                          values?.dob === undefined
                            ? moment(date).format('MMM DD, YYYY')
                            : new Date(values?.dob)
                        }
                        placeholder="Date of Birth *"
                        onChange={(val: any) => {
                          setFieldValue('dob', val);
                        }}
                      />
                      {/* )} */}
                      {touched.dob && errors.dob ? (
                        <Text style={styles.errorStyle}>{errors.dob} </Text>
                      ) : null}
                    </>
                  )}
                  <Text
                    bold
                    color={txt_gray}
                    style={styles.text}
                    size={typography.standard}>
                    Home Address *
                  </Text>
                  <Pressable style={styles.sheet} onPress={onOpenSheet}>
                    <Text style={{width: '90%'}} numberOfLines={1}>
                      {address ? address : 'Home Address'}
                      {/* {values?.address ? values?.address : 'Home Address'} */}
                    </Text>

                    {touched.address && errors.address ? (
                      <Text style={styles.errorStyle}>{errors.address} </Text>
                    ) : null}
                  </Pressable>
                </>
                <View style={styles.viewBtn}>
                  <CustomButton
                    text={'Next'}
                    onPress={handleSubmit}
                    textStyle={styles.txt}
                  />
                  <View style={styles.view}>
                    <Text
                      color={primaryDarkColor}
                      semiBold
                      size={12}
                      onPress={() => {
                        navigate('EmailPassword');
                        dispatch(setUserFormData({}));
                      }}>
                      {' '}
                      Cancel{' '}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FirstSlide;

const styles = StyleSheet.create({
  text: {marginHorizontal: RF(20), marginTop: RF(20)},
  sheet: {
    height: RF(40),
    // width: '100%',
    borderRadius: RF(50),
    marginTop: RF(10),
    backgroundColor: light_grey,
    justifyContent: 'center',
    paddingLeft: RF(20),
  },
  emailView: {flex: 1, marginTop: RF(10)},
  txt: {fontSize: RF(12), fontWeight: '600'},
  viewTxt: {
    position: 'absolute',
    top: RF(80),
    alignSelf: 'center',
    flex: 1,
  },
  wText: {
    alignSelf: 'center',
  },
  viewBtn: {
    width: '100%',
    marginTop: RF(50),
    alignSelf: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(40),
  },
  errorStyle: {
    color: colorRedDC143C,
    fontSize: RF(10),
    marginTop: 2,
    paddingLeft: RF(20),
    fontFamily: 'Plus Jakarta Sans',
  },
});

{
  /* <GoogleAddress
                    ref={addressRef}
                    colors={myTheme.colors}
                    title={'Home Address *'}
                    onChange={(data, details) =>
                      parseAddress(data, details, setFieldValue)
                    }
                    // GST.flex,
                    // {
                    //   height:
                    //     addressRef?.current?.isFocused() && isKeyboardVisible
                    //       ? 300
                    //       : 120,
                    // },
                  /> */
}
