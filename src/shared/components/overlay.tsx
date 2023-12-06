import {bap_Store} from '@utils';
import {GST, RF, WHITE} from '@theme';
import React, {useState} from 'react';
import {White_Card} from '@components';
import {Overlay} from 'react-native-elements';
import Close from 'react-native-vector-icons/Entypo';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';

const Custom_Overlay = ({
  isTransparent,
  modalVisible,
  setModalVisible,
}: {
  isTransparent?: any;
  modalVisible?: any;
  setModalVisible?: any;
}) => {
  const [favorite, setFavorite] = useState(-1);

  const onClose = () => {
    setModalVisible(false);
  };

  return (
    <Overlay
      fullScreen
      statusBarTranslucent
      isVisible={modalVisible}
      onBackdropPress={onClose}
      overlayStyle={styles.view}>
      <Pressable onPress={onClose} style={styles.icon}>
        <Close name={'cross'} size={RF(30)} color={WHITE} />
      </Pressable>
      <FlatList
        data={bap_Store}
        style={GST.flex}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}: any) => {
          return (
            <View style={styles.margin}>
              <White_Card
                item={item}
                index={index}
                favourite={favorite}
                setFavourite={setFavorite}
              />
            </View>
          );
        }}
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    backgroundColor: '#19383A80',
    paddingTop: 10,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: RF(50),
    marginBottom: RF(70),
  },
  margin: {marginBottom: RF(15)},
});

export default Custom_Overlay;
