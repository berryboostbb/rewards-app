import React from 'react';
import Text from './text';
import {useSelector} from 'react-redux';
import {dim_Gray, RF, txt_gray, WHITE} from '@theme';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Custom_Paginator = ({
  count,
  selected,
  currentPage,
  setCurrentPage,
  onClick_Paginator,
}: {
  count?: any;
  selected?: any;
  currentPage?: any;
  setCurrentPage?: any;
  onClick_Paginator?: any;
}) => {
  const {colorCode} = useSelector((state: any) => state.root.user);
  const styles = useStyles(colorCode);

  const handlePreviousClick = () => {
    // if (currentPage > 1) {
    //   setCurrentPage(currentPage - 1);
    // }
  };
  const handleNextClick = () => {
    // setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.mainView}>
      <Pressable style={styles.view} onPress={handlePreviousClick}>
        <Icon name={'arrow-left'} size={RF(10)} color={txt_gray} />
      </Pressable>

      {count.map((item: any, index: any) => (
        <Pressable
          onPress={() => onClick_Paginator(item, index)}
          style={[
            styles.numberView,
            {backgroundColor: selected == index ? colorCode : WHITE},
          ]}>
          <Text color={selected == index ? WHITE : colorCode}>{item}</Text>
        </Pressable>
      ))}

      <Pressable style={styles.view} onPress={handleNextClick}>
        <Icon name={'arrow-right'} size={RF(10)} color={txt_gray} />
      </Pressable>
    </View>
  );
};

const useStyles = (colorCode: any) =>
  StyleSheet.create({
    mainView: {flexDirection: 'row', marginVertical: RF(10)},
    view: {
      width: RF(28),
      height: RF(28),
      backgroundColor: dim_Gray,
      borderRadius: 100,
      alignItems: 'center',
      marginHorizontal: RF(5),
      justifyContent: 'center',
    },
    numberView: {
      width: RF(28),
      height: RF(28),
      alignItems: 'center',
      borderRadius: RF(100),
      justifyContent: 'center',
    },
  });

export default Custom_Paginator;
