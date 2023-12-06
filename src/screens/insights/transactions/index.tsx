import {GST} from '@theme';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {transaction_list} from '@utils';
import {FlatList, Pressable, View} from 'react-native';
import {
  Search,
  MultiTabs,
  Insights_Open_Image,
  CustomLoader,
} from '@components';
import {fetchTransactions} from '@services';

const Transactions = () => {
  const [list, setList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [searchText, setSearchText] = useState<any>('');
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<any>(-1);
  const [data, setData] = useState(['Today', 'Week', 'Month', 'Year']);

  useEffect(() => {
    get_Transactions();
  }, []);
  const onClickItem = (item: any, index: any) => {
    if (index == prevIndex) {
      setSelectedItem(-1);
      setPrevIndex(-1);
    } else {
      setSelectedItem(index);
      setPrevIndex(index);
    }
  };
  const onChangeText = (val: any) => {
    if (val) {
      const newData = transaction_list.filter(function (item) {
        const itemData = item.txt ? item.txt.toUpperCase() : ''.toUpperCase();
        const textData = val.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setList(newData);
      setSearchText(val);
    } else {
      setList(transaction_list);
      setSearchText('');
    }
  };
  const get_Transactions = () => {
    setLoading(true);
    let params = {
      page: 1,
      paginated: true,
      itemsPerPage: 10,
      startDate: '',
      endDate: '',
      searchText: searchText ? searchText : '',
    };
    fetchTransactions(params)
      .then((res: any) => {
        setList(res?.data?.data?.items);
      })
      .catch((err: any) => {
        console.log('error....transactions...', err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onSubmit = () => {
    get_Transactions();
  };
  // useEffect(() => {
  //   if (searchText === '') {
  //     get_Transactions();
  //   }
  // }, [searchText]);

  return (
    <>
      <MultiTabs
        tabsData={data}
        tabSelectedIndex={tabSelectedIndex}
        setTabSelectedIndex={setTabSelectedIndex}
      />
      <Search
        marginR
        onEndEditing={onSubmit}
        onChangeText={onChangeText}
        placeholder={'Search for transactions'}
      />

      <FlatList
        style={{marginTop: 10}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={list}
        // data={searchText === '' ? list : transaction_list}
        renderItem={({item, index}) => (
          <Pressable
            key={index}
            style={
              selectedItem == index ? styles.selectedView : styles.mainView
            }
            onPress={() => onClickItem(item, index)}>
            {selectedItem == index ? (
              <Insights_Open_Image item={item} selected />
            ) : (
              <Insights_Open_Image item={item} />
            )}
          </Pressable>
        )}
      />
      <View style={GST.pb80} />
      {loading && <CustomLoader />}
    </>
  );
};

export default Transactions;
