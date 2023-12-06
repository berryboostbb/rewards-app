import React from 'react';
import Text from './atoms/text';
import {Platform, StyleSheet, View} from 'react-native';
import CustomButton from './molecules/button';
import {LineChart} from 'react-native-chart-kit';
import {
  RF,
  WHITE,
  txt_gray,
  borderClr,
  typography,
  primaryDarkColor,
} from '@theme';
import {useSelector} from 'react-redux';

const Charts = ({
  title,
  data,
  label,
  selectedRewards,
  setSelectedRewards,
}: {
  data?: any;
  title?: any;
  label?: any;
  selectedRewards?: any;
  setSelectedRewards?: any;
}) => {
  const {colorCode} = useSelector((state: any) => state.root.user);

  const onHandleChange = (type: any) => {
    if (type === 'weekly') {
      setSelectedRewards('weekly');
    } else if (type === 'monthly') {
      setSelectedRewards('monthly');
    }
  };

  return (
    <View style={styles.mainView}>
      <Text
        semiBold
        size={typography.h3}
        color={primaryDarkColor}
        style={styles.txt}>
        {title}
      </Text>

      <LineChart
        data={{
          labels: label,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        withShadow
        width={Platform.OS === 'ios' ? RF(300) : RF(350)}
        withDots={false}
        height={RF(230)}
        withHorizontalLines
        // withOuterLines={false}
        withVerticalLines={false}
        chartConfig={{
          strokeWidth: 2,
          backgroundGradientTo: WHITE,
          backgroundGradientFrom: WHITE,
          fillShadowGradientToOpacity: 0.01,
          fillShadowGradientFromOpacity: 0.1,
          color: (opacity = 1) =>
            title == 'Amount Spent'
              ? `rgba(137, 196, 244, ${opacity})`
              : `rgba(160,216,0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(74,85,104, ${opacity})`,
          style: {},
          propsForLabels: {
            fontFamily: 'Plus Jakarta Sans',
            fontSize: RF(10),
            fontWeight: '600',
          },
        }}
        bezier
        style={{
          marginLeft: 5,
        }}
      />

      <View style={styles.btnView}>
        <CustomButton
          width={RF(100)}
          text={'Weekly'}
          bgClr={selectedRewards === 'weekly' ? colorCode : WHITE}
          btnStyle={[styles.btnWeekly]}
          textStyle={{
            fontSize: RF(10),
            color: selectedRewards === 'weekly' ? WHITE : txt_gray,
          }}
          onPress={() => onHandleChange('weekly')}
        />
        <CustomButton
          text={'Monthly'}
          width={RF(100)}
          bgClr={selectedRewards === 'monthly' ? colorCode : WHITE}
          btnStyle={[styles.btnMonthly]}
          textStyle={{
            fontSize: RF(10),
            color: selectedRewards == 'monthly' ? WHITE : txt_gray,
          }}
          onPress={() => onHandleChange('monthly')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {marginLeft: 20, marginBottom: 17, marginTop: 20},
  mainView: {
    width: '100%',
    borderWidth: 1,
    height: RF(370),
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderColor: borderClr,
    marginTop: RF(14),
    paddingBottom: 20,
  },
  clr: {color: primaryDarkColor},
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWeekly: {
    width: RF(100),
    height: RF(40),
    borderWidth: 1,
    borderColor: borderClr,
  },
  btnMonthly: {
    backgroundColor: primaryDarkColor,
    width: RF(100),
    height: RF(40),
    marginLeft: RF(20),
  },
});

export default Charts;
