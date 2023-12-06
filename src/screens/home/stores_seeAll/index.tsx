import {
  Text,
  Header,
  Search,
  Wrapper,
  BottomSheet,
  CustomPicker,
  CustomFlatList,
  CustomLoader,
} from '@components';
import styles from './styles';
import {filter} from '@assets';
import {allStores_Brands} from '@utils';
import {dull_gray, green, typography} from '@theme';
import {RouteProp} from '@react-navigation/native';
import {View, Image, Pressable} from 'react-native';
import {format as prettyFormat} from 'pretty-format';
import React, {useEffect, useRef, useState} from 'react';
import Tick from 'react-native-vector-icons/MaterialIcons';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      item?: any;
      data?: any;
    };
  }>;
}

const Stores_SeeAll = ({route, navigation}: Props) => {
  const refRBSheet = useRef();
  const {item, data} = route?.params;
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);
  const [sortedArray, setSortedArray] = useState<any>();

  const onOpenBottomSheet = () => {
    setOpen(true);
  };
  const onSelected = (item: any) => {
    setSelected(item);
  };
  const onClose = () => {
    setOpen(false);
  };
  const filterItems = () => {
    let tempArray = [...item];
    if (selected == 1) {
      const sortedList = tempArray?.sort(function (a, b) {
        var nameA = a?.name?.toUpperCase();
        var nameB = b?.name?.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setSortedArray(sortedList);
    }
    if (selected == 2) {
      const sortedList = tempArray?.sort(function (a, b) {
        var nameA = a?.name?.toUpperCase();
        var nameB = b?.name?.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setSortedArray(sortedList.reverse());
    }
  };
  const onFilter = () => {
    filterItems();
    onClose();
  };
  const onSearch = () => {
    // setIsLoading(true);
    const filteredData = item.filter((item: any) =>
      item.name.includes(keyword),
    );
    setSearchResults(filteredData);
  };
  const handleSearch = (keyword: any) => {
    setKeyword(keyword);
  };

  return (
    <Wrapper isMargin>
      <View style={styles.view}>
        <Header
          profile
          showBackButton
          navigation={navigation}
          title={'Stores & Brands'}
        />
        <View style={styles.mainView}>
          <Search
            placeholder={'Search'}
            style={styles.search}
            onSearch={onSearch}
            onChangeText={(text: any) => handleSearch(text)}
          />
          <Pressable onPress={onOpenBottomSheet}>
            <Image source={filter} resizeMode="contain" style={styles.img} />
          </Pressable>
        </View>

        <CustomFlatList
          data={
            selected == 0 && keyword == ''
              ? item
              : keyword !== ''
              ? searchResults
              : sortedArray
          }
        />
      </View>

      {/* <BottomSheet
        pickerRef={pickerRef}
        refRBSheet={refRBSheet}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      /> */}

      {open && (
        <View style={styles.container}>
          <View style={styles.tick}>
            <View
              style={{
                width: '95%',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Text
                color={dull_gray}
                size={typography.h1}
                style={{opacity: 0.4}}>
                Select View
              </Text>
            </View>
            <Pressable
              onPress={onFilter}
              style={{
                width: '8%',
                alignItems: 'flex-end',
              }}>
              <Tick name={'done'} size={24} color={green} />
            </Pressable>
          </View>
          <CustomPicker
            selected={selected}
            onSelected={(item: any) => onSelected(item)}
          />
        </View>
      )}
      {isLoading && <CustomLoader />}
    </Wrapper>
  );
};

export default Stores_SeeAll;
