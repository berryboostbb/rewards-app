import {RF, GST, ligh_green, mulish_bold, mulish_regular, GREY} from '@theme';
import React from 'react';
import {Text} from '@components';
import {p_my_list} from '@assets';
import {useSelector} from 'react-redux';
import {Image, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {currencyFormatter} from '@utils';
import {format as prettyFormat} from 'pretty-format';

const Points = ({summary}: {summary?: any}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  // "available_points": 895,
  // "consumed_points": 0,
  // "total_available_dollars": "3.58",
  // "total_consumed_dollars": "0.00",
  // "total_dollars": "3.58",
  // "total_points": 895,

  return (
    <View style={styles.mainView}>
      <View style={styles.view}>
        {/* <View style={styles.divider} /> */}
        <Section
          summary={summary}
          myTheme={myTheme}
          styles={styles}
          title1={'Available Points'}
          data={summary?.available_points}
        />
        <TotalPoints
          summary={summary}
          myTheme={myTheme}
          styles={styles}
          title={'Total Available Dollars'}
          data={summary?.total_available_dollars}
        />
      </View>

      <View style={styles.view}>
        <Section
          summary={summary}
          myTheme={myTheme}
          styles={styles}
          title1={'Consumed Points'}
          data={summary?.consumed_points}
        />
        <TotalPoints
          summary={summary}
          myTheme={myTheme}
          styles={styles}
          title={'Total Consumed Dollars'}
          data={summary?.total_consumed_dollars}
        />
      </View>

      <View style={styles.view}>
        <Section
          summary={summary}
          myTheme={myTheme}
          styles={styles}
          title1={'Total Points'}
          data={summary?.total_points}
        />
        <TotalPoints
          summary={summary}
          myTheme={myTheme}
          styles={styles}
          title={'Total Dollars'}
          data={summary?.total_dollars}
        />
      </View>
    </View>
  );
};

const Section = ({
  styles,
  myTheme,
  summary,
  title1,
  title2,
  data,
}: {
  styles?: any;
  myTheme?: any;
  summary?: any;
  title1?: any;
  title2?: any;
  data?: any;
}) => {
  return (
    <View>
      <View>
        <Text style={styles.titleText}>{title1}</Text>
        <View style={GST.flexDir1}>
          <Text
            style={[
              styles.availableCreditValueText,
              {color: myTheme.colors.LABEL_COLOR},
            ]}>
            {currencyFormatter.format(
              data,
              // summary?.remaining_points
              //   ? summary?.remaining_points
              //   : summary?.available_points,
              {
                code: '',
                precision: 0,
              },
            )}
          </Text>
          <Image style={styles.img} resizeMode="contain" source={p_my_list} />
        </View>
      </View>

      {/* <View>
        <Text style={[styles.titleText, {textAlign: 'right'}]}>{title2}</Text>
        <Text
          style={[styles.pointsValueText, {color: myTheme.colors.LABEL_COLOR}]}>
          {currencyFormatter.format(
            summary?.points_used
              ? summary?.points_used
              : summary?.consumed_points,
            {
              code: 'CAD',
            },
          )}
        </Text>
      </View> */}
    </View>
  );
};

const TotalPoints = ({
  styles,
  myTheme,
  summary,
  title,
  data,
}: {
  styles?: any;
  myTheme?: any;
  summary?: any;
  title?: any;
  data?: any;
}) => {
  return (
    <View>
      <Text style={[styles.titleText, {textAlign: 'right'}]}>{title}</Text>
      <Text
        style={[styles.pointsValueText1, {color: myTheme.colors.LABEL_COLOR}]}>
        {currencyFormatter.format(
          data,
          // summary?.total_user_points
          //   ? summary?.total_user_points
          //   : summary?.total_points,
          {
            code: 'CAD',
          },
        )}
      </Text>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    divider: {
      height: 100,
      borderWidth: 0.4,
      borderColor: GREY,
    },
    txt: {flexDirection: 'column', marginTop: RF(5)},
    img: {
      width: RF(20),
      height: RF(20),
      marginLeft: RF(5),
      marginTop: RF(7),
    },
    mainView: {
      // marginTop: RF(25),
      padding: RF(10),
      // elevation: 0.3,
      // padding: 5,
      // borderRadius: 10,
      borderRadius: 10,
      // backgroundColor: ligh_green,
      // opacity: 0.9,
    },
    view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: RF(10),
    },
    titleText: {
      fontFamily: mulish_regular,
      fontSize: RF(13),
      fontWeight: '700',
      textAlign: 'left',
      color: colors.LABEL_COLOR,
    },
    availableCreditValueText: {
      fontFamily: mulish_bold,
      fontSize: RF(24),
      fontWeight: '700',
      textAlign: 'left',
    },
    pointsValueText: {
      fontFamily: mulish_bold,
      fontSize: RF(24),
      // alignSelf: 'flex-end',
      fontWeight: '700',
      // textAlign: 'right',
    },
    pointsValueText1: {
      fontFamily: mulish_bold,
      fontSize: RF(24),
      alignSelf: 'flex-end',
      fontWeight: '700',
      // textAlign: 'right',
    },
    pendingTransactionsTextStyle: {
      fontFamily: mulish_regular,
      fontSize: RF(12),
      color: ligh_green,
      fontWeight: '600',
      textAlign: 'left',
    },
  });
export default Points;
