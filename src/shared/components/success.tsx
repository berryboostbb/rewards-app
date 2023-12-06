import React from 'react';
import {navigate} from '@services';
import {GST, RF, typography} from '@theme';
import {Text, CustomButton} from '@components';
import {Image, StyleSheet, View} from 'react-native';
import {created_p, tick_, updatePass} from '@assets';

const Success = ({
  title,
  heading,
  scan,
  onPress,
  onClick,
}: {
  scan?: any;
  title?: any;
  heading?: any;
  onPress?: any;
  onClick?: any;
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      {!scan && (
        <Text
          align
          regular
          semiBold={true}
          size={scan ? typography.h2 : typography.heading}>
          {heading ? heading : 'Thank You!'}
        </Text>
      )}
      <View style={styles.checkView}>
        {!scan && (
          <>
            <Image source={tick_} style={styles.img} />
            <Text
              align
              medium
              size={typography.standard}
              style={styles.innerText}
              numberOfLines={2}>
              {title}
            </Text>
          </>
        )}
        {scan && (
          <>
            <Image source={tick_} style={styles.img_s} />
            <Text
              align
              regular
              semiBold={true}
              style={{marginTop: RF(10)}}
              size={scan ? typography.h2 : typography.heading}>
              {heading ? heading : 'Thank You!'}
            </Text>
            <Text
              align
              medium
              size={typography.standard}
              style={styles.innerText2}
              numberOfLines={2}>
              You have successfully connected your Plastk Rewards Account to a
              Plastk Merchant Terminal.
            </Text>
            <Text
              align
              medium
              size={typography.standard}
              style={styles.innerText3}
              numberOfLines={2}>
              Visit the Insights page on your Plastk Rewards App to see all
              purchase transactions!
            </Text>
          </>
        )}

        <View style={[styles.btn, {bottom: scan ? RF(100) : 50}]}>
          <CustomButton
            text={scan ? 'Home' : 'Continue'}
            onPress={scan ? onPress : onClick}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img_s: {
    width: RF(90),
    height: RF(90),
    resizeMode: 'contain',
    marginTop: RF(-80),
  },
  img: {
    width: RF(60),
    height: RF(60),
    resizeMode: 'contain',
    marginTop: RF(-80),
  },
  innerText: {
    width: '90%',
    marginTop: RF(16),
    marginBottom: RF(25),
  },
  innerText2: {
    width: '77%',
    marginTop: RF(15),
    // marginBottom: RF(15),
  },
  innerText3: {
    width: '77%',
    marginTop: RF(15),
    marginBottom: RF(25),
  },
  checkView: {
    flex: 1,
    // marginTop: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    width: '100%',
  },
});

export default Success;
