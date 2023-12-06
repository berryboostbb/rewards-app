import {
  Text,
  Wrapper,
  TextInput,
  CustomButton,
  Profile_Header,
  CustomLoader,
} from '@components';
import React, {useState} from 'react';
import {key} from '@assets';
import styles from './styles';
import {navigate, update_profile} from '@services';
import {useSelector} from 'react-redux';
import {green, txt_gray, typography, WHITE} from '@theme';
import {View, Image, ScrollView, Pressable} from 'react-native';
import {showToast} from '@utils';

const EditProfile = ({navigation}: any) => {
  const {user} = useSelector((state: any) => state.root.user);
  const [loading, setLoading] = useState(false);
  const [f_name, setF_name] = useState('');
  const [l_name, setL_name] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const updateProfile = () => {
    setLoading(true);
    let params = {
      first_name: f_name !== '' ? f_name : user?.first_name,
      last_name: l_name !== '' ? l_name : user?.last_name,
      address: address !== '' ? address : user?.address,
      city: user?.city,
      postal_code: user?.postal_code,
      province: user?.province,
    };
    update_profile(params)
      .then((res: any) => {
        navigation.goBack();
        showToast('Success', res?.data?.message, res?.status);
      })
      .catch((err: any) => {
        console.log('error....update...', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onUpdate = () => {
    updateProfile();
  };
  const onChangeText_F = (text: any) => {
    setF_name(text);
  };
  const onChangeText_L = (text: any) => {
    setL_name(text);
  };
  const onChangeText_E = (text: any) => {
    setEmail(text);
  };
  const onChangeText_A = (text: any) => {
    setAddress(text);
  };

  return (
    <Wrapper isMarginHorizontal>
      <Profile_Header navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text color={green} size={typography.standard} bold>
            Member ID
          </Text>
          <Text
            color={WHITE}
            size={typography.standard}
            medium
            style={{marginRight: 30}}>
            PRU32 3890 A2C3 0045
          </Text>
        </View>

        <TextInput
          title={'First Name'}
          placeHolderClr={txt_gray}
          value={f_name}
          onChangeText={onChangeText_F}
          placeholderText={user?.first_name}
        />

        <TextInput
          title={'Last Name'}
          value={l_name}
          placeHolderClr={txt_gray}
          onChangeText={onChangeText_L}
          placeholderText={user?.last_name}
        />

        <TextInput
          title={'Email'}
          value={email}
          onChangeText={onChangeText_E}
          placeHolderClr={txt_gray}
          placeholderText={user?.email}
        />

        <TextInput
          value={address}
          title={'Home Address'}
          placeHolderClr={txt_gray}
          placeholderText={'Canada'}
          onChangeText={onChangeText_A}
        />

        <View style={styles.mainView}>
          <Pressable
            style={styles.imgView}
            onPress={() =>
              navigate('Update_Password', {values: user, type: 'profile'})
            }>
            <Image source={key} style={styles.img} resizeMode="contain" />
            <Text medium size={typography.standard} color={txt_gray}>
              Change Password
            </Text>
          </Pressable>

          <CustomButton text={'Update'} onPress={onUpdate} />
        </View>
      </ScrollView>

      <View style={{marginBottom: 60}} />
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default EditProfile;
