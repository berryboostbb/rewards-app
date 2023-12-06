import {
  View,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {sheet} from '@assets';
import Text from './atoms/text';
import {points_list} from '@utils';
import React, {useRef, useState} from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Up from 'react-native-vector-icons/Entypo';
import Down from 'react-native-vector-icons/Entypo';
import {borderClr, primaryDarkColor, RF, WHITE} from '@theme';

const Bottom_Sheet = () => {
  const [show, setShow] = useState(true);
  let animatedValue = new Animated.Value(0);
  const {height} = Dimensions.get('window');
  const sheetRef = useRef<SlidingUpPanel>(null);

  const onDragStart = () => {
    setShow(!show);
  };

  const onClick = () => {
    if (show) {
      sheetRef?.current?.show();
    } else {
      sheetRef?.current?.hide();
    }
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <SlidingUpPanel
        ref={sheetRef}
        showBackdrop={false}
        onDragStart={onDragStart}
        animatedValue={animatedValue}
        containerStyle={styles.bG}
        draggableRange={{top: height / 2.8, bottom: !show ? 130 : 35}}>
        <Section onPress={onClick} up={show} />
      </SlidingUpPanel>
    </View>
  );
};

const Section = ({onPress, up}: {up?: any; onPress?: any}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.imgBG}>
        <Image source={sheet} style={styles.image} />

        <View style={styles.next_txt}>
          <Text size={15} semiBold color={primaryDarkColor}>
            Earn More With{' '}
          </Text>
          <Text size={13} color={primaryDarkColor}>
            Plastk Secured Credit Card
          </Text>
        </View>

        {up ? (
          <Up name="chevron-small-up" size={35} style={styles.a_placement} />
        ) : (
          <Down
            name="chevron-small-down"
            size={35}
            style={styles.a_placement}
          />
        )}
      </TouchableOpacity>

      {!up && (
        <>
          <View style={{marginTop: RF(20)}}>
            {points_list.map((item: any) => (
              <View style={styles.view}>
                <View style={styles.dot} />
                <Text color={primaryDarkColor} regular size={10}>
                  {item?.txt}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {marginLeft: RF(8), width: RF(80), height: RF(60)},
  imgBG: {
    paddingTop: RF(20),
    paddingRight: RF(7),
    paddingLeft: RF(7),
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: borderClr,
    borderBottomColor: WHITE,
    borderTopRightRadius: RF(40),
    borderTopStartRadius: RF(40),
    justifyContent: 'space-around',
  },
  bG: {backgroundColor: WHITE},
  view: {
    marginHorizontal: RF(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(9),
  },
  dot: {
    width: RF(4),
    height: RF(4),
    borderRadius: RF(4),
    backgroundColor: primaryDarkColor,
    marginLeft: RF(20),
    marginRight: RF(8),
  },
  container: {
    flex: 1,
    // marginTop: RF(100),
  },
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: 120,
    backgroundColor: '#b197fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    top: -24,
    right: 24,
    backgroundColor: '#2b8a3e',
    width: 48,
    height: 48,
    padding: 8,
    borderRadius: 24,
    zIndex: 1,
  },
  next_txt: {
    marginTop: RF(10),
  },
  a_placement: {
    marginTop: RF(18),
    marginRight: RF(15),
  },
});

export default Bottom_Sheet;
