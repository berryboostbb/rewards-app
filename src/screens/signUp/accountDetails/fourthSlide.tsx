import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Formik, useFormik} from 'formik';
import {CustomButton, CustomFlatGrid, Text} from '@components';
import {AccountDetailBrand} from '@utils';
import {colorRedDC143C, primaryDarkColor, RF, SCREEN_HEIGHT} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import {navigate} from '@services';

const FourthSlide = (props: any) => {
  const {userFormData} = useSelector((state: any) => state.root.user);

  const formik = useFormik({
    initialValues: {
      brand: [],
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const {
    submitHandler,
    onHandleClick,
    brandsList,
    flatList_Data,
    selected_Iten,
  } = props;
  return (
    <View style={{flex: 1}}>
      {/* <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"> */}
      <Formik
        onSubmit={submitHandler}
        initialValues={formik.initialValues}
        validationSchema={AccountDetailBrand}>
        {({values, errors, touched, handleSubmit, setFieldValue}) => (
          <>
            <View style={styles.emailView}>
              <View
                style={{marginHorizontal: RF(5), height: SCREEN_HEIGHT / 1.75}}>
                <CustomFlatGrid
                  bmp
                  height={RF(41)}
                  data={brandsList}
                  selected={flatList_Data}
                  selectedItem={selected_Iten}
                  onPress={(item: any, index: any) =>
                    onHandleClick(item, index, setFieldValue)
                  }
                />
                {touched.brand && errors.brand ? (
                  <Text style={styles.errorStyle}>{errors.brand}</Text>
                ) : null}
              </View>

              <View style={styles.viewBtn}>
                <CustomButton
                  text={'Continue'}
                  onPress={handleSubmit}
                  textStyle={styles.txt}
                />
                <View style={styles.view}>
                  <Text
                    color={primaryDarkColor}
                    semiBold
                    size={12}
                    onPress={() => navigate('EmailPassword')}>
                    Cancel
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </Formik>
      {/* </KeyboardAwareScrollView> */}
    </View>
  );
};

export default FourthSlide;

const styles = StyleSheet.create({
  emailView: {
    height: SCREEN_HEIGHT,
    // marginTop: RF(10),
  },
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
    height: '15%',
    marginTop: RF(68),
    justifyContent: 'flex-end',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(80),
  },
  errorStyle: {
    color: colorRedDC143C,
    fontSize: RF(10),
    marginTop: 2,
    paddingLeft: RF(20),
    fontFamily: 'Plus Jakarta Sans',
  },
});
