import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    transform: [{scaleX: 2}, {rotate: '180deg'}],
    borderBottomStartRadius: 250,
    borderBottomEndRadius: 250,
    overflow: 'hidden',
    zIndex: 10,
    marginTop: 30,
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
  childBottom: {
    flex: 1,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    alignItems: 'center',
  },
});

export default styles;
