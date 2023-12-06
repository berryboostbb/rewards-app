import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, Image} from 'react-native';
import Moment from 'moment';
import {color} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {
  mulish_bold,
  mulish_regular,
  RF,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@theme';
var currencyFormatter = require('currency-formatter');

const SpecialOffer = ({item}: {item?: any}) => {
  const myTheme = useTheme();

  const renderItems = () => {
    return (
      <LinearGradient
        colors={
          //   props.offerType === 'dollarBased'
          //     ? ['#BFA4F1', '#8C70BF']
          //     : props.offerType === 'percentBased'
          //     ? ['#A4ADF1', '#707BBF']
          //     :
          ['#A4F1B1', '#70BF8D']
        }
        style={styles.container}
        // style={{...styles.container, paddingBottom: '3%'}}
      >
        <Text
        //   style={{
        //     fontSize: RF(16),
        //     fontWeight: '700',
        //     color: 'white',
        //     borderColor: 'white',
        //     fontFamily: mulish_regular,
        //     padding: '3%',
        //     paddingLeft: '5%',
        //   }}
        >
          Special Offer
        </Text>

        <View
          style={{
            borderColor: 'white',
            width: SCREEN_WIDTH,
            borderWidth: 0.7,
            opacity: 0.5,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: '5%',
          }}>
          <View style={{width: '65%', marginTop: '8%'}}>
            {props.offerType === 'dollarBased' ? (
              <>
                <Text
                //   style={{
                //     fontFamily: mulish_regular,
                //     color: 'white',
                //     fontSize: RF(16),
                //     fontWeight: '700',
                //     lineHeight: RF(20),
                //   }}
                >
                  Spend At Least{' '}
                  {currencyFormatter.format(
                    props.item.campaign.offer_details.minimum_amount,
                    {code: 'CAD'},
                  )}{' '}
                </Text>
                <View style={{marginTop: '3%'}}>
                  <Text
                  // style={{
                  //   fontFamily: mulish_regular,
                  //   color: 'white',
                  //   fontSize: RF(12),
                  //   fontWeight: '800',
                  // }}
                  >
                    <Text>And receive</Text>
                    <Text
                    // style={{fontFamily: mulish_bold, fontWeight: 'bold'}}
                    >
                      {' '}
                      {
                        props.item.campaign.offer_details.plastk_points_value
                      }{' '}
                    </Text>
                    <Text>Plastk points.</Text>
                  </Text>
                </View>
              </>
            ) : props.offerType === 'repeatVisit' ? (
              <>
                <Text
                //   style={{
                //     fontFamily: mulish_bold,
                //     color: 'white',
                //     fontSize:'2.5%',
                //   }}
                >
                  Visit {props.item.campaign.offer_details.minimum_visit} times{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: mulish_regular,
                    color: 'white',
                    fontSize: RF(12),
                    fontWeight: '800',
                  }}>
                  <Text>And receive</Text>
                  <Text
                  //   style={{fontFamily: mulish_bold, fontWeight: 'bold'}}
                  >
                    {' '}
                    {props.item.campaign.offer_details.plastk_points_value}{' '}
                  </Text>
                  <Text>Plastk points on the </Text>
                  <Text
                  //   style={{fontFamily: mulish_bold, fontWeight: 'bold'}}
                  >
                    {props.item.campaign.offer_details.minimum_visit}
                    {props.item.campaign.offer_details.minimum_visit === 1
                      ? 'st '
                      : props.item.campaign.offer_details.minimum_visit === 2
                      ? 'nd '
                      : props.item.campaign.offer_details.minimum_visit === 3
                      ? 'rd '
                      : 'th '}
                  </Text>
                  <Text>visit.</Text>
                </Text>
                {/* <UserVisitComponent item={props.item} /> */}
              </>
            ) : (
              <>
                <Text
                //   style={{
                //     fontFamily: mulish_bold,
                //     color: 'white',
                //     fontSize:'2.4%',
                //   }}
                >
                  Spend{' '}
                  {currencyFormatter.format(
                    props.item.campaign.offer_details.minimum_amount,
                    {code: 'CAD'},
                  )}
                  {' Or More'}
                </Text>
                <Text
                //   style={{
                //     fontFamily: mulish_regular,
                //     color: 'white',
                //     marginTop: '0.2%',
                //     fontSize: '1.8%',
                //   }}
                >
                  <Text>And receive</Text>
                  <Text
                  //   style={{fontFamily: mulish_bold, fontWeight: 'bold'}}
                  >
                    {' '}
                    {props.item.campaign.offer_details.plastk_points}
                    {'% '}
                  </Text>
                  <Text>
                    back in Plastk points, up to a maximum of{' '}
                    {currencyFormatter.format(
                      Math.round(
                        props.item.campaign.offer_details.plastk_points_value,
                      ),
                      {code: '', precision: 0},
                    )}{' '}
                    points.
                  </Text>
                </Text>
              </>
            )}
          </View>
          <LinearGradient
            colors={
              props.offerType === 'dollarBased'
                ? ['#BFA4F1', '#8C70BF']
                : props.offerType === 'percentBased'
                ? ['#A4ADF1', '#707BBF']
                : ['#A4F1B1', '#70BF8D']
            }
            style={{
              elevation: 10,
              shadowOpacity: 0.2,
              shadowOffset: {width: 0, height: 0},
              marginTop: '3%',
              backgroundColor: 'white',
              borderRadius: 100,
              height: (15.5 / 100) * SCREEN_HEIGHT,
              width: (15.5 / 100) * SCREEN_HEIGHT,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '1%',
            }}>
            <LinearGradient
              colors={
                props.offerType === 'dollarBased'
                  ? ['#8C70BF', '#BFA4F1']
                  : props.offerType === 'percentBased'
                  ? ['#707BBF', '#A4ADF1']
                  : ['#70BF8D', '#A4F1B1']
              }
              style={{
                borderRadius: 100,
                height: (14.3 / 100) * SCREEN_HEIGHT,
                width: (14.3 / 100) * SCREEN_HEIGHT,

                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
              // style={{
              //   color: '#fff',
              //   fontSize: RF(20),
              //   fontWeight: '700',
              //   fontFamily: mulish_bold,
              // }}
              >
                {props.item.campaign.offer_details.plastk_points_value}
              </Text>
              <Text style={{color: '#fff', fontSize: hp('1.5%')}}>
                Plastk Points
              </Text>
            </LinearGradient>
          </LinearGradient>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '93%',
            marginTop: '1%',
          }}>
          <Text
          // style={{
          //   fontFamily: mulish_regular,
          //   color: 'white',
          //   fontSize: '1.3',
          // }}
          >
            *Terms and Conditions Apply
          </Text>

          <Text
          // style={{
          //   fontFamily: mulish_regular,
          //   color: 'white',
          //   fontSize: '1.3',
          // }}
          >
            Expires{' '}
            {Moment(props.item.campaign.duration.endDate).format(
              'MMM Do YYYY hh:mm a',
            )}
          </Text>
        </View>
      </LinearGradient>
    );
  };

  return (
    <>
      <Text>haloooo</Text>
      {/* {renderItems()} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    elevation: 9,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    marginTop: '1.5%',
    backgroundColor: '#AC8EE3',
  },

  offerContainer: {
    marginTop: '1%',
  },
  logoContainer: {
    marginTop: '0%',
    alignItems: 'center',
  },
});

export default SpecialOffer;
