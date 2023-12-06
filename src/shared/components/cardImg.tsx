import Text from './atoms/text';
import React from 'react';
import {p_my_list} from '@assets';
import EmptyList from './emptyList';
import prettyFormat from 'pretty-format';
import {GREY, GST, RED, RF} from '@theme';
import CustomLoader from './customLoader';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';

const CardImage = ({
  data,
  liked,
  loading,
  onClickItem,
  onClickFavouriteCampaign,
}: {
  data?: any;
  liked?: any;
  loading?: boolean;
  onClickItem?: any;
  onClickFavouriteCampaign?: () => void;
}) => {
  const theme: any = useTheme();

  return (
    <>
      <FlatList
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          let url = item?.image_url
            ? item?.image_url
            : // : item?.category_image_url
              // ? item?.category_image_url
              'https://picsum.photos/200/300/?blur';
          return (
            <Pressable
              style={styles.container}
              onPress={() => onClickItem(item, index)}>
              <LinearGradient
                colors={[
                  theme.colors.CARD_GRADIENT_FIRST_COLOR,
                  theme.colors.CARD_GRADIENT_SECOND_COLOR,
                ]}
                style={styles.linearGradientContainer}>
                <View style={styles.imageView}>
                  <Image
                    resizeMode="contain"
                    source={{
                      uri: url,
                    }}
                    style={styles.image}
                  />
                </View>

                <View style={styles.mainView}>
                  <View style={GST.h70}>
                    <Text numberOfLines={2} style={styles.txt}>
                      {item?.name ? item?.name : item?.category_name}
                    </Text>
                    <Text style={styles.innerText} numberOfLines={2}>
                      {item?.address?.street_address
                        ? item?.address?.street_address
                        : item?.created_at}
                    </Text>
                  </View>

                  <View style={styles.innerView}>
                    <View style={styles.imgView}>
                      <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={p_my_list}
                      />
                      <Text>
                        {item?.campaign &&
                          item?.campaign?.offer_details?.plastk_points_value}
                      </Text>
                    </View>

                    <Pressable
                      onPress={() => onClickFavouriteCampaign(item, index)}>
                      <AntDesign
                        name={'heart'}
                        size={RF(20)}
                        color={item.isFavourite ? RED : GREY}
                      />
                    </Pressable>
                  </View>
                </View>
              </LinearGradient>
            </Pressable>
          );
        }}
        ListEmptyComponent={
          loading ? null : <EmptyList description={'No data found'} />
        }
        ListHeaderComponent={
          loading ? (
            <View style={GST.height50}>
              <CustomLoader />
            </View>
          ) : null
        }
      />
    </>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  image: {width: '100%', height: RF(100)},
  innerText: {marginBottom: RF(10), width: RF(100)},
  innerView: {
    height: '25%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainView: {
    marginBottom: 2,
    width: '100%',
    height: '50%',
  },
  imageView: {
    width: '100%',
    height: RF(110),
    marginBottom: RF(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(10),
  },
  imgView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: RF(20),
    height: RF(20),
    marginRight: RF(5),
  },
  txt: {width: RF(100), fontWeight: '700'},
  linearGradientContainer: {
    borderRadius: RF(16),
    height: RF(220),
    justifyContent: 'center',
    padding: RF(10),
    elevation: 5,
    // width: '70%',
  },
  container: {
    // flex: 1,
    width: '45%',
    height: '100%',
    marginTop: RF(10),
    paddingVertical: 10,
    marginHorizontal: RF(10),
    // elevation: 2,
  },
});
