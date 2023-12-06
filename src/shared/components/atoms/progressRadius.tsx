import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RangePicker} from '@components';
import {green, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setSelectedRadius} from '@redux';
import {spinnerData} from '@utils';

const Progress_radius = ({
  selectedIndex,
  handleSubmit,
  loading,
}: {
  loading?: any;
  handleSubmit?: any;
  selectedIndex: any;
}) => {
  const dispatch: any = useDispatch();
  const THEME: any = useTheme();

  return (
    <View>
      <View>
        <RangePicker
          style={{marginTop: RF(30)}}
          data={spinnerData}
          onChange={res => {
            // res && calculateDelta(31.4847777, 74.313295, res * 7000);
            dispatch(setSelectedRadius(res * 10));
            // setMiles(spinnerData[res].value);
          }}
          renderItem={({value}) => {
            return (
              <View style={styles.fCOntainer}>
                <View style={styles.lineContainer}>
                  {value % 50 == 0 ? (
                    <LargeLine
                      color={value == selectedIndex ? 'red' : 'rgba(0,0,0,0.2)'}
                    />
                  ) : (
                    <SmallLine
                      color={value == selectedIndex ? 'red' : 'rgba(0,0,0,0.2)'}
                    />
                  )}
                </View>
                {value % 50 == 0 && (
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
                    {value} meters
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

export default Progress_radius;

const SmallLine = ({color}: any) => {
  return <View style={[styles.smallLine, {backgroundColor: color}]} />;
};
const LargeLine = ({color}: any) => {
  return <View style={[styles.largeLine, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
  },
  chilCont: {
    // flex: 2,
    paddingHorizontal: RF(10),
    // flexDirection:"column"
  },
  text: {
    fontSize: RF(16),
    color: '#000',
    paddingVertical: RF(20),
  },
  mapCon: {
    // flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 0,
    // backgroundColor: "red"
  },
  map: {
    height: RF(200),
    width: '100%',
    borderRadius: RF(100),
  },
  mapoverlay: {
    backgroundColor: 'red',
  },
  bottom: {
    borderTopWidth: RF(2),
    borderTopColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: RF(20),
  },
  btmText: {
    fontSize: RF(14),
    color: '#000',
  },
  mapTxt: {
    marginTop: RF(5),
    fontSize: RF(12),
    fontWeight: '400',
    textAlign: 'center',
    color: '#979797',
    lineHeight: RF(12),
  },
  filCont: {
    backgroundColor: 'red',
    height: RF(35),
    width: RF(35),
    borderRadius: RF(17.5),
    // justifyContent: 'center',
    // paddingLeft: RF(7),
    zIndex: 1,
    // alignItems:"center"
  },
  smallLine: {
    height: RF(20),
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: RF(2),
    marginLeft: RF(10),
  },
  largeLine: {
    height: RF(30),
    backgroundColor: 'black',
    width: RF(2),
    marginLeft: RF(10),
  },
  fCOntainer: {
    maxHeight: RF(150),
    // maxWidth: RF(12),
  },
  lineContainer: {
    height: RF(60),
    // backgroundColor: 'green',
    maxWidth: RF(14),
    width: RF(14),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  milesText: {
    position: 'absolute',
    bottom: 1,
    minWidth: RF(50),
    top: RF(35),
    fontSize: RF(10),
  },
});
