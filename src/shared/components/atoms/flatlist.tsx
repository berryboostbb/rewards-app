import Text from './text';
import {RF, typography} from '@theme';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {FlatList, RefreshControl, StyleSheet, View, Image} from 'react-native';

const CustomFlatList = ({
  data,
  isRefreshing,
  handleRefresh,
}: {
  data?: any;
  isRefreshing?: any;
  handleRefresh?: any;
}) => {
  const theme: any = useTheme();
  const [show, setShow] = useState(false);

  return (
    <View style={styles.mainView}>
      <FlatList
        numColumns={4}
        refreshControl={
          <RefreshControl
            enabled={true}
            colors={['#9Bd35A', '#689F38']}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
          />
        }
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setShow(!show);
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container} key={index}>
              <Image
                source={{uri: item?.image_url ? item?.image_url : item?.logo}}
                style={styles.img}
                resizeMode="contain"
              />
              <Text
                size={typography.normal}
                medium
                style={{
                  width: RF(70),
                  textAlign: 'center',
                }}>
                {item?.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: RF(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65,
  },
  container: {
    marginVertical: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  img: {
    width: RF(55),
    height: RF(55),
    borderRadius: 110 / 2,
  },
});
