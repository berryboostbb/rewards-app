import React from 'react';
import {Text} from '@components';
import {StyleSheet, View} from 'react-native';
import {GST, mulish_regular, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const LinearCard = ({
  user,
  title,
  type,
  value,
  profile,
  payment,
}: {
  user: any;
  title: any;
  type?: any;
  value?: any;
  profile?: any;
  payment?: any;
}) => {
  const theme: any = useTheme();
  const styles = useStyles(theme.colors);

  return (
    <View style={styles.view}>
      <LinearGradient
        colors={[
          theme.colors.CARD_GRADIENT_FIRST_COLOR,
          theme.colors.CARD_GRADIENT_SECOND_COLOR,
        ]}
        style={styles.linearGradientContainer}>
        <Text style={styles.headerTextStyle}>{title}</Text>

        {payment && (
          <View style={styles.txt}>
            <View>
              <Text style={styles.titleTextStyle}>{type}</Text>
              <Text style={styles.valueTextStyle}>
                10,000
                {/* {cardData?.statement_summary?.LastPaymentDate
                ? moment(cardData?.statement_summary?.LastPaymentDate).format(
                    'MMM DD',
                  )
                : '-'} */}
              </Text>
            </View>

            <View style={GST.mR5}>
              <Text style={styles.titleTextStyle}>{value}</Text>
              <Text style={[styles.valueTextStyle, {textAlign: 'right'}]}>
                $39,0
                {/* {currencyFormatter.format(
                cardData?.statement_summary?.MinPayment,
                { code: 'CAD' },
              )} */}
              </Text>
            </View>
          </View>
        )}

        {profile && (
          <View style={styles.viewlast}>
            <Text size={16}>
              Name: {user.first_name}
              {''} {user.last_name}
            </Text>
            <Text size={16}>Email: {user.email}</Text>
            <Text size={16}>Card Type: {user.cardType}</Text>
            <Text size={16}>Card Number: {user.cardNumber}</Text>
            <Text size={16}>Phone no: {user.contact_number}</Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default LinearCard;

const useStyles = (colors: any) =>
  StyleSheet.create({
    containerView: {
      borderRadius: 10,
      elevation: 1,
      marginTop: RF(30),
      shadowOpacity: 0.15,
      shadowOffset: {width: 0, height: 0},
    },
    linearGradientContainer: {
      borderRadius: RF(16),
      // height: RF(100),
    },
    viewlast: {
      // position: 'relative',
      borderRadius: RF(17),
      marginTop: RF(30),
      shadowOpacity: 1,
      elevation: 1,
      padding: 10,
      // shadowOffset: {width: 0, height: 0},
      marginBottom: 20,
      marginHorizontal: 10,
      backgroundColor: '#f5f5f5',
    },
    view: {
      // position: 'relative',
      borderRadius: RF(17),
      marginTop: RF(30),
      shadowOpacity: 1,
      elevation: 1,
      // shadowOffset: {width: 0, height: 0},
      marginBottom: 20,
      marginHorizontal: 10,
      backgroundColor: '#f5f5f5',
    },
    headerTextStyle: {
      fontFamily: mulish_regular,
      fontWeight: '800',
      fontSize: RF(17),
      color: colors.LABEL_COLOR,
      textAlign: 'center',
      marginTop: RF(30),
    },
    titleTextStyle: {
      fontFamily: mulish_regular,
      fontWeight: '400',
      fontSize: RF(15),
      color: colors.LABEL_COLOR,
    },
    valueTextStyle: {
      fontWeight: '800',
      fontSize: RF(19),
      color: colors.LABEL_COLOR,
      marginBottom: RF(20),
      marginTop: RF(5),
    },

    txt: {
      flexDirection: 'row',
      marginTop: RF(30),
      justifyContent: 'space-between',
      marginHorizontal: RF(10),
    },
  });
