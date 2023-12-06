import styles from './styles';
import {fetchForMe_Detail, navigate} from '@services';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {CustomLoader, BMP_Curve, PointsCard, Text} from '@components';
import {format as prettyFormat} from 'pretty-format';
import {showToast} from '@utils';
import {
  GST,
  RF,
  txt_black,
  txt_gray,
  txt_greenish,
  typography,
  WHITE,
} from '@theme';
import moment from 'moment';

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

const BMP_Promotion = ({route, navigation}: Props) => {
  const {type, item} = route?.params;
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [favourite_BAP, setFavourite_BAP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forMe_Detail, setForMe_Detail] = useState<any>([]);
  const [forMe_BrandDetail, setForMe_BrandDetail] = useState<any>();

  useEffect(() => {
    getForMe_Detail();
  }, []);

  const getForMe_Detail = () => {
    setLoading(true);
    let params = {
      campaign_id: item?.campaign_id,
    };
    fetchForMe_Detail(params)
      .then((res: any) => {
        setForMe_Detail(res?.data?.data);
        setForMe_BrandDetail(res?.data?.data);
      })
      .catch((err: any) => {
        // showToast('Error', err?.response?.data, false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <CustomLoader />
      ) : (
        // <Wrapper isTransparent>
        <>
          <BMP_Curve
            navigation={navigation}
            favourite={forMe_Detail?.isFavourite}
            logo={forMe_Detail?.brand_name}
            source={forMe_Detail?.image_url}
          />
          <View style={{backgroundColor: '#F9FAFB', flex: 1}}>
            <ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{flex: 1}}
            >
              <View style={styles.scroll_view_wrapper}>
                <PointsCard
                  item={item}
                  dark
                  textColor={WHITE}
                  pointsValue={forMe_Detail?.plastk_points_value}
                />

                <TouchableOpacity
                  onPress={() => {
                    console.log('ewioijioerj');

                    navigate('BMP_Store_Detail', {
                      type: 'bmp',
                      item: forMe_BrandDetail,
                    });
                  }}
                  style={GST.mR16}>
                  <Text
                    size={typography.subHeading}
                    style={styles.brand_details_badge}
                    color={txt_greenish}>
                    Brand Details
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.imageView}>
                <Text
                  size={typography.h2}
                  style={{fontWeight: 'bold'}}
                  color={txt_black}>
                  {forMe_Detail?.product_name}
                </Text>
                <View style={{}}>
                  <Text size={typography.h1} color={txt_black}>
                    {forMe_Detail.title}
                  </Text>
                  <Text
                    style={{marginTop: '8%'}}
                    size={typography.standard}
                    color={txt_black}
                    bold>
                    Offer ends{' '}
                    {moment(forMe_Detail?.end_date).format('MMMM D, YYYY')}.
                  </Text>
                  <Text size={typography.standard} color={txt_gray}>
                    Terms & Conditions Apply.
                  </Text>
                </View>
              </View>

              <View style={[styles.imageView, {marginTop: '5%'}]}>
                <Text bold size={typography.h3}>
                  Offer terms{' '}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: RF(20),
                  }}>
                  <Text bold size={typography.standard}>
                    Start Date:{' '}
                  </Text>
                  <Text size={typography.standard}>
                    {moment(forMe_Detail?.start_date).format('MMMM D, YYYY')}.
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: RF(20),
                  }}>
                  <Text bold size={typography.standard}>
                    End Date:{' '}
                  </Text>
                  <Text size={typography.standard}>
                    {moment(forMe_Detail?.end_date).format('MMMM D, YYYY')}.
                  </Text>
                </View>

                <Text size={typography.standard} color={txt_black} regular>
                  {forMe_Detail?.description}
                </Text>
              </View>
              {forMe_Detail?.q_products &&
                forMe_Detail?.q_products?.length > 0 && (
                  <View style={[styles.imageView, {marginTop: '5%'}]}>
                    <Text bold size={typography.h3}>
                      Qualifying Products{' '}
                    </Text>
                    {forMe_Detail?.q_products?.map(
                      (text: string, index: number) => {
                        return (
                          <Text
                            color={txt_greenish}
                            style={{marginTop: index === 0 ? '3%' : '0%'}}
                            size={typography.subHeading}>
                            {text}
                          </Text>
                        );
                      },
                    )}
                  </View>
                )}
              {forMe_Detail?.offer_avail_at &&
                forMe_Detail?.offer_avail_at?.length > 0 && (
                  <View style={[styles.imageView, {marginTop: '5%'}]}>
                    <Text bold size={typography.h3}>
                      Offer Available at
                    </Text>
                    {forMe_Detail?.offer_avail_at?.map(
                      (text: string, index: number) => {
                        return (
                          <Text
                            color={txt_greenish}
                            style={{marginTop: index === 0 ? '3%' : '0%'}}
                            size={typography.subHeading}>
                            {text}
                          </Text>
                        );
                      },
                    )}
                  </View>
                )}
              <View style={{marginBottom: 150}} />
            </ScrollView>
          </View>
        </>
        // </Wrapper>
      )}
    </>
  );
};

export default BMP_Promotion;
{
  /* <View style={styles.parentBottom}>
<View style={styles.childBottom}>
  
</View>
</View> */
}
