import {RF} from '@theme';
import {isIOS} from '@utils';
import Campaign_Card from '../atoms/campaign';
import React, {useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {format as prettyFormat} from 'pretty-format';
import {update_Impressions, update_Impressions_BMP} from '@services';
import {useSelector} from 'react-redux';

const Card = ({
  response,
  sponsored,
  onFavorite,
}: {
  response?: any;
  sponsored?: any;
  onFavorite?: any;
}) => {
  const myTheme: any = useTheme();
  const flatListRef: any = useRef();
  const styles = useStyles(myTheme.colors);
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.82);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
  const [activeSlide, setActiveSlide] = useState(isIOS ? 0 : 0);
  const {user} = useSelector((state: any) => state.root.user);

  const ITEM_WIDTH_S = RF(160);
  const ITEM_HEIGHT_S = Math.round((ITEM_WIDTH * 2) / 2);
  const SPONSORED_ITEM_WIDTH = Dimensions.get('window').width;

  const onSnaptoItem = (index: any) => {
    response.map((i: any, ind: any) => {
      if (ind == index) {
        if (i?.type == 'bap') {
          updateImpressions_BAP(i);
        } else {
          updateImpressions_BMP(i);
        }
      }
    });
  };
  const updateImpressions_BAP = (data?: any) => {
    let params = {
      data: [
        {
          store_id: data?.store_id,
          promotion_id: data?.campaign_id,
          user_id: user?._id,
        },
      ],
    };
    update_Impressions(params)
      .then((res: any) => {})
      .catch((err: any) => {})
      .finally(() => {});
  };
  const updateImpressions_BMP = (data?: any) => {
    let params = {
      data: [
        {
          promotion_id: data?.campaign_id,
          user_id: user?._id,
        },
      ],
    };
    update_Impressions_BMP(params)
      .then((res: any) => {})
      .catch((err: any) => {})
      .finally(() => {});
  };

  return (
    <View style={styles.view}>
      <Carousel
        data={response}
        ref={flatListRef}
        renderItem={({item, index}: any) => {
          return <Campaign_Card item={item} onFavorite={onFavorite} />;
        }}
        enableSnap
        loop={true}
        layout={'default'}
        loopClonesPerSide={2}
        itemWidth={sponsored ? ITEM_WIDTH_S : ITEM_WIDTH}
        sliderHeight={sponsored ? ITEM_HEIGHT_S : ITEM_HEIGHT}
        sliderWidth={sponsored ? SPONSORED_ITEM_WIDTH : SLIDER_WIDTH}
        onSnapToItem={index => {
          setActiveSlide(index);
          onSnaptoItem(index);
        }}
        hasParallaxImages={true}
        inactiveSlideOpacity={1}
        contentContainerCustomStyle={[styles.content]}
      />
      {/* {sponsored ? null : (
        <Pagination
          dotsLength={3}
          inactiveDotScale={1}
          dotStyle={[
            styles.dot,
            {
              backgroundColor: top_Picks ? '#19383A' : '#FBFBFB',
            },
          ]}
          inactiveDotOpacity={0.7}
          animatedDuration={2000}
          activeDotIndex={activeSlide}
          containerStyle={styles.container_dots}
          inactiveDotStyle={[
            styles.inaciveDot,
            {
              backgroundColor: top_Picks ? dim_gray : '#FFFFFF',
            },
          ]}
        />
      )} */}
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    content: {},
    view: {},
  });

export default Card;
