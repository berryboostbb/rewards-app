import {RF} from '@theme';
import {View, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  chilCont: {
    flex: 2,
    paddingHorizontal: RF(10),
    // flexDirection:"column"
  },
  text: {
    fontSize: RF(16),
    color: '#000',
    paddingVertical: RF(20),
  },
  mapCon: {
    flex: 0.5,
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
