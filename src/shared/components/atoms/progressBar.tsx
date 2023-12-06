import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {borrowell_light_Blue, gray, koho, RF, WHITE} from '@theme';
import {useSelector} from 'react-redux';

const Svg_ProgressBar = ({
  visits,
  progress,
  setProgress,
  totalVisits,
}: {
  visits?: any;
  progress?: any;
  setProgress?: any;
  totalVisits?: any;
}) => {
  let animation = useRef(new Animated.Value(0));
  const {user} = useSelector((state: any) => state.root.user);

  useInterval(() => {
    // if (visits < totalVisits) {
    // setProgress(visits);
    // }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: visits,
      duration: 5,
      useNativeDriver: false,
    }).start();
  }, [visits]);

  const width = animation.current.interpolate({
    inputRange: [0, totalVisits],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  function useInterval(callback: any, delay: any) {
    const savedCallback = useRef(null);
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback?.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <View style={styles.parentBottom}>
      <View style={styles.childBottom}>
        <Animated.View
          style={[
            styles.absoluteFill,
            {
              backgroundColor:
                user?.user_type == 'Borrowell'
                  ? borrowell_light_Blue
                  : user?.user_type == 'KOHO'
                  ? koho
                  : '#8BED4F',
              width: width,
            },
          ]}
        />
      </View>
    </View>
  );
};
export default Svg_ProgressBar;

const styles = StyleSheet.create({
  parentBottom: {
    height: RF(40),
    width: '100%',
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    borderBottomStartRadius: RF(200),
    borderBottomEndRadius: RF(200),
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: gray,
  },
  childBottom: {
    flex: 1,
    transform: [{scaleX: 0.15}, {rotate: '180deg'}],
    alignItems: 'center',
  },
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  container: {
    height: '100%',
  },
  imageContainer: {
    // backgroundColor: 'red',
    height: '30%',
  },
  parent: {
    height: '30%',
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    borderBottomStartRadius: RF(200),
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    zIndex: 10,
    marginTop: -30,
    // backgroundColor: 'blue',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    borderWidth: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBar: {
    // height: RF(20),
    // width: '100%',
    // backgroundColor: 'red',
    borderColor: '#000',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
});
