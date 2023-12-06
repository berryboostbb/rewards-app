import React from 'react';
import Text from '../atoms/text';
import CustomButton from './button';
import {ligh_green, primaryDarkColor, RF} from '@theme';
import {View, Pressable, StyleSheet} from 'react-native';
import {navigate} from '@services';

const SignUp_Section = ({handleSubmit}: {handleSubmit?: any}) => {
  const onSignUp = () => {
    navigate('AccountDetail', {data: {}});
  };

  return (
    <View style={styles.viewBtn}>
      <CustomButton
        text={'Sign In'}
        onPress={handleSubmit}
        textStyle={styles.txt}
      />

      <View style={styles.view}>
        <Text color={primaryDarkColor} semiBold size={12}>
          Don't have an account?{' '}
        </Text>
        <Pressable
          onPress={onSignUp}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Text color={ligh_green} semiBold size={12}>
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBtn: {
    width: '100%',
    marginTop: RF(20),
    alignSelf: 'center',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txt: {fontSize: RF(12), fontWeight: '600'},
});

export default SignUp_Section;
