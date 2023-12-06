import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {getIsDarkModeEnabled, openLink, showToast} from '@utils';
import {CustomLoader, Header, Reviews, Text, Wrapper} from '@components';
import {useStyles} from './styles';
import {useDispatch} from 'react-redux';
import {getSingleCampaign} from '@services';
import {format as prettyFormat} from 'pretty-format';
import {ligh_green, mulish_regular, RF} from '@theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PromotionDetail = ({route, navigation}: any) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [data, setData] = useState<any>();
  const [reviews, setReviews] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let params = {
      id: item?._id,
      campaign_id: item?.campaign?._id,
    };
    getSingleCampaign(params)
      .then((res: any) => {
        setData(res?.data?.details_from_google);
        setReviews(res?.data?.details_from_google?.reviews);
      })
      .catch((err: any) => {
        showToast('Error', err?.response?.data, false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const closeModal = () => {
    setToggleMenu(!toggleMenu);
  };

  let url = item?.image_url
    ? item?.image_url
    : // : item?.category_image_url
      // ? item?.category_image_url
      'https://picsum.photos/200/300/?blur';

  return (
    <Wrapper>
      <Header
        title={'Promotion Detail'}
        showBackButton
        navigation={navigation}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <Image source={{uri: url}} style={styles.img} resizeMode="contain" />
        </View>

        <View style={styles.ratingExternalContainer}>
          <Text size={12}>{data?.name}</Text>

          <View style={{marginLeft: '2%', justifyContent: 'center'}}>
            {/* <StarRating
            disabled={false}
            maxStars={5}
            // rating={response?.details_from_google?.rating}
            rating={'3'}
            starSize={'2.4%'}
            fullStarColor={brightyellow}
            // selectedStar={(rating) => this.onStarRatingPress(rating)}
          /> */}
          </View>

          <View style={styles.section}>
            <Section
              styles={styles}
              title={'Direction'}
              icon={'assistant-direction'}
              url={
                'http://maps.google.com/maps?daddr=' +
                item?.address?.latlng.lat +
                ',' +
                item?.address?.latlng.lng
              }
            />
            <Section
              icon={'call'}
              title={'CALL'}
              styles={styles}
              url={`tel:${data?.formatted_phone_number}`}
            />
            <Section
              icon={'link'}
              styles={styles}
              title={'WEBSITE'}
              url={data?.website}
            />
            <Section
              title={'MENU'}
              styles={styles}
              url={data?.website}
              toggleMenu={toggleMenu}
              icon={'restaurant-menu'}
              setToggleMenu={setToggleMenu}
            />
          </View>
        </View>

        <View style={{marginTop: '1%'}}>
          {/* <SpecialOffer
            offerType={place.campaign.offer_type}
            item={item}
          /> */}
        </View>

        {/* {response?.details_from_google?.opening_hours &&} */}
        {/* <AccordionView
          days={DATA}
          openNow={
            response?.details_from_google?.opening_hours?.open_now
          }
          days={
            response?.details_from_google?.opening_hours?.weekday_text
          }
        /> */}

        {data?.formatted_address && (
          <View style={[styles.addressContainer]}>
            <AntDesign
              name="pushpino"
              color={ligh_green}
              size={RF(18)}
              style={{marginRight: RF(5)}}
            />
            <Text>{data?.formatted_address}</Text>
          </View>
        )}

        {data?.international_phone_number && (
          <TouchableOpacity
            style={styles.addressContainer}
            onPress={() => openLink('tel:' + data?.international_phone_number)}>
            <AntDesign
              name="phone"
              size={RF(18)}
              color={ligh_green}
              style={{marginRight: RF(5)}}
            />
            <Text>{data?.international_phone_number}</Text>
          </TouchableOpacity>
        )}

        {data?.website && (
          <TouchableOpacity
            style={styles.addressContainer}
            onPress={() => openLink(data?.website.trim())}>
            <AntDesign
              name="link"
              color={ligh_green}
              size={RF(18)}
              style={{marginRight: RF(5)}}
            />
            <Text>
              {
                data?.website.match(
                  /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/gim,
                )[0]
              }
            </Text>
          </TouchableOpacity>
        )}

        {data?.reviews !== undefined && (
          <View style={styles.reviewView}>
            <Text size={16} style={styles.summary}>
              Review Summary
            </Text>
            <FlatList
              data={reviews}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return <Reviews data={item} />;
              }}
            />
          </View>
        )}
      </ScrollView>

      {/* {toggleMenu && (
        <MenuModal
          closeModal={closeModal}
          type={props.route.params.place?.menu?.menu_type}
          url={props.route.params.place?.menu?.menu_url}
        />
      )} */}

      {isLoading && <CustomLoader />}
    </Wrapper>
  );
};

const Section = ({
  styles,
  title,
  icon,
  url,
  toggleMenu,
  setToggleMenu,
}: {
  styles?: any;
  title?: any;
  icon?: any;
  url?: any;
  toggleMenu?: any;
  setToggleMenu?: any;
}) => {
  return (
    <View
      style={[
        styles.options,
        {
          borderBottomColor: getIsDarkModeEnabled() ? 'white' : '#B4B4B4',
          borderTopColor: getIsDarkModeEnabled() ? 'white' : '#B4B4B4',
        },
      ]}>
      <TouchableOpacity
        // disabled={
        //   title === 'MENU' && props.route.params.place.menu ? false : true
        // }
        style={[styles.optionsContainer, {}]}
        onPress={() =>
          title === 'MENU' ? setToggleMenu(!toggleMenu) : openLink(url)
        }>
        <View style={styles.optionsIcon}>
          <MaterialIcons name={icon} color={ligh_green} size={RF(18)} />
        </View>
        <Text
          style={{
            color: ligh_green,
            fontSize: 11,
            fontFamily: mulish_regular,
            marginTop: '10%',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromotionDetail;
