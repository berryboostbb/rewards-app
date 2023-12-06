import {
  Text,
  Header,
  Wrapper,
  TextInput,
  CustomButton,
  CustomFlatGrid,
  CustomLoader,
} from '@components';
import {Formik} from 'formik';
import styles from './styles';
import {Platform, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GST, txt_gray, typography} from '@theme';
import {Profile_Contact} from '@utils';
import {contactUs, get_contactUs_title} from '@services';

const initialValues = {
  value: [],
  text: '',
};

const Profile_ContactUs = ({navigation}: any) => {
  const [send, setSend] = useState<any>(false);
  const [contactUs_Title, setContactUs_Title] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  const [subject, setSubject] = useState<any>('');
  const [flatList_Data, setFlatList_Data] = useState<any>([]);
  const [selected_Item, setSelected_Item] = useState<any>(false);

  useEffect(() => {
    contactUs_title();
  }, []);

  const onHandleClick = (item: any, index: any, setFieldValue: any) => {
    let arr = [...flatList_Data];
    if (arr?.includes(item)) {
      let ind = arr?.indexOf(item);
      if (ind > -1) {
        arr.splice(ind, 1);
      }
    } else {
      if (arr?.length <= 6) {
        arr?.push(item);
      }
    }
    setFlatList_Data(arr);
    setFieldValue('value', arr);
  };

  const submitHandler = (values: any) => {
    // setSend(true);
    contact_Us(values);
  };

  const contactUs_title = () => {
    setLoading(true);
    get_contactUs_title()
      .then((res: any) => {
        setContactUs_Title(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('error....update...', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contact_Us = async (values: any) => {
    await values.value.map((i: any) => {
      setSubject(i?.value);
    });
    setLoading(true);
    let params = {
      subject: subject,
      message: values?.text,
    };
    contactUs(params)
      .then((res: any) => {
        setSend(true);
      })
      .catch((err: any) => {
        console.log('error....update...', err.message);
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
        title={'Contact Us'}
        navigation={navigation}
        style={styles.header}
      />

      {send ? (
        <View style={styles.view}>
          <Text semiBold size={typography.h2}>
            Thank You!
          </Text>
          <Text
            size={typography.standard}
            medium
            style={{marginTop: 10, width: '110%'}}>
            Your Inquiry has been sent to our team! We will contact you shortly
            regarding this issue...
          </Text>
        </View>
      ) : (
        <>
          <Text
            center
            semiBold
            color={txt_gray}
            style={styles.text}
            size={
              Platform.OS === 'ios' ? typography.subHeading : typography.h3
            }>
            What are you contacting us about?
          </Text>

          <Formik
            onSubmit={submitHandler}
            initialValues={initialValues}
            validationSchema={Profile_Contact}>
            {({
              values,
              errors,
              touched,
              setFieldValue,
              handleSubmit,
              handleChange,
            }) => (
              <View style={GST.flex}>
                <View>
                  <CustomFlatGrid
                    data={contactUs_Title}
                    selected={flatList_Data}
                    selectedItem={selected_Item}
                    onPress={(item: any, index: any) =>
                      onHandleClick(item, index, setFieldValue)
                    }
                  />
                </View>
                <View>
                  <TextInput
                    multiline
                    width={'100%'}
                    maxLength={400}
                    value={values.text}
                    placeHolderClr={txt_gray}
                    containerStyle={styles.mb}
                    onChangeText={handleChange('text')}
                    placeholderText={'Tell us how we can help...'}
                  />
                  <CustomButton text={'Send'} onPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
        </>
      )}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default Profile_ContactUs;
