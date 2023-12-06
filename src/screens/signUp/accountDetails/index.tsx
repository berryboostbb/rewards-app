import {
  Wrapper,
  TextSection,
  CustomLoader,
  GoogleAddress,
  Raw_Bottom_Sheet,
  Carousel_Pagination,
} from '@components';
import {GST, RF} from '@theme';
import ThirdSlide from './thirdSlide';
import FirstSlide from './firstSlide';
import {setUserFormData} from '@redux';
import {data, showToast} from '@utils';
import SecondSlide from './secondSlide';
import FourthSlide from './fourthSlide';
import {RouteProp, useTheme} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import {Keyboard, LogBox, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useEffect, useRef} from 'react';
import {getBrands, getInterests, navigate, signUp} from '@services';

LogBox.ignoreLogs(['An unhandled error was caught']);

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const AccountDetail = ({route}: Props) => {
  const {data} = route?.params;
  const city: any = useRef('');
  const scrollRef: any = useRef();
  const myTheme: any = useTheme();
  const province: any = useRef('');
  const streetAddress: any = useRef('');
  let dispatch: any = useDispatch();
  const postalCode: any = useRef('');
  const [loading, setloading] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [deviceId, setDeviceId] = useState<any>('');
  const [activeSlide, setActiveSlide] = useState(0);
  const [brandsList, setBrandsList] = useState<any>([]);
  const [isCharacters, setIsCharacters] = useState(false);
  const [new_Password, setNew_Password] = useState<any>('');
  const [interestList, setInterestList] = useState<any>([]);
  const [flatList_Data, setFlatList_Data] = useState<any>([]);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [firstSlideData, setFirstSlideData] = useState<any>({});
  const [selected_Iten, setSelected_Item] = useState<any>(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [selected_Brand, setSelected_Brand] = useState<any>(false);
  const [flatList_Brands, setFlatList_Brands] = useState<any>([]);
  const [isUpper_LowerCase, setIsUpper_LowerCase] = useState(false);
  const {userFormData} = useSelector((state: any) => state.root.user);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
  const addressRef = useRef<any>(null);
  const sheetRef: any = useRef<any>(null);
  const [showSheet, setShowSheet] = useState(false);
  const [address, setAddress] = useState<any>();
  const [carousel_Index, setcarousel_Index] = useState<any>(0);
  const [location_loading, setLocation_Loading] = useState(false);
  const flatListRef: any = useRef();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      setActiveSlide(2);
    }
  }, [data]);

  const getdeviceId = () => {
    var uniqueId: any = DeviceInfo.getUniqueId();
    setDeviceId(uniqueId);
  };
  useEffect(() => {
    getdeviceId();
    dispatch(setUserFormData({}));
  }, []);
  const submitHandler = async (values: any) => {
    if (activeSlide === 0) {
      setActiveSlide(1);
      setcarousel_Index(1);
      flatListRef?.current?.snapToItem(1);
      setFirstSlideData({values});
      dispatch(setUserFormData(values));
    } else if (activeSlide === 1) {
      setcarousel_Index(2);
      setActiveSlide(2);
      flatListRef?.current?.snapToItem(2);
      setFormData({...firstSlideData, values});
      dispatch(
        setUserFormData({
          ...userFormData,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          confirmPassword: values.confirmPassword,
        }),
      );
    } else if (activeSlide === 2) {
      setcarousel_Index(3);
      setActiveSlide(3);
      flatListRef?.current?.snapToItem(3);
      dispatch(
        setUserFormData({
          ...userFormData,
          interests: flatList_Data,
        }),
      );
    } else if (activeSlide === 3) {
      let newArr = await flatList_Data.concat(flatList_Brands);
      dispatch(
        setUserFormData({
          ...userFormData,
          interests: newArr,
        }),
      );
      if (
        !userFormData.address ||
        !userFormData.email ||
        !userFormData.password ||
        !userFormData.phoneNumber ||
        !userFormData.firstName ||
        !userFormData.lastName ||
        !userFormData.dob ||
        !userFormData.confirmPassword
      ) {
        showToast('Error', 'Please fill all fields', false);
      } else {
        let params = {
          city: city.current,
          province: province.current,
          postal_code: postalCode.current,
          referral_code: '',
          device_id: deviceId._z,
          email: formData?.values.email,
          password: formData?.values.password,
          // card_number: formData?.values.cardNumber,
          phone_number: formData?.values.phoneNumber,
          user_type: 'Brim',
          dob: firstSlideData?.values.dob,
          address: firstSlideData?.values.address,
          last_name: firstSlideData?.values.lastName,
          first_name: firstSlideData?.values.firstName,
          interests: newArr,
        };
        setloading(true);
        signUp(params)
          .then((res: any) => {
            if (res?.data?.error) {
              showToast('Error', res?.data?.message, false);
              setActiveSlide(1);
              setcarousel_Index(1);
              flatListRef?.current?.snapToItem(1);
            } else if (res.data.status === true) {
              showToast('Success', res.data.message, true);
              navigate('Verification', {formData: params});
              dispatch(setUserFormData({}));
            }
          })
          .catch((err: any) => {
            setActiveSlide(0);
            setcarousel_Index(0);
            showToast('Error', err.response.data.error, false);
          })
          .finally(() => setloading(false));
      }
    }
  };
  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const updateSecureConfirmTextEntry = () => {
    setSecureConfirmTextEntry(!secureConfirmTextEntry);
  };
  const parseAddress = async (data: any, details: any, setFieldValue: any) => {
    try {
      postalCode.current = '';
      streetAddress.current = '';
      city.current = '';
      province.current = '';
      let address = data.description;
      let splitted = address.split(',');
      if (
        splitted[2]?.trim() === 'QC' ||
        splitted[2]?.toLowerCase() === 'Quebec'
      ) {
        let validationErrors = {};
        validationErrors.googleAddress =
          'Plastk Secured Credit Card service is not available in Quebec at this time.';
      } else {
        streetAddress.current = splitted[0].trim();
        city.current = splitted[1].trim();
        province.current = splitted[2].trim();
        // setFieldValue('address', splitted[0].trim());
        setAddress(address);
        await sheetRef?.current?.hide();
        setShowSheet(false);
        // sheetRef.current.close();
        try {
          details.address_components.map((element: any, index: any) => {
            element.types.map((item: any, index: any) => {
              if (item === 'postal_code') {
                postalCode.current = element.long_name.split(' ').join('');

                try {
                  if (postalCode.current.length < 6) {
                    postalCode.current = '';
                  }
                } catch (error) {
                  postalCode.current = '';
                }
              }
            });
          });
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {}
  };
  function format(value: any, pattern: any) {
    let i = 0;
    const v = value.toString();
    return pattern.replace(/#/g, _ => v[i++]);
  }
  const handleMask = (text: string, setFieldValue: any) => {
    // let num = '';
    // if (text.length == 3) {
    //   num = `${text}-`;
    // } else if (text.length == 6) {
    //   num = `${text}-`;
    // } else {

    // }
    // if (text && text.length >= 3) {
    //   num = `${text.substring(0, 3)}-${text.substring(3, 6)}-${text.substring(
    //     6,
    //     text.length,
    //   )}`;
    // } else {
    //   num = text;
    // }
    // console.log('nnn....', num);
    setFieldValue('phoneNumber', text);
  };
  const handleMask_CardNumber = (text: string, setFieldValue: any) => {
    setFieldValue('cardNumber', text);
  };
  const onHandleClick = (item: any, index: any, setFieldValue: any) => {
    setSelected_Item(index);
    let arr = [...flatList_Data];
    if (arr?.includes(item)) {
      let ind = arr?.indexOf(item);
      if (ind > -1) {
        arr?.splice(ind, 1);
      }
    } else {
      if (arr?.length <= 7) {
        arr?.push(item);
      }
    }
    setFlatList_Data(arr);
    setFieldValue('category', arr);
  };
  const onHandleClick_Brand = (item: any, index: any, setFieldValue: any) => {
    setSelected_Brand(index);
    let arr = [...flatList_Brands];
    if (arr?.includes(item)) {
      let ind = arr?.indexOf(item);
      if (ind > -1) {
        arr?.splice(ind, 1);
      }
    } else {
      if (arr?.length <= 7) {
        arr?.push(item);
      }
    }
    setFlatList_Brands(arr);
    setFieldValue('brand', arr);
  };
  const onHandleClick_Password = (
    item: any,
    index: any,
    setFieldValue: any,
  ) => {
    setNew_Password(item);
    setFieldValue('password', item);
  };
  useEffect(() => {
    let upper = /[A-Z]/.test(new_Password);
    let lower = /[a-z]/.test(new_Password);
    let number = /[0-9]/.test(new_Password);

    if (new_Password?.length >= 8) {
      setIsCharacters(true);
    }
    if (upper && lower) {
      setIsUpper_LowerCase(true);
    }
    if (number) {
      setIsNumber(true);
    }
    if (new_Password.length <= 0) {
      setIsNumber(false);
      setIsCharacters(false);
      setIsUpper_LowerCase(false);
    }
  }, [new_Password]);
  useEffect(() => {
    fetchInterests();
    fetch_Brands();
  }, []);
  const fetchInterests = () => {
    getInterests()
      .then((res: any) => {
        setInterestList(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('catch.inter..', err.message);
      })
      .finally(() => {});
  };
  const fetch_Brands = () => {
    getBrands()
      .then((res: any) => {
        setBrandsList(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('brands..', err.message);
      })
      .finally(() => {});
  };
  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 100,
      animated: true,
    });
  };
  const renderSlides = ({index, item}: any) => {
    return (
      <>
        {carousel_Index === 0 || (activeSlide === 0 && index === 0) ? (
          <FirstSlide
            myTheme={myTheme}
            onOpenSheet={onOpenSheet}
            // parseAddress={parseAddress}
            address={address}
            submitHandler={submitHandler}
            isKeyboardVisible={isKeyboardVisible}
          />
        ) : carousel_Index === 1 || (activeSlide === 1 && index === 1) ? (
          <SecondSlide
            isNumber={isNumber}
            handleMask={handleMask}
            isCharacters={isCharacters}
            submitHandler={submitHandler}
            isUpper_LowerCase={isUpper_LowerCase}
            handleMask_CardNumber={handleMask_CardNumber}
            updateSecureTextEntry={updateSecureTextEntry}
            onHandleClick_Password={onHandleClick_Password}
            updateSecureConfirmTextEntry={updateSecureConfirmTextEntry}
          />
        ) : carousel_Index === 2 || (activeSlide === 2 && index === 2) ? (
          <ThirdSlide
            interestList={interestList}
            flatList_Data={flatList_Data}
            selected_Iten={selected_Iten}
            submitHandler={submitHandler}
            onHandleClick={onHandleClick}
          />
        ) : carousel_Index === 3 || (activeSlide === 3 && index === 3) ? (
          <FourthSlide
            brandsList={brandsList}
            submitHandler={submitHandler}
            selected_Iten={selected_Brand}
            flatList_Data={flatList_Brands}
            onHandleClick={onHandleClick_Brand}
          />
        ) : null}
      </>
    );
  };
  const onOpenSheet = async () => {
    await sheetRef?.current?.open();
    setShowSheet(true);
  };
  useEffect(() => {
    setLocation_Loading(true);
    setTimeout(() => {
      setLocation_Loading(false);
      sheetRef?.current?.close();
      setShowSheet(false);
    }, 3000);
  }, [address]);

  return (
    <Wrapper
      isMarginHorizontal={
        activeSlide === 0 || activeSlide === 1 ? true : false
      }>
      <TextSection
        wd={activeSlide === 3 ? RF(280) : RF(300)}
        top={RF(70)}
        myTheme={myTheme}
        mh={activeSlide === 2 || activeSlide === 3 ? true : false}
        title={
          activeSlide === 0
            ? 'Get Started'
            : activeSlide === 1
            ? 'Account Details'
            : activeSlide === 2
            ? 'Where Do You Shop?'
            : 'What Products Do You Buy?'
        }
        text={
          activeSlide === 0
            ? 'Tell us about yourself'
            : activeSlide === 1
            ? 'Choose an Email and Password'
            : ''
        }
      />
      {/* <CustomPagination activeSlide={activeSlide} data={data} /> */}

      <Carousel_Pagination
        data={data}
        flatListRef={flatListRef}
        renderItem={renderSlides}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        setcarousel_Index={setcarousel_Index}
      />

      {loading && <CustomLoader />}
      {showSheet && (
        <Raw_Bottom_Sheet
          loading={location_loading}
          sheetRef={sheetRef}
          children={
            <View
              style={[
                GST.flex,
                {
                  width: '90%',
                },
              ]}>
              <GoogleAddress
                ref={addressRef}
                colors={myTheme.colors}
                title={'Home Address *'}
                onChange={(data, details) => {
                  parseAddress(data, details, '');
                }}
              />
            </View>
          }
        />
      )}
    </Wrapper>
  );
};

export default AccountDetail;

{
  /* <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ref={scrollRef}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={
            activeSlide === 0
              ? AccountDetailSchema
              : activeSlide === 1
              ? AccountDetailEmail
              : activeSlide === 2
              ? AccountDetailCategory
              : null
          }>
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
              {activeSlide === 0 ? (
                <>
                  <TextInput
                    maxLength={40}
                    title="First Name"
                    value={firstCapitalize(values.firstName)}
                    placeholderText="First Name"
                    onChangeText={handleChange('firstName')}
                    error={
                      touched.firstName && errors.firstName
                        ? errors.firstName
                        : ''
                    }
                  />
                  {console.log('tt......', touched)}

                  <TextInput
                    title="Last Name"
                    maxLength={40}
                    value={firstCapitalize(values.lastName)}
                    placeholderText="Last Name"
                    onChangeText={handleChange('lastName')}
                    error={
                      touched.lastName && errors.lastName ? errors.lastName : ''
                    }
                  />

                  <DatePicker
                    theme={myTheme}
                    dateVisible={true}
                    placeholder="Date of Birth"
                    onChange={(val: any) => {
                      setFieldValue('dob', val);
                    }}
                  />
                  {touched.dob && errors.dob ? (
                    <Text style={styles.errorStyle}>{errors.dob} </Text>
                  ) : null}
                  <View style={[GST.flex]}>
                    <GoogleAddress
                      colors={myTheme.colors}
                      title={'Home Address'}
                      onChange={(data, details) =>
                        parseAddress(data, details, setFieldValue)
                      }
                    />
                  </View>
                </>
              ) : activeSlide === 1 ? (
                <>
                  <TextInput
                    maxLength={40}
                    value={values.email}
                    title="Email Address"
                    keyboardType="email-address"
                    placeholderText="Email Address"
                    onChangeText={handleChange('email')}
                    error={touched.email && errors.email ? errors.email : ''}
                  />
                  <MaskedTextInput
                    title={'Card Number'}
                    value={values.cardNumber}
                    mask={[
                      '(',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      ')',
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    placeholder={'(0000) - 0000 - 0000 - 0000'}
                    onChangeText={(val: any) =>
                      handleMask_CardNumber(val, setFieldValue)
                    }
                    error={
                      touched.cardNumber && errors.cardNumber
                        ? errors.cardNumber
                        : ''
                    }
                  />
                  <MaskedTextInput
                    icon
                    title={'Phone Number'}
                    value={values.phoneNumber}
                    mask={[
                      '(',
                      /\d/,
                      /\d/,
                      /\d/,
                      ')',
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    placeholder={'(000) - 000 - 0000'}
                    onChangeText={(val: any) => handleMask(val, setFieldValue)}
                    error={
                      touched.phoneNumber && errors.phoneNumber
                        ? errors.phoneNumber
                        : ''
                    }
                  />

                  <View style={{marginTop: RF(20)}}>
                    <Custom_CheckRequirements
                      isNumber={isNumber}
                      isCharacters={isCharacters}
                      title={'Password requirements'}
                      isUpper_LowerCase={isUpper_LowerCase}
                    />
                  </View>

                  <TextInput
                    margin
                    txtMargin
                    maxLength={25}
                    title="Password"
                    secureTextEntry={true}
                    value={values.password}
                    onPress={updateSecureTextEntry}
                    placeholderText="Enter Password"
                    onChangeText={(item: any, index: any) =>
                      onHandleClick_Password(item, index, setFieldValue)
                    }
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />
                  <TextInput
                    margin
                    maxLength={25}
                    secureTextEntry={true}
                    title="Confirm Password"
                    value={values.confirmPassword}
                    placeholderText="Enter Password"
                    onPress={updateSecureConfirmTextEntry}
                    onChangeText={handleChange('confirmPassword')}
                    error={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : ''
                    }
                  />
                </>
              ) : (
                <View style={{flex: 1, marginHorizontal: RF(25)}}>
                  <CustomFlatGrid
                    data={interestList}
                    selected={flatList_Data}
                    selectedItem={selected_Iten}
                    onPress={(item: any, index: any) =>
                      onHandleClick(item, index, setFieldValue)
                    }
                  />
                  {touched.category && errors.category ? (
                    <Text style={styles.errorStyle}>{errors.category}</Text>
                  ) : null}
                </View>
              )}

              <View style={styles.viewBtn}>
                <CustomButton
                  text={activeSlide === 2 ? 'Continue' : 'Next'}
                  onPress={handleSubmit}
                  textStyle={styles.txt}
                />
                <View style={styles.view}>
                  <Text
                    color={primaryDarkColor}
                    semiBold
                    size={12}
                    onPress={() => navigate('EmailPassword')}>
                    {' '}
                    Cancel{' '}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView> */
}

{
  /* {activeSlide == 0 && (
        <FirstSlide
          submitHandler={submitHandler}
          myTheme={myTheme}
          parseAddress={parseAddress}
          isKeyboardVisible={isKeyboardVisible}
        />
      )}
      {activeSlide == 1 && (
        <SecondSlide
          submitHandler={submitHandler}
          handleMask_CardNumber={handleMask_CardNumber}
          handleMask={handleMask}
          isNumber={isNumber}
          isCharacters={isCharacters}
          isUpper_LowerCase={isUpper_LowerCase}
          updateSecureTextEntry={updateSecureTextEntry}
          onHandleClick_Password={onHandleClick_Password}
          updateSecureConfirmTextEntry={updateSecureConfirmTextEntry}
        />
      )}
      {activeSlide == 2 && (
        <ThirdSlide
          flatList_Data={flatList_Data}
          interestList={interestList}
          selected_Iten={selected_Iten}
          submitHandler={submitHandler}
          onHandleClick={onHandleClick}
        />
      )}
      {activeSlide == 3 && (
        <FourthSlide
          flatList_Data={flatList_Brands}
          brandsList={brandsList}
          selected_Iten={selected_Brand}
          submitHandler={submitHandler}
          onHandleClick={onHandleClick_Brand}
        />
      )} */
}
