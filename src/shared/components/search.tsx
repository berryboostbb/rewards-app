import React from 'react';
import Text from './atoms/text';
import {useTheme} from '@react-navigation/native';
import Cross from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  Pressable,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  RF,
  WHITE,
  txt_gray,
  light_grey,
  typography,
  primaryDarkColor,
} from '@theme';
import {useSelector} from 'react-redux';

const Search = ({
  type,
  marginR,
  style,
  onSearch,
  mapSearch,
  placeholder,
  onChangeText,
  onEndEditing,
  onPress_CrossBtn,
}: {
  onSearch?: any;
  marginR?: any;
  style?: any;
  type?: any;
  mapSearch?: any;
  placeholder?: any;
  onChangeText?: any;
  onEndEditing?: any;
  onPress_CrossBtn?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const {colorCode} = useSelector((state: any) => state.root.user);

  const parseAddress = async (data: any, details: any, setSearchText: any) => {
    try {
      let postalCode = '';
      let address = data.description;
      let splitted = address.split(',');
      if (
        splitted[2]?.trim() === 'QC' ||
        splitted[2]?.toLowerCase() === 'Quebec'
      ) {
        let validationErrors = {};
        validationErrors.googleAddress =
          'Plastk Secured Credit Card service is not available in Quebec at this time.';
      } else {
        setSearchText(splitted[0].trim());
        try {
          details.address_components.map((element: any, index: any) => {
            element.types.map((item: any, index: any) => {
              if (item === 'postal_code') {
                postalCode = element.long_name.split(' ').join('');

                try {
                  if (postalCode.length < 6) {
                    postalCode = '';
                  }
                } catch (error) {
                  postalCode = '';
                }
              }
            });
          });
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style ? style : styles.view}>
      {mapSearch && (
        <View
          style={[
            styles.txt,
            {backgroundColor: type == '' ? WHITE : colorCode},
          ]}>
          <Text
            bold
            numberOfLines={1}
            size={typography.standard}
            color={type == '' ? '#4A5568' : WHITE}
            style={{opacity: type == '' ? 0.5 : 1, width: 70}}>
            {type == '' ? 'Location Services' : type}
          </Text>
          <Pressable onPress={onPress_CrossBtn}>
            <Cross
              size={18}
              color={WHITE}
              name={'cross'}
              style={{
                marginTop: 2,
                opacity: 0.5,
              }}
            />
          </Pressable>
        </View>
      )}
      <>
        <TextInput
          // value={value}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSearch}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={txt_gray}
          style={[styles.txtInput, {left: mapSearch ? 40 : 0}]}
        />
        {/* <View
          style={
            type == ''
              ? {
                  flex: 1,
                  top: 40,
                  width: '106%',
                  // marginLeft: -30,
                  position: 'absolute',
                  zIndex: 100,
                }
              : {
                  width: '40%',
                }
          }>
          <GooglePlaceComplete
            colors={'red'}
            title={'Search'}
            onChange={(data: any, details: any) =>
              parseAddress(data, details, setSearchText)
            }
          />
        </View> */}
        <TouchableOpacity
          onPress={onSearch}
          style={{marginRight: marginR ? 5 : 20}}>
          <AntDesign name={'search1'} color={primaryDarkColor} size={14} />
        </TouchableOpacity>
      </>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    txt: {
      marginLeft: 10,
      width: RF(110),
      height: RF(30),
      borderRadius: RF(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: primaryDarkColor,
    },
    view: {
      elevation: 2,
      width: '90%',
      height: RF(40),
      marginTop: RF(25),
      borderRadius: RF(40),
      borderBottomWidth: 0,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: RF(15),
      paddingHorizontal: RF(10),
      backgroundColor: light_grey,
      justifyContent: 'space-around',
    },
    txtInput: {
      // left: 40,
      width: '80%',
      fontSize: RF(12),
      fontWeight: '500',
      color: colors.LABEL_COLOR,
      fontFamily: 'Plus Jakarta Sans',
    },
  });

export default Search;
