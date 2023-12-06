import {
  CustomFlatGrid,
  CustomLoader,
  Faq_List,
  Header,
  Search,
  Wrapper,
} from '@components';
import {fetchFaq_Keyword, fetchFaq_List} from '@services';
import {GST, RF} from '@theme';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

const FAQ = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState<any>();
  const [faq_list, setFaq_list] = useState<any>([]);
  const [faq_keyword, setFaq_keyword] = useState<any>([]);
  const [flatList_Data, setFlatList_Data] = useState<any>([]);
  const [selected_Iten, setSelected_Item] = useState<any>(false);
  const [prevIndex, setPrevIndex] = useState<any>(-1);
  const [selectedItem, setSelectedItem] = useState(-1);

  useEffect(() => {
    get_Faq_List();
    get_Faq_Keyword();
  }, []);
  const get_Faq_List = () => {
    setLoading(true);
    let params = {
      keyword: searchText ? searchText : '',
    };
    fetchFaq_List(params)
      .then((res: any) => {
        setFaq_list(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('error...lis..', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const get_Faq_Keyword = () => {
    setLoading(true);
    fetchFaq_Keyword()
      .then((res: any) => {
        setFaq_keyword(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('error...keyw..', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onChangeText = (val: any) => {
    setSearchText(val);
  };
  const onSearch = (val: any) => {
    setSearchText(val);
  };
  const onEndEditing = (val: any) => {
    setSearchText(val);
  };
  const onHandleClick = (item: any, index: any) => {
    setSelected_Item(index);
    let arr = [...flatList_Data];
    if (arr?.includes(item)) {
      let ind = arr?.indexOf(item);
      if (ind > -1) {
        arr?.splice(ind, 1);
      }
    } else {
      if (arr?.length <= 7) {
        arr?.push(item);
      }
    }
    setFlatList_Data(arr);
  };
  const onClickItem = (item: any, index: any) => {
    if (index == prevIndex) {
      setSelectedItem(-1);
      setPrevIndex(-1);
    } else {
      setSelectedItem(index);
      setPrevIndex(index);
    }
  };

  return (
    <Wrapper>
      <View style={GST.mh30}>
        <Header
          faq
          profile
          showBackButton
          title={'Frequently Asked Questions'}
          navigation={navigation}
          style={styles.header}
        />
      </View>

      <Search
        placeholder={'Search'}
        onChangeText={onChangeText}
        onSearch={onSearch}
        onEndEditing={onEndEditing}
      />

      <View style={{marginHorizontal: RF(30), marginTop: RF(30)}}>
        <CustomFlatGrid
          data={faq_keyword}
          selected={flatList_Data}
          selectedItem={selected_Iten}
          onPress={(item: any, index: any) => onHandleClick(item, index)}
        />
      </View>
      <Faq_List
        data={faq_list}
        onClickItem={onClickItem}
        selectedItem={selectedItem}
      />
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default FAQ;
