import styles from './styles';
import {FlatList, Pressable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GST, parrotGreen, WHITE, txt_black, dusk_Gray, dull_gray} from '@theme';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton, CustomLoader, Header, Text, Wrapper} from '@components';
import Dots from 'react-native-vector-icons/Entypo';
import {fetchCard_List, navigate, remove_Card} from '@services';
import {format as prettyFormat} from 'pretty-format';
import {showToast} from '@utils';
import {setCard_Added} from '@redux';

const MyCard = ({navigation}: any) => {
  const dispatch: any = useDispatch();
  const [data, setData] = useState([]);
  const [cardOpen, setCard_Open] = useState<any>(-1);
  const [cardRemove, setCard_remove] = useState<any>(-1);
  const [loading, setLoading] = useState<any>(false);
  const {add_A_Card, user, card_Added} = useSelector(
    (state: any) => state.root.user,
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getList();
    });
    return () => {
      unsubscribe;
    };
  }, [navigation]);
  const Add_Another_Card = () => {
    navigate('Add_Card');
  };
  const getList = () => {
    setLoading(true);
    fetchCard_List()
      .then((res: any) => {
        setData(res?.data?.data);
      })
      .catch((err: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const onPress_Add_A_Card = () => {
    navigate('Add_Card');
  };
  const options = (item: any, index: any) => {
    setCard_remove(index);
  };
  const onDelete = (item: any) => {
    setLoading(true);
    let params = {
      card_id: item?._id,
    };
    remove_Card(params)
      .then((res: any) => {
        if (res?.data?.status === true) {
          showToast('Success', res?.data?.message, true);
          setCard_remove(-1);
          getList();
          if (data?.length == 1) {
            dispatch(setCard_Added(false));
          }
        } else {
          showToast('Error', res?.data?.message, false);
        }
      })
      .catch((err: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Wrapper isMarginHorizontal>
      <Header
        profile
        showBackButton
        title={user?.card_added === false ? 'Add Card' : 'My Cards'}
        navigation={navigation}
        style={styles.header}
      />
      <View style={styles.list}>
        <FlatList
          data={data}
          style={GST.flex}
          ListEmptyComponent={() => {
            return (
              <View style={styles.view}>
                <CustomButton
                  text={'Add a card'}
                  bgClr={parrotGreen}
                  textStyle={styles.txt}
                  onPress={onPress_Add_A_Card}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}: any) => {
            return (
              <Pressable
                onPress={() => setCard_Open(index)}
                style={[
                  styles.mainView,
                  {
                    backgroundColor: index % 2 == 0 ? txt_black : dusk_Gray,
                    zIndex: index % 2 == 0 ? 0 : 10,
                    marginTop: index == 0 ? 0 : -16,
                    borderBottomLeftRadius: index == data.length - 1 ? 20 : 0,
                    borderBottomRightRadius: index == data.length - 1 ? 20 : 0,
                    // marginBottom: index == cardOpen ? 20 : 0,
                  },
                ]}>
                {cardRemove === index ? (
                  <View style={styles.crossView}>
                    <Text color={WHITE}>Remove Card</Text>
                    <Pressable
                      style={styles.cross}
                      onPress={() => onDelete(item)}>
                      <Dots name={'cross'} color={dull_gray} />
                    </Pressable>
                  </View>
                ) : (
                  <View>
                    <Text color={WHITE}>{item?.name}</Text>
                    <Text color={WHITE}>
                      Last 4 digits on card {item?.card_number}
                    </Text>
                  </View>
                )}
                <Pressable
                  style={styles.icon}
                  onPress={() => options(item, index)}>
                  <Dots name={'dots-three-horizontal'} color={WHITE} />
                </Pressable>
              </Pressable>
            );
          }}
        />
      </View>
      {data?.length > 0 && (
        <View style={styles.btn}>
          <CustomButton
            bgClr={txt_black}
            text={'Add Another card'}
            onPress={Add_Another_Card}
          />
        </View>
      )}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default MyCard;
