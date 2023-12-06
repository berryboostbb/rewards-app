import React from 'react';
import {Search, Text} from '@components';
import {GOOGLE_PLACES_API_KEY} from '@utils';
import {light_grey, RF, txt_gray} from '@theme';
import {StyleSheet, ScrollView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

interface Props {
  colors: any;
  title?: any;
  onChange: (data: any, details: any) => void;
}

const GoogleAddress = React.forwardRef((props: Partial<Props>, ref: any) => {
  const {colors, onChange, title} = props;
  return (
    <>
      {/* <Text bold size={12} color={txt_gray} style={[styles.placeholderText]}>
        {}
      </Text> */}
      <GooglePlacesAutocomplete
        ref={ref}
        listViewDisplayed
        fetchDetails={true}
        // keepResultsAfterBlur={true}
        placeholder="Home Address"
        nearbyPlacesAPI="GoogleReverseGeocoding"
        onPress={(data: any, details: any) => {
          if (onChange) {
            onChange(data, details);
          }
        }}
        enableHighAccuracyLocation
        enablePoweredByContainer={false}
        renderDescription={row => row.description}
        textInputProps={{
          placeholderTextColor: txt_gray,
          paddingLeft: RF(20),
          clearButtonMode: 'never',
          width: '100%',
        }}
        styles={{
          textInputContainer: {flex: 1},
          textInput: [styles.inputStyle, {color: txt_gray}],
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: {
            zIndex: 1000,
          },
          container: {},
        }}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
          components: 'country:ca',
          types: 'geocode',
        }}
      />
    </>
  );
});

const styles = StyleSheet.create({
  inputStyle: {
    height: RF(40),
    width: '100%',
    fontSize: RF(13),
    borderRadius: RF(50),
    marginTop: RF(20),
    backgroundColor: light_grey,
  },
  placeholderText: {
    marginLeft: RF(20),
    marginTop: RF(25),
  },
});

export default GoogleAddress;
