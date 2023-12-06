import {borderClr, RF, typography} from '@theme';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {FlatList, StyleSheet, View, Pressable} from 'react-native';
import Text from './atoms/text';
import Icon from 'react-native-vector-icons/AntDesign';

const Faq_List = ({
  data,
  selected,
  onClickItem,
  selectedItem,
}: {
  selectedItem?: any;
  selected?: any;
  data?: any;
  onClickItem?: any;
}) => {
  const theme: any = useTheme();
  const [show, setShow] = useState(false);

  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setShow(!show);
        }}
        renderItem={({item, index}) => {
          return (
            <>
              <Pressable
                key={index}
                onPress={() => onClickItem(item, index)}
                style={{marginHorizontal: RF(20), marginTop: RF(10)}}>
                {selectedItem == index ? (
                  <View style={styles.selected_c} key={index}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text size={typography.standard} semiBold>
                        {item?.question}
                      </Text>
                      <Icon name={'minus'} size={30} />
                    </View>
                    <Text size={typography.standard} medium>
                      {item?.answer}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.container} key={index}>
                    <Text size={typography.standard} medium>
                      {item?.question}
                    </Text>
                    <Icon name={'plus'} size={RF(20)} />
                  </View>
                )}
              </Pressable>
            </>
          );
        }}
      />
    </View>
  );
};

export default Faq_List;

const styles = StyleSheet.create({
  mainView_w: {
    width: '90%',
    height: RF(43),
    // borderWidth: 1,
    // borderRadius: RF(16),
    // borderColor: borderClr,
    // marginVertical: RF(10),
    marginHorizontal: RF(10),
    paddingHorizontal: 20,
  },
  selectedView: {
    // width: '100%',
    height: RF(80),
    borderRadius: RF(16),
    // marginVertical: RF(10),
    marginHorizontal: RF(15),
    // marginBottom: RF(80),
  },
  mainView: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  selected_c: {
    backgroundColor: borderClr,
    width: '100%',
    padding: RF(10),
    borderRadius: RF(20),
    paddingVertical: 20,
  },
  container: {
    width: '100%',
    // height: RF(40),
    // justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(15),
    // marginTop: RF(10)
  },
  img: {
    height: RF(25),
    borderRadius: 110 / 2,
  },
});
