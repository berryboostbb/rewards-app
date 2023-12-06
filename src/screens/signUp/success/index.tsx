import {navigate} from '@services';
import React, {useEffect} from 'react';
import {CustomButton, Success, Text, Wrapper} from '@components';
import {View} from 'react-native';
import {GST, typography} from '@theme';
import styles from './styles';

const SignUpSuccess = ({title}: {title?: any}) => {
  return (
    <Wrapper>
      <View style={styles.checkView}>
        <Text size={typography.h2} semiBold style={GST.mL30}>
          Thank You!
        </Text>
        <Text medium size={typography.standard} style={styles.innerText}>
          {title}
        </Text>
      </View>
      <CustomButton text={'Continue'} />
    </Wrapper>
  );
};

export default SignUpSuccess;
