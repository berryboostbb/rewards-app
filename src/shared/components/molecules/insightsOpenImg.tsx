import * as React from 'react';
import {points, p_points, r_points} from '@assets';
import Text from '../atoms/text';
import {BLACK, RF, typography, WHITE} from '@theme';
import PointsCard from '../atoms/pointsCard';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import moment from 'moment';
import {firstCapitalize} from '@utils';

const Insights_Open_Image = ({
  item,
  selected,
}: {
  item?: any;
  selected?: any;
}) => {
  return (
    <>
      {selected ? (
        <ImageBackground
          source={{uri: item?.image_url}}
          imageStyle={styles.imageBG}
          resizeMode="contain">
          <View style={styles.outerView}>
            <View style={styles.selectedText}>
              <Text
                numberOfLines={2}
                color={item?.type == 'bmp' ? BLACK : WHITE}
                semiBold
                style={{width: RF(140)}}
                size={typography.subHeading}>
                {firstCapitalize(item?.name)}
              </Text>
              <Text
                style={{marginVertical: 5}}
                color={item?.type == 'bmp' ? BLACK : WHITE}
                size={typography.standard}>
                {/* {item?.created_at} */}
                {moment(item?.created_at).format('MMMM D, YYYY')}
              </Text>

              <Text
                color={item?.type == 'bmp' ? BLACK : WHITE}
                semiBold
                size={typography.subHeading}>
                Total
              </Text>
              <Text
                style={{marginVertical: 3}}
                color={item?.type == 'bmp' ? BLACK : WHITE}
                size={typography.subHeading}>
                ${item?.dollar_value}
              </Text>
            </View>

            <View style={styles.selected_points_View}>
              <PointsCard
                mini
                backgroundColor={WHITE}
                item={item}
                pointsValue={item?.points_value}
              />
            </View>
          </View>
        </ImageBackground>
      ) : (
        <>
          {/* <Text
            color={item?.status == 'completed' ? GREEN : RED}
            semiBold
            size={typography.subHeading}
            style={{alignSelf: 'flex-end', marginTop: -10, marginBottom: 10}}>
            {item?.status}
          </Text> */}
          <View style={styles.innerView}>
            <Text
              semiBold
              numberOfLines={1}
              size={typography.subHeading}
              style={{width: RF(170)}}>
              {firstCapitalize(item?.name)}
            </Text>

            <View style={styles.pointsView}>
              <Image
                source={
                  item?.status == 'completed'
                    ? points
                    : item?.status == 'rejected'
                    ? r_points
                    : item?.status == 'pending' && p_points
                }
                style={[styles.points]}
              />
              <Text size={typography.subHeading} semiBold>
                {item?.points_value}
              </Text>
            </View>
          </View>

          <View style={styles.dateView}>
            <Text size={typography.standard}>
              {moment(item?.created_at).format('MMMM D, YYYY')}
            </Text>
            <Text size={typography.standard}>${item?.dollar_value}</Text>
          </View>
        </>
      )}
    </>
  );
};

export default Insights_Open_Image;

const styles = StyleSheet.create({
  outerView: {flexDirection: 'row', justifyContent: 'space-between'},
  points: {width: RF(18), height: RF(18), marginRight: RF(5)},
  selectedText: {marginLeft: RF(30), marginVertical: RF(30)},
  imageBG: {
    width: '100%',
    height: RF(150),
  },
  selected_points_View: {
    right: 30,
    bottom: 30,
    justifyContent: 'flex-end',
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RF(5),
  },
  pointsView: {flexDirection: 'row'},
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
