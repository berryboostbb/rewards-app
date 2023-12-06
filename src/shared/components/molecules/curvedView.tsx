import Maps from '../maps';
import {navigate} from '@services';
import Image_Header from './imageHeader';
import {back, _marker, zoom} from '@assets';
import React, {useEffect, useState} from 'react';
import {GST, RF, txt_gray, typography, WHITE} from '@theme';
import {Text, PointsCard, Svg_ProgressBar, CustomLoader} from '@components';
import {
  View,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {format as prettyFormat} from 'pretty-format';

const CurvedView = ({
  item,
  mapRef,
  coords,
  navigation,
  visits,
  onFavorite,
  totalVisits,
  offer_type,
  currentlatLon,
  loading,
  setLoading,
  initial,
}: {
  initial?: any;
  item?: any;
  mapRef?: any;
  visits?: any;
  totalVisits?: any;
  coords: any;
  offer_type?: any;
  navigation?: any;
  onFavorite?: any;
  currentlatLon?: any;
  loading?: any;
  setLoading?: any;
}) => {
  const [marginT, setmarginT] = useState(-30);
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heigth, setHeight] = useState<any>(
    Platform.OS === 'ios' ? '25%' : '30%',
  );

  const mapPress = () => {
    if (marginT == -30) {
      setHeight('70%');
      setmarginT(-400);
    }
    // else {
    //   setHeight('30%');
    //   setmarginT(-30);
    // }
  };

  useEffect(() => {
    setAnimate(true);
    if (mapRef?.current) {
      coords?.map((marker: any) => {
        const region = {
          latitude: marker?.latlng?.lat,
          longitude: marker?.latlng?.lng,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        };
        mapRef?.current?.animateToRegion(region, 1000);
        setAnimate(false);
      });
    }
  }, [coords]);

  useEffect(() => {
    console.log('animate..', animate);
  }, [animate]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image_Header
          bap
          navigation={navigation}
          logo={item?.business_logo_url}
          source={item?.background_image_url}
          favourite={item?.isFavourite}
        />
      </View>

      <Pressable
        style={[styles.parent, {height: heigth, marginTop: marginT}]}
        onPress={mapPress}>
        <View style={styles.child}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              setHeight('30%');
              setmarginT(-30);
            }}>
            <Image
              source={back}
              resizeMode="contain"
              style={[styles.backImg, {tintColor: WHITE}]}
            />
          </TouchableOpacity>
          <Pressable style={styles.zoom}>
            <Image source={zoom} resizeMode="contain" style={styles.zoom} />
          </Pressable>
          {coords && currentlatLon && (
            <Maps
              initial={initial}
              coords={coords}
              marker={_marker}
              mapViewRef={mapRef}
              currentlatLon={currentlatLon}
            />
          )}
        </View>
      </Pressable>

      <View style={styles.parentBottom}>
        <View style={styles.childBottom}>
          {(offer_type == 'repeatVisit' || offer_type == 'initialOffer') && (
            <Svg_ProgressBar
              visits={visits}
              progress={progress}
              setProgress={setProgress}
              totalVisits={totalVisits}
            />
          )}

          {/* <View style={styles.curve}> */}
          <View style={[styles.resverse]}>
            <View style={styles.innerCurve}>
              {(offer_type == 'repeatVisit' ||
                offer_type == 'initialOffer') && (
                <Text bolder size={typography.standard} color={txt_gray} center>
                  {visits} of {totalVisits} Visits
                </Text>
              )}
              <View
                style={[
                  styles.scroll_view_wrapper,
                  {
                    marginTop:
                      offer_type === 'repeatVisit' ||
                      offer_type === 'initialOffer'
                        ? 15
                        : RF(50),
                  },
                ]}>
                <PointsCard
                  item={item}
                  back={
                    offer_type === 'repeatVisit' ||
                    offer_type === 'initialOffer'
                      ? false
                      : true
                  }
                  pointsValue={item?.offer_percent}
                />

                <View style={GST.flexEnd}>
                  <TouchableOpacity
                    style={styles.brand_details_badge}
                    onPress={() =>
                      navigate('BAP_Store_Detail', {
                        item: item,
                        type: item?.type,
                        onFavorite: onFavorite,
                      })
                    }>
                    <Text size={typography.subHeading} medium color={txt_gray}>
                      Store Details
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.view}>
                  <Text size={typography.h2} semiBold color={txt_gray}>
                    {offer_type === 'repeatVisit' ||
                    offer_type === 'initialOffer'
                      ? 'Visit '
                      : ' Spend at Least $'}
                    {item?.offerDetail?.minimum_amount
                      ? item?.offerDetail?.minimum_amount
                      : item?.offerDetail?.minimum_visit}
                    {item?.offerDetail?.minimum_visit && ' times'}
                  </Text>
                  <Text
                    regular
                    style={GST.mt16}
                    color={txt_gray}
                    size={typography.standard}>
                    {item?.offer_text}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* </View> */}
        </View>
      </View>
      {loading && <CustomLoader />}
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: RF(60),
    height: RF(50),
    position: 'absolute',
    top: 145,
    alignSelf: 'flex-end',
    zIndex: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImg: {
    width: RF(60),
    height: RF(20),
  },
  zoom: {
    width: RF(60),
    height: RF(20),
    position: 'absolute',
    top: 80,
    alignSelf: 'flex-end',
    zIndex: 20,
    right: 10,
  },
  curve: {
    height: RF(200),
    zIndex: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    marginTop: Platform.OS === 'ios' ? -35 : -30,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
  resverse: {
    // width: '100%',
    // height: RF(250),
    // zIndex: 20,
    // backgroundColor: 'red',
    // transform: [{scaleX: 0.3}, {rotate: '360deg'}],
    // marginTop: Platform.OS === 'ios' ? -90 : -75,
    // alignItems: 'center',
    width: '100%',
    height: RF(250),
    zIndex: 20,
    backgroundColor: WHITE,
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    // marginTop: Platform.OS === 'ios' ? -90 : -75,
    marginTop: Platform.OS === 'ios' ? -40 : -30,
  },
  innerCurve: {
    backgroundColor: WHITE,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
    // marginBottom: Platform.OS === 'ios' ? 25 : 20,
    marginTop: Platform.OS === 'ios' ? -25 : -25,
    justifyContent: 'center',
    width: '100%',
    height: RF(250),
  },
  view: {
    marginRight: RF(10),
    marginTop: RF(20),
  },
  scroll_view_wrapper: {
    flex: 1,
    marginTop: RF(15),
    marginHorizontal: RF(25),
  },
  brand_details_badge: {position: 'absolute', bottom: 15, right: 16},
  container: {
    height: '100%',
  },
  imageContainer: {
    height: '40%',
  },
  parentBottom: {
    flex: 1,
    zIndex: 10,
    marginTop: -100,
    overflow: 'hidden',
    backgroundColor: WHITE,
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  childBottom: {
    flex: 1,
    alignItems: 'center',
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  parent: {
    zIndex: 10,
    overflow: 'hidden',
    borderBottomEndRadius: RF(200),
    borderBottomStartRadius: RF(200),
    transform: [{scaleX: 2}, {rotate: '180deg'}],
  },
  child: {
    flex: 1,
    zIndex: 20,
    transform: [{scaleX: 0.5}, {rotate: '180deg'}],
  },
});

export default CurvedView;
