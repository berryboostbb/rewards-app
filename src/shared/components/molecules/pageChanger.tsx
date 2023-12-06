import {RF} from '@theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Custom_Paginator from '../atoms/customPaginator';
import Custom_Page_Picker from '../atoms/custom_page_picker';

const Page_Changer = ({
  page,
  count,
  selected,
  setPage,
  onClick_Paginator,
}: {
  count?: any;
  page?: any;
  setPage?: any;
  selected?: any;
  onClick_Paginator?: any;
}) => {
  return (
    <View style={styles.mainView}>
      <Custom_Page_Picker page={page} setPage={setPage} />
      <Custom_Paginator
        count={count}
        selected={selected}
        onClick_Paginator={(item: any, index: any) =>
          onClick_Paginator(item, index)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: RF(35),
  },
});

export default Page_Changer;
