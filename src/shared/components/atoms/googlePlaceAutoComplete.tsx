import React from 'react';
import Text from './text';
import {GOOGLE_PLACES_API_KEY} from '@utils';
import {StyleSheet, View} from 'react-native';
import {light_grey, RF, txt_gray} from '@theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

interface Props {
  colors: any;
  title?: any;
  onChange: (data: any, details: any) => void;
}

const GooglePlaceComplete = (props: Partial<Props>) => {
  const {colors, onChange, title} = props;

  return (
    <GooglePlacesAutocomplete
      listViewDisplayed
      fetchDetails={true}
      placeholder={title}
      keyboardShouldPersistTaps="handled"
      nearbyPlacesAPI="GoogleReverseGeocoding"
      onPress={(data: any, details = null) => {
        if (onChange) {
          onChange(data, details);
        }
      }}
      // currentLocation={true}
      enableHighAccuracyLocation
      enablePoweredByContainer={false}
      renderDescription={row => row.description}
      textInputProps={{
        placeholderTextColor: txt_gray,
        clearButtonMode: 'never',
        onChangeText: (txt: any) => {},
      }}
      styles={{
        // textInputContainer: {flex: 1},
        textInput: [styles.inputStyle, {color: txt_gray}],
        predefinedPlacesDescription: {
          color: '#1faadb',
          // backgroundColor: 'green',
        },
        listView: {
          zIndex: 1000,
          width: '180%',
          marginLeft: -130,
        },
      }}
      query={{
        language: 'en',
        types: 'geocode',
        components: 'country:ca',
        key: GOOGLE_PLACES_API_KEY,
      }}
      // listEmptyComponent={() => (
      //   <View style={{flex: 1}}>
      //     <Text>No results were found</Text>
      //   </View>
      // )}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    // height: RF(40),
    // width: '100%',
    fontSize: RF(13),
    borderRadius: RF(50),
    backgroundColor: light_grey,
  },
  placeholderText: {
    // marginLeft: RF(20),
    marginTop: RF(25),
  },
});

export default GooglePlaceComplete;
