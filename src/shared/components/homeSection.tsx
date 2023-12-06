import {navigate} from '@services';
import {View} from 'react-native';
import SeeAll from './customSeeAll';
import List from './horizontalList';
import MultiFocusList from './multiFocusList';
import Card from './organisms/card';
import React from 'react';
import {favorite_sponsored, sponsored} from '@utils';
import {useSelector} from 'react-redux';
import MyContentLoader from './contentLoader';
import {RF} from '@theme';

const Home_Section = ({
  forme,
  nearMe,
  topPicks,
  onFavorite,
  fav_Offers,
  setFavorite,
  forMeLoading,
  brandsLoading,
  fav_MyProducts,
  onOpen_See_All,
  storesAndBrands,
  tabSelectedIndex,
  topPicksLoading,
  nearMeLoading,
  onFavorite_Toppicks,
  setFavorite_MyProducts,
  fav_TopPicks,
  onFavorite_Tab2,
}: {
  forme?: any;
  nearMe?: any;
  topPicks?: any;
  onFavorite?: any;
  fav_Offers?: any;
  setFavorite?: any;
  forMeLoading?: any;
  fav_MyProducts?: any;
  onOpen_See_All?: any;
  storesAndBrands?: any;
  tabSelectedIndex?: any;
  topPicksLoading?: any;
  brandsLoading?: any;
  nearMeLoading?: any;
  onFavorite_Toppicks?: any;
  setFavorite_MyProducts?: any;
  fav_TopPicks?: any;
  onFavorite_Tab2?: any;
}) => {
  const {forMe} = useSelector((state: any) => state.root.user);

  return (
    <>
      <SeeAll
        title={'Stores & Brands'}
        onPress={(item: any, index: any) =>
          navigate('Stores_SeeAll', {item: storesAndBrands})
        }
      />
      {brandsLoading ? (
        <View style={{height: 100, paddingTop: 10, marginLeft: -30}}>
          <MyContentLoader brands={brandsLoading} />
        </View>
      ) : (
        <>
          <List
            data={storesAndBrands}
            onPress={(item: any, index: any) =>
              navigate('Stores_SeeAll', {item: item})
            }
          />
        </>
      )}

      <SeeAll
        title={tabSelectedIndex === 0 ? 'Near Me' : 'My Offers'}
        onPress={() =>
          onOpen_See_All('nearMe', tabSelectedIndex === 0 ? nearMe : fav_Offers)
        }
      />
      {nearMeLoading ? (
        <View style={{height: 100, paddingTop: 10, marginLeft: -30}}>
          <MyContentLoader nearme={nearMeLoading} />
        </View>
      ) : (
        <>
          <Card
            onFavorite={tabSelectedIndex === 0 ? onFavorite : onFavorite_Tab2}
            response={tabSelectedIndex === 0 ? nearMe : fav_Offers}
          />
        </>
      )}

      <SeeAll
        title={tabSelectedIndex === 0 ? 'For Me' : 'My Products'}
        onPress={() =>
          onOpen_See_All(
            'forMe',
            tabSelectedIndex === 0 ? forme : fav_MyProducts,
          )
        }
      />

      {forMeLoading ? (
        <View
          style={{
            height: RF(160),
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          <MyContentLoader forMe={forMeLoading} />
        </View>
      ) : (
        <>
          <Card
            onFavorite={tabSelectedIndex === 0 ? onFavorite : onFavorite_Tab2}
            response={tabSelectedIndex === 0 ? forme : fav_MyProducts}
          />
        </>
      )}

      <SeeAll
        title={'Top Picks'}
        onPress={() => onOpen_See_All('topPicks', topPicks)}
      />

      {topPicksLoading ? (
        <View
          style={{
            height: RF(230),
            paddingLeft: 20,
            paddingBottom: 10,
          }}>
          <MyContentLoader topPicks={topPicksLoading} />
        </View>
      ) : (
        <>
          <>
            <Card
              response={tabSelectedIndex === 0 ? topPicks : fav_TopPicks}
              onFavorite={onFavorite_Toppicks}
            />
          </>
        </>
      )}

      <SeeAll title={'Sponsored'} />
      <View>
        <MultiFocusList
          data={tabSelectedIndex === 0 ? sponsored : favorite_sponsored}
        />
      </View>
    </>
  );
};

export default Home_Section;

// var slides: any = [];
// const entriesSplitter = () => {
//   let size = 2;
//   while (sponsored.length > 0) {
//     slides.push(sponsored.splice(0, size));
//   }
//   // return slides;
// };

// const onOpenRewards = () => {
//   navigate('Earn_Rewards');
// };
// const onFeaturedClick = (item: any, index: any) => {
//   setcategoryLoading(true);
//   getCardData();
//   setSearchText(undefined);
//   setSubCategoryId(item._id);
//   setSelectedFeatured(index);
//   setSelectedAllFeatured(false);
// };

// const onPressAllFeatured = () => {
//   setSelectedFeatured(-1);
//   setSelectedAllFeatured(true);
//   getCardData();
//   // getFeaturedList();
// };

// const onOpenCampaign = (item: any, index: any) => {
//   navigate('PromotionDetail', {item: item});
// };

// const handleRefresh = () => {
//   setisRefreshing(true);
//   getSummary();
//   getCardData();
// };

// const getBackgroundLocation = () => {
// return () => {
//   onLocation.remove();
//   onMotionChange.remove();
//   onActivityChange.remove();
//   onProviderChange.remove();
// };
// };

// useEffect(() => {
//   setTimeout(() => {
//     if (latLon) {
//       increment();
//     }
//   }, 15000);
// }, [latLon]);

// const increment = () => {
//   let meters: any = 2;
//   let coef: any = meters / 111320.0;
//   let new_lat: any = latLon.lat + coef;
//   let new_long: any = latLon.lon + coef / Math.cos(latLon.lat * 0.01745);
//   setlatLon({lat: new_lat, lon: new_long});
// };
// useEffect(() => {
//   if (notification_counter <= 3) {
//     console.log('counter...', notification_counter);
//     setInterval(() => {
//       getlatLon();
//     }, 15000);
//   }
// }, [notification_counter]);
