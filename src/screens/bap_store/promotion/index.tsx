import {showToast} from '@utils';
import {fetchNearMe_Detail, navigate} from '@services';
import React, {useState, useEffect, useRef} from 'react';
import {RouteProp} from '@react-navigation/native';
import {format as prettyFormat} from 'pretty-format';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Wrapper, CurvedView, CustomLoader} from '@components';
import {setBAP_Detail} from '@redux';
import {useDispatch, useSelector} from 'react-redux';
import {_marker} from '@assets';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      type?: any;
      data?: any;
      item?: any;
    };
  }>;
}

const BAP_Promotion = ({route, navigation}: Props) => {
  const {type, item} = route?.params;
  const dispatch: any = useDispatch();
  const [coords, setCoords] = useState<any>();
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [visits, setVisits] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const [offer_type, setOffer_type] = useState<any>('');
  const [totalVisits, setTotalVisits] = useState<any>(0);
  const [favourite_BAP, setFavourite_BAP] = useState(false);
  const [favourite_bap, setFavourite_Bap] = useState(false);
  const {user, bap_detail} = useSelector((state: any) => state.root.user);
  const [currentlatLon, setCurrentlatLon] = useState<any>();
  const mapRef: any = useRef();
  const [animate, setAnimate] = useState<any>();

  const onClick = (type: any) => {
    if (type == 'website') {
      setColor1(!color1);
      setColor2(false);
      setColor3(false);
    } else if (type == 'directions') {
      setColor2(!color2);
      setColor1(false);
      setColor3(false);
    } else if (type == 'call') {
      setColor3(!color3);
      setColor1(false);
      setColor2(false);
    }
  };
  useEffect(() => {
    getCurrentLocation();
    getNearMe_Detail();
  }, []);
  useEffect(() => {
    animate_To_Region(coords);
  }, [coords]);

  const getNearMe_Detail = async () => {
    setLoading(true);
    let params = {
      storeId: item?.store_id,
      campaignId: item?.campaign_id,
    };
    fetchNearMe_Detail(params)
      .then((res: any) => {
        let arr: any = [];
        arr.push(res?.data?.data?.store_detail?.address);
        setCoords(arr);
        animate_To_Region(arr);
        setOffer_type(res?.data?.data?.promotion_detail?.offer_type);
        setFavourite_BAP(res?.data?.data?.promotion_detail?.isFavourite);
        setVisits(res?.data?.data?.promotion_detail?.currentVisit);
        setTotalVisits(res?.data?.data?.promotion_detail?.totalVisits);
        dispatch(setBAP_Detail(res?.data?.data?.promotion_detail));
      })
      .catch((err: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const animate_To_Region = (arr: any) => {
    arr?.map((marker: any) => {
      const region = {
        latitude: marker?.latlng?.lat,
        longitude: marker?.latlng?.lng,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      };
      setAnimate(region);
      mapRef?.current?.animateToRegion(region, 1000);
    });
  };

  const favorite = (storeId: any, promotionId: any) => {
    let params = {
      store_id: storeId,
      campaign_id: promotionId,
    };
    favorite_promotion(params)
      .then((res: any) => {
        setFavourite_Bap(!favourite_bap);
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  const onFavorite = (storeId: any, promotionId: any, title?: any) => {
    let cloneArray: any = [];
    cloneArray = bap_detail.map((a: any) => ({...a}));
    cloneArray.map((item: any, index: any) => {
      if (promotionId === item.campaign_id) {
        cloneArray[index].isFavourite = !cloneArray[index].isFavourite;
      }
    });
    dispatch(setBAP_Detail(cloneArray));
    favorite(storeId, promotionId);
  };
  const getCurrentLocationApi = () => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        // let arr = [];
        // arr.push(longitude, latitude);
        let obj = {lat: latitude, lon: longitude};
        setCurrentlatLon(obj);
      },
      err => console.log(err),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const getCurrentLocation = async () => {
    if (Platform.OS === 'ios') {
      let permiss = await Geolocation.requestAuthorization('whenInUse');
      if (permiss == 'granted') {
        getCurrentLocationApi();
      } else {
        showToast('Failed!', 'Location not Enabled', false);
      }
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Device current location permission',
            message: 'Allow app to get your current location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocationApi();
        } else {
          showToast('Failed!', 'Location not Enabled', false);
        }
      } catch (err) {
        console.warn('eroorrrrr', err);
      }
    }
  };

  return (
    <Wrapper isTransparent>
      {coords && currentlatLon && !loading && (
        <CurvedView
          initial={animate}
          mapRef={mapRef}
          coords={coords}
          visits={visits}
          item={bap_detail}
          onFavorite={onFavorite}
          navigation={navigation}
          totalVisits={totalVisits}
          offer_type={offer_type}
          currentlatLon={currentlatLon}
        />
      )}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default BAP_Promotion;

// if (res.data.data.promotion_detail.offerDetail) {
//   if (
//     res.data.data.promotion_detail.offerDetail.hasOwnProperty(
//       'initial_offer',
//     )
//   ) {
//     Object.keys(
//       res?.data?.data?.promotion_detail?.offerDetail?.initial_offer,
//     ).forEach(function (key, index) {
//       setVisits(key);
//       setTotalVisits(
//         res?.data?.data?.promotion_detail?.offerDetail?.initial_offer[
//           key
//         ],
//       );
//     });
//   }
// }
