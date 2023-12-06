import {GST, RF} from '@theme';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  Header,
  Wrapper,
  SwitchCard,
  DropDown,
  CustomLoader,
} from '@components';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchPromotions_Notification,
  fetch_Notifications,
  update_notifications,
} from '@services';
import {setNotifications, setNotification_counter} from '@redux';

const Notifications = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const [flag, setFlag] = useState(true);
  const [radiusUpdateLoading, setRadiusUpdateLoading] = useState(false);
  const {stores, notification_counter, selectedRadius, latLon, notifications} =
    useSelector((state: any) => state.root.user);

  useEffect(() => {
    getAll_Notifications();
  }, []);

  useEffect(() => {
    updateNotification();
  }, [notifications]);

  const onToggle = (type: any) => {
    let obj = {...notifications};
    Object.keys(obj).map(key => {
      if (type == key) {
        obj[key] = !obj[key];
      }
    });
    dispatch(setNotifications(obj));
  };

  const getAll_Notifications = () => {
    fetch_Notifications()
      .then((res: any) => {
        console.log('noti...', res.data);
        dispatch(setNotifications(res?.data?.data));
      })
      .catch((err: any) => {
        console.log('notification api catch...', err.message);
      })
      .finally(() => {});
  };

  const updateNotification = () => {
    let params = {
      push_notification: JSON.stringify(notifications.push_notification),
      email_notification: JSON.stringify(notifications.email_notification),
      new_offer: JSON.stringify(notifications.new_offer),
      points_received: JSON.stringify(notifications.points_received),
    };
    update_notifications(params)
      .then((res: any) => {})
      .catch((err: any) => {
        console.log('notification update catch...', err.message);
      })
      .finally(() => {});
  };
  function getDistanceFromlatLonInKm(
    lat10: any,
    lon10: any,
    lat20: any,
    lon20: any,
  ) {
    let lat1 = Number(lat10);
    let lat2 = Number(lat20);
    let lon1 = Number(lon10);
    let lon2 = Number(lon20);

    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; //in km
    return d * 1000; //in meters
  }
  function deg2rad(deg: any) {
    return deg * (Math.PI / 180);
  }
  const handleSubmit = () => {
    setRadiusUpdateLoading(true);
    dispatch(setNotification_counter(0));
    getLatLon();
  };
  const getLatLon = async () => {
    if (latLon) {
      let temp: any = [];
      stores?.map((i: any) => {
        let res: any = getDistanceFromlatLonInKm(
          Number(i.lat),
          Number(i.lng),
          latLon?.coords?.latitude,
          latLon?.coords?.longitude,
        );
        if (res <= selectedRadius) {
          temp.push(i._id);
        }
      });
      if (notification_counter < 3) {
        getPromotion_Notification(temp);
      } else if (notification_counter == 3) {
        setRadiusUpdateLoading(false);
      }
    }
  };
  const getPromotion_Notification = (id: any) => {
    // setRadiusUpdateLoading(true);
    let params = {
      storeId: id,
    };
    setFlag(false);
    fetchPromotions_Notification(params)
      .then((res: any) => {
        console.log('noiication response....', res.data);
        dispatch(setNotification_counter(res?.data?.counter));
      })
      .catch((err: any) => {
        console.log('catch...', err.message);
      })
      .finally(() => {
        setRadiusUpdateLoading(false);
        setFlag(true);
      });
  };

  return (
    <Wrapper isMarginHorizontal>
      <Header
        profile
        showBackButton
        title={'Notifications'}
        navigation={navigation}
        style={styles.header}
      />

      <View style={GST.mt20}>
        <SwitchCard
          title={'Push Notification'}
          onToggle={() => onToggle('push_notification')}
          isEnabled={notifications.push_notification}
        />
      </View>

      <SwitchCard
        title={'Email Notification'}
        onToggle={() => onToggle('email_notification')}
        isEnabled={notifications.email_notification}
      />

      <SwitchCard
        title={'New Offer'}
        onToggle={() => onToggle('new_offer')}
        isEnabled={notifications.new_offer}
      />

      <SwitchCard
        title={'Points Received'}
        onToggle={() => onToggle('points_received')}
        isEnabled={notifications.points_received}
      />

      <View style={{flexDirection: 'row', marginTop: RF(20)}}>
        <DropDown />
        {/* <Progress_radius
            handleSubmit={handleSubmit}
            selectedIndex={selectedRadius}
            loading={isRefreshing}
          /> */}
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.btn}
          // disabled={loading ? true : false}
        >
          <Text>Update Radius</Text>
        </TouchableOpacity>
      </View>
      {/* {radiusUpdateLoading && <CustomLoader />} */}
    </Wrapper>
  );
};

export default Notifications;
