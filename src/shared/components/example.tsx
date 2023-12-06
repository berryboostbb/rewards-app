// import React, {useState} from 'react';
// import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
// import Animated, {
//   interpolate,
//   Extrapolate,
//   useSharedValue,
//   useAnimatedStyle,
// } from 'react-native-reanimated';

// const SRC_WIDTH = Dimensions.get('window').width;
// const CARD_LENGTH = SRC_WIDTH * 0.8;
// const SPACING = SRC_WIDTH * 0.02;
// const SIDECARD_LENGTH = (SRC_WIDTH * 0.19) / 3;
// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// interface itemProps {
//   index: number;
//   scrollY: number;
// }

// function Item({index, scrollY}: itemProps) {
//   const size = useSharedValue(0.1);

//   const inputRange = [
//     (index - 1) * CARD_LENGTH,
//     index * CARD_LENGTH,
//     (index + 1) * CARD_LENGTH,
//   ];

//   size.value = interpolate(
//     scrollY,
//     inputRange,
//     [1.5, 1, 1.5],
//     Extrapolate.CLAMP,
//   );

//   const opacity = useSharedValue(1);
//   const opacityInputRange = [
//     (index - 1) * CARD_LENGTH,
//     index * CARD_LENGTH,
//     (index + 1) * CARD_LENGTH,
//   ];
//   opacity.value = interpolate(
//     scrollY,
//     opacityInputRange,
//     [0.5, 1, 0.5],
//     Extrapolate.CLAMP,
//   );

//   const cardStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{scaleY: size.value}],
//       opacity: opacity.value,
//     };
//   });

//   return (
//     <Animated.View
//       style={[
//         styles.card,
//         cardStyle,
//         {
//           // marginLeft: index == 2 ? SIDECARD_LENGTH : SPACING,
//           // marginRight: index == 0 ? SIDECARD_LENGTH : SPACING,
//         },
//       ]}>
//       <Image
//         source={require('../../assets/img1.jpg')}
//         style={{width: '100%', height: '100%'}}
//       />
//     </Animated.View>
//   );
// }

// export default function Carousel() {
//   const [scrollY, setscrollY] = useState(0);

//   const DATA = [
//     {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Fourth Item',
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Five Item',
//     },
//   ];

//   return (
//     <View style={{height: 500, alignItems: 'center', marginTop: 100}}>
//       <Animated.View>
//         <AnimatedFlatList
//           scrollEventThrottle={16}
//           showsVerticalScrollIndicator={false}
//           decelerationRate={0.8}
//           snapToInterval={CARD_LENGTH + SPACING * 1.5}
//           //   disableIntervalMomentum={true}
//           //   disableScrollViewPanResponder={true}
//           snapToAlignment={'center'}
//           data={DATA}
//           renderItem={({item, index}) => {
//             return <Item index={index} scrollY={scrollY} />;
//           }}
//           keyExtractor={(item: any) => item.id}
//           onScroll={event => {
//             setscrollY(event.nativeEvent.contentOffset.y);
//           }}
//         />
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     width: CARD_LENGTH,
//     height: 150,
//     overflow: 'hidden',
//     borderRadius: 15,
//   },
// });

import React from 'react';
import {Switch, Text, View} from 'react-native';

import BackgroundGeolocation, {
  Location,
  Subscription,
} from 'react-native-background-geolocation';

const Carousel = () => {
  const [enabled, setEnabled] = React.useState(false);
  const [location, setLocation] = React.useState('');

  React.useEffect(() => {
    const onLocation: Subscription = BackgroundGeolocation.onLocation(
      location => {
        setLocation(JSON.stringify(location, null, 2));
      },
    );

    const onMotionChange: Subscription = BackgroundGeolocation.onMotionChange(
      event => {},
    );

    const onActivityChange: Subscription =
      BackgroundGeolocation.onActivityChange(event => {});

    const onProviderChange: Subscription =
      BackgroundGeolocation.onProviderChange(event => {});

    BackgroundGeolocation.ready({
      // Geolocation Config
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      // Activity Recognition
      stopTimeout: 5,
      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true, // <-- Auto start tracking when device is powered-up.
      // HTTP / SQLite config
      url: 'http://yourserver.com/locations',
      batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
      headers: {
        // <-- Optional HTTP headers
        'X-FOO': 'bar',
      },
      params: {
        // <-- Optional HTTP params
        auth_token: 'maybe_your_server_authenticates_via_token_YES?',
      },
    }).then(state => {
      setEnabled(state.enabled);
    });

    return () => {
      // Remove BackgroundGeolocation event-subscribers when the View is removed or refreshed
      // during development live-reload.  Without this, event-listeners will accumulate with
      // each refresh during live-reload.
      onLocation.remove();
      onMotionChange.remove();
      onActivityChange.remove();
      onProviderChange.remove();
    };
  }, []);

  /// 3. start / stop BackgroundGeolocation
  React.useEffect(() => {
    if (enabled) {
      BackgroundGeolocation.start();
    } else {
      BackgroundGeolocation.stop();
      setLocation('');
    }
  }, [enabled]);

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Click to enable BackgroundGeolocation</Text>
      <Switch value={enabled} onValueChange={setEnabled} />
      <Text style={{fontFamily: 'monospace', fontSize: 12}}>{location}</Text>
    </View>
  );
};

export default Carousel;
