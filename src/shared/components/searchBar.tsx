import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {GST, mulish_regular, RF} from '@theme';
import {TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface Props extends TextInputProps {
  selectedScreen?: any;
  onTextSearch?: any;
  onPress?: any;
}
const SearchBar = (props: Partial<Props>) => {
  const {selectedScreen, onTextSearch, onPress} = props;
  const searchTextRef = useRef('');
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  return (
    <TouchableOpacity style={styles.searchViewStyle} onPress={onPress}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={myTheme.colors.LABEL_COLOR}
        style={styles.txtinput}
        onPressIn={onPress}
        onChangeText={text => {
          searchTextRef.current = text;
          onTextSearch(searchTextRef.current);
        }}
      />
      <MaterialIcons
        name="search"
        color={'#a1c452'}
        size={RF(20)}
        style={GST.mR10}
      />
    </TouchableOpacity>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    searchViewStyle: {
      borderWidth: 1,
      borderRadius: 10,
      marginTop: RF(30),
      height: RF(43),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.BACK_ARROW_BACKGROUND_COLOR,
      borderColor: colors.SEGMENTED_BORDER_COLOR,
    },
    txtinput: {
      color: colors.LABEL_COLOR,
      fontFamily: mulish_regular,
      fontWeight: '400',
      fontSize: RF(13),
      marginLeft: RF(10),
      width: '70%',
    },
  });

export default SearchBar;
