import {View, FlatList, Pressable, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Header,
  Wrapper,
  Insights_Open_Image,
  Text,
  CustomButton,
} from '@components';
import styles from './styles';
import {RF, typography, txt_gray, light_grey} from '@theme';
import {qr, showToast} from '@utils';
import {points} from '@assets';
import {RouteProp, useTheme} from '@react-navigation/native';
import {promotion_Points} from '@services';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const ScanResult = ({route, navigation}: Props) => {
  const theme: any = useTheme();
  const {data} = route.params;
  const [error, setError] = useState<any>();
  const [isRefreshing, setisRefreshing] = useState(false);

  useEffect(() => {
    fetch_Data();
  }, []);

  const fetch_Data = () => {
    promotion_Points(data)
      .then((res: any) => {
        // setNearMe(res?.data?.items);
      })
      .catch((err: any) => {
        // showToast('Error', err, false);
      })
      .finally(() => {
        setisRefreshing(false);
      });
  };

  return (
    <Wrapper isMarginHorizontal>
      <Header
        profile
        showBackButton
        title={'Scan QR'}
        style={styles.header}
        navigation={navigation}
      />

      {error ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text semiBold size={typography.h1}>
            Something Went Wrong
          </Text>
          <Text
            size={typography.standard}
            regular
            style={{width: '70%'}}
            center>
            We were not able to retrieve the information from your receipt
          </Text>
          <CustomButton
            text={'Retry'}
            bgClr={light_grey}
            textStyle={{color: txt_gray}}
            btnStyle={{position: 'absolute', bottom: 100, elevation: 0.5}}
          />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text size={typography.h3}>Store Name</Text>
          <Text size={typography.h2} semiBold style={styles.txt}>
            Starbucks
          </Text>

          <Text size={typography.h3}>Transaction Date</Text>
          <Text semiBold size={typography.h2} style={styles.txt}>
            January 26,2023
          </Text>

          <Text
            size={typography.h3}
            style={{
              marginTop: RF(20),
              marginBottom: RF(10),
              marginLeft: RF(20),
            }}>
            Purchased Products
          </Text>

          <FlatList
            data={qr}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Pressable key={index} style={styles.mainView}>
                <Insights_Open_Image item={item} />
              </Pressable>
            )}
          />
          <View style={styles.totalView}>
            <Text semiBold size={typography.h2}>
              Total
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={points} style={styles.points} />
              <Text semiBold size={typography.h2}>
                1,750
              </Text>
            </View>
          </View>

          <CustomButton text={'Okay'} />
          <View style={{marginBottom: 100}} />
        </ScrollView>
      )}
    </Wrapper>
  );
};

export default ScanResult;
