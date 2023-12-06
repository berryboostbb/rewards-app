import React from 'react';
import Text from './atoms/text';
import {View, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {
  borderClr,
  borrowell_light_Blue,
  green,
  koho,
  mulish_bold,
  mulish_regular,
  RF,
  typography,
  WHITE,
} from '@theme';
import {useSelector} from 'react-redux';

const Reviews = ({
  data,
  bmpWhite,
  reviews,
  showReviews,
}: {
  data?: any;
  bmpWhite?: any;
  reviews?: any;
  showReviews?: any;
}) => {
  const {user} = useSelector((state: any) => state.root.user);

  return (
    <>
      <View style={styles.viewText}>
        {showReviews && (
          <View style={{marginRight: 40}}>
            <Text
              size={typography.subHeading}
              regular
              style={{marginLeft: -20}}>
              {reviews}
            </Text>
          </View>
        )}

        <View style={styles.ratingsContainer}>
          <AirbnbRating
            count={5}
            size={RF(14)}
            ratingContainerStyle={{
              width: 14,
              height: 14,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            starContainerStyle={{
              width: 14,
              height: 14,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            showRating={false}
            defaultRating={data}
            unSelectedColor={bmpWhite ? WHITE : borderClr}
            selectedColor={
              user?.user_type == 'Borrowell'
                ? borrowell_light_Blue
                : user?.user_type == 'KOHO'
                ? koho
                : green
            }
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(15),
  },
  imgView: {
    justifyContent: 'flex-start',
    marginRight: RF(10),
  },
  profileContainer: {
    marginTop: RF(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    fontFamily: mulish_bold,
    marginLeft: RF(5),
    fontSize: RF(10),
  },
  authorBio: {
    fontFamily: mulish_regular,
  },
  reviewTextContainer: {
    marginTop: RF(5),
  },
  reviewText: {
    fontFamily: mulish_regular,
  },
  ratingsContainer: {
    // justifyContent: 'center',
    // marginLeft: 5,
  },
});

export default Reviews;
