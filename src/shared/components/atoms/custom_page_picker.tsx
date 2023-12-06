import Text from './text';
import {pageList} from '@utils';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {dim_Gray, GST, RF, typography} from '@theme';
import Icon from 'react-native-vector-icons/AntDesign';
import {Pressable, StyleSheet, View, ScrollView} from 'react-native';

const Custom_Page_Picker = ({
  page,
  setPage,
  onSelect_Per_Page,
}: {
  page?: any;
  setPage?: any;
  onSelect_Per_Page?: (item: any) => void;
}) => {
  const [onOpen, setOnOpen] = useState<any>(false);
  const {colorCode} = useSelector((state: any) => state.root.user);

  const onHandleChange = () => {
    setOnOpen(true);
  };

  const onSetPage = (item: any) => {
    setPage(item?.pageNo);
    setOnOpen(false);
    onSelect_Per_Page(item);
  };

  return (
    <View style={styles.mainView}>
      <Text size={typography.standard} medium>
        {page}
      </Text>
      <Text size={typography.standard} medium>
        /Page
      </Text>
      <Pressable onPress={onHandleChange} style={GST.p5}>
        <Icon size={RF(10)} name={'caretdown'} />
      </Pressable>

      {onOpen && (
        <ScrollView style={styles.view}>
          {pageList.map((item: any) => (
            <Pressable style={styles.padding} onPress={() => onSetPage(item)}>
              <Text align>{item?.pageNo}</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flexDirection: 'row', alignItems: 'center'},
  padding: {marginVertical: 2, padding: 3},
  view: {
    width: 55,
    zIndex: 40,
    height: 200,
    bottom: 50,
    position: 'absolute',
    backgroundColor: dim_Gray,
  },
});

export default Custom_Page_Picker;
