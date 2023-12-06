import React, {useEffect} from 'react';
import {RF} from '@theme';
import {useSelector} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {Image, ImageBackground, View} from 'react-native';
import {green_marker, map_marker, _marker} from '@assets';

const Maps = ({
  home,
  coords,
  marker,
  onPress,
  mapViewRef,
  markerArray,
  currentlatLon,
  onLongPressButton,
  initial,
}: {
  home?: any;
  coords?: any;
  marker?: any;
  onPress?: any;
  mapViewRef?: any;
  markerArray?: any;
  currentlatLon?: any;
  onLongPressButton?: () => void;
  initial?: any;
}) => {
  var region = {
    latitudeDelta: 0.02,
    longitudeDelta: 0.04,
    latitude: currentlatLon?.lat,
    longitude: currentlatLon?.lon,
  };
  const {colorCode} = useSelector((state: any) => state.root.user);

  // useEffect(() => {
  //   if (mapViewRef?.current) {
  //     coords?.map((marker: any) => {
  //       const reg = {
  //         latitude: marker?.latlng?.lat,
  //         longitude: marker?.latlng?.lng,
  //         latitudeDelta: 0.2,
  //         longitudeDelta: 0.2,
  //       };
  //       mapViewRef?.current?.animateToRegion(reg, 1000);
  //     });
  //   }
  // }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapViewRef}
        style={{flex: 1}}
        maxZoomLevel={50}
        zoomEnabled={true}
        zoomTapEnabled={true}
        initialRegion={
          initial
            ? initial
            : {
                latitude: currentlatLon?.lat,
                longitude: currentlatLon?.lon,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2,
              }
        }
        customMapStyle={[
          {
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },

          {
            elementType: 'geometry',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                // color: '#757575',
                color: '#FFFFFF',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#FFFFFF',
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: colorCode,
                // visibility: 'on',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text',
            stylers: [
              {
                // visibility: 'on',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text',
            stylers: [
              {
                // visibility: 'on',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text.fill',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'administrative.province',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
          {
            featureType: 'poi.attraction',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.business',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.government',
            elementType: 'labels.text.fill',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.medical',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: colorCode,
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: colorCode,
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: colorCode,
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.place_of_worship',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.place_of_worship',
            elementType: 'labels.text.fill',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.school',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'on',
              },
            ],
          },
          {
            featureType: 'poi.sports_complex',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                // color: '#c4c3c0',
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#c4c3c0',
                visibility: 'off',
              },
              {
                weight: 1,
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c4c3c0',
              },
              {
                weight: 0.0001,
              },
            ],
          },

          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#FFFFFF',
              },
              {
                weight: 0.001,
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#FFFFFF',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#FFFFFF',
              },
            ],
          },

          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: colorCode,
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: colorCode,
              },
            ],
          },
        ]}
        showsCompass={false}
        showsPointsOfInterest={false}
        showsMyLocationButton={false}>
        {home && (
          <Marker coordinate={region}>
            <Image
              source={green_marker}
              style={{
                width: RF(30),
                height: RF(30),
                resizeMode: 'contain',
              }}
            />
          </Marker>
        )}

        {home && coords
          ? coords.map((item: any, index: any) => {
              let lat = item?.lat;
              let lng = item?.lng;
              return (
                <>
                  <Marker
                    key={index}
                    style={{width: RF(45), height: RF(45), flex: 1}}
                    coordinate={{
                      latitude: lat,
                      longitude: lng,
                    }}>
                    <ImageBackground
                      source={map_marker}
                      imageStyle={{
                        height: RF(45),
                        resizeMode: 'contain',
                      }}
                      style={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={{
                          uri: 'https://plastk.s3.ca-central-1.amazonaws.com/business_portal/64662ef500d1a35cdf617955/business_logo.png',
                        }}
                        style={{
                          width: RF(37),
                          height: RF(37),
                          borderRadius: 20,
                          marginLeft: RF(2),
                          marginTop: RF(2),
                        }}
                      />
                    </ImageBackground>
                  </Marker>
                </>
              );
            })
          : coords.map((item: any, index: any) => {
              let lat = item?.latlng?.lat;
              let lng = item?.latlng?.lng;
              return (
                <>
                  <Marker
                    key={index}
                    style={{
                      width: RF(80),
                      height: RF(80),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    coordinate={{latitude: lat, longitude: lng}}>
                    <Image
                      source={_marker}
                      style={{
                        width: RF(30),
                        height: RF(30),
                        resizeMode: 'contain',
                      }}
                    />
                  </Marker>
                </>
              );
            })}

        {markerArray &&
          markerArray.map((item: any, index: any) => {
            return (
              <Marker onPress={onPress} coordinate={item?.region}>
                <Image
                  source={item?.url}
                  style={{
                    width: RF(42),
                    height: RF(42),
                    resizeMode: 'contain',
                  }}
                />
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
};

export default Maps;

// customMapStyle={[
//   {
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: colorCode,
//       },
//     ],
//   },
//   {
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#746855',
//       },
//     ],
//   },
//   {
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#242f3e',
//       },
//     ],
//   },
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#d59563',
//       },
//     ],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#d59563',
//       },
//     ],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#263c3f',
//       },
//     ],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#6b9a76',
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#38414e',
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [
//       {
//         color: '#212a37',
//       },
//     ],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#9ca5b3',
//       },
//     ],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#746855',
//       },
//     ],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [
//       {
//         color: '#1f2835',
//       },
//     ],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#f3d19c',
//       },
//     ],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#2f3948',
//       },
//     ],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#d59563',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#17263c',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         color: '#515c6d',
//       },
//     ],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         color: '#17263c',
//       },
//     ],
//   },
// ]}
{
  /* <Circle
          zIndex={20}
          radius={2000}
          center={region}
          strokeWidth={2}
          strokeColor={green}
        /> */
}
