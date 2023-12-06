import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RangePicker} from '@components';
import {RF} from '@theme';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

const index = () => {
  const spinnerData = [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 10},
    {value: 11},
    {value: 12},
    {value: 13},
    {value: 14},
    {value: 15},
    {value: 16},
    {value: 17},
    {value: 18},
    {value: 19},
    {value: 20},
    {value: 21},
    {value: 22},
    {value: 23},
    {value: 24},
    {value: 25},
    {value: 26},
    {value: 27},
    {value: 28},
    {value: 29},
    {value: 30},
    {value: 31},
    {value: 32},
    {value: 33},
    {value: 34},
    {value: 35},
    {value: 36},
    {value: 37},
    {value: 38},
    {value: 39},
    {value: 40},
    {value: 41},
    {value: 42},
    {value: 43},
    {value: 44},
    {value: 45},
    {value: 46},
    {value: 47},
    {value: 48},
    {value: 49},
    {value: 50},
    {value: 51},
    {value: 52},
    {value: 53},
    {value: 54},
    {value: 55},
    {value: 56},
    {value: 57},
    {value: 58},
    {value: 59},
    {value: 60},
    {value: 61},
    {value: 62},
    {value: 63},
    {value: 64},
    {value: 65},
    {value: 66},
    {value: 67},
    {value: 68},
    {value: 69},
    {value: 70},
    {value: 71},
    {value: 72},
    {value: 73},
    {value: 74},
    {value: 75},
    {value: 76},
    {value: 77},
    {value: 78},
    {value: 79},
    {value: 80},
    {value: 81},
    {value: 82},
    {value: 83},
    {value: 84},
    {value: 85},
    {value: 86},
    {value: 87},
    {value: 88},
    {value: 89},
    {value: 90},
    {value: 91},
    {value: 92},
    {value: 93},
    {value: 94},
    {value: 95},
    {value: 96},
    {value: 97},
    {value: 98},
    {value: 99},
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const THEME: any = useTheme();

  return (
    <View>
      <View>
        <RangePicker
          style={{marginTop: RF(30)}}
          data={spinnerData}
          onChange={res => {
            // res && calculateDelta(31.4847777, 74.313295, res * 7000);
            setSelectedIndex(res);
            // setMiles(spinnerData[res].value);
            console.log('res.......', res);
          }}
          renderItem={({value}) => {
            return (
              <View style={styles.fCOntainer}>
                <View style={styles.lineContainer}>
                  {value % 5 == 0 ? (
                    <LargeLine
                      color={
                        value == selectedIndex
                          ? THEME.colors.lightPrimary
                          : 'rgba(0,0,0,0.2)'
                      }
                    />
                  ) : (
                    <SmallLine
                      color={
                        value == selectedIndex
                          ? THEME.colors.lightPrimary
                          : 'rgba(0,0,0,0.2)'
                      }
                    />
                  )}
                </View>
                {value % 5 == 0 && (
                  <Text
                    style={[
                      styles.milesText,
                      {
                        color:
                          value == selectedIndex
                            ? THEME.colors.lightPrimary
                            : 'rgba(0,0,0,0.2)',
                      },
                    ]}>
                    {value} miles
                  </Text>
                )}
              </View>
            );
          }}
          itemWidth={RF(14)}
        />
      </View>
    </View>
  );
};

export default index;

const SmallLine = ({color}: any) => {
  return <View style={[styles.smallLine, {backgroundColor: color}]} />;
};
const LargeLine = ({color}: any) => {
  return <View style={[styles.largeLine, {backgroundColor: color}]} />;
};
