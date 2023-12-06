import React, {PureComponent, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Modal,
  ScrollView,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  colorWhiteffffff,
  ligh_green,
  Moderateyellow,
  mulish_bold,
  mulish_regular,
  RF,
} from '@theme';
import {Text} from '@components';

interface CustomModalProps {
  modalVisible: boolean;
  responseMessage: string;
  onPress: () => void;
  modalType: any;
}
const CustomModal = (props: Partial<CustomModalProps>) => {
  const [errorModalVisible, seterrorModalVisible] = useState(true);
  const {responseMessage, onPress, modalType, modalVisible} = props;

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          seterrorModalVisible(!errorModalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignContent: 'center',
          }}>
          <View style={styles.centeredView}>
            {modalType == 'error' ? (
              <View style={styles.errorImageContainr}>
                <Image
                  source={require('@assets/error.png')}
                  style={{
                    height: RF(17),
                    width: '25%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            ) : (
              <View style={styles.successImageContainer}>
                <AntDesign
                  name="check"
                  style={styles.icon}
                  color={colorWhiteffffff}
                  size={30}
                />
              </View>
            )}

            <View style={styles.errorTextStyle}>
              {modalType == 'error' ? (
                <Text style={styles.errorText}>Error</Text>
              ) : (
                <Text style={styles.successText}>Success</Text>
              )}
              <ScrollView style={{marginBottom: RF(7)}}>
                <Text style={styles.tryAgainText}>{responseMessage}</Text>
              </ScrollView>
            </View>

            <Pressable
              style={{flex: 0.3, alignItems: 'flex-end', margin: 10}}
              onPress={onPress}>
              <AntDesign
                name="close"
                style={styles.icon}
                color={Moderateyellow}
                size={25}
              />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    backgroundColor: colorWhiteffffff,
    flex: 0.25,
    margin: 30,
    borderRadius: 20,
    marginTop: RF(30),
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  errorImageContainr: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    backgroundColor: '#E53935',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  successImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
    backgroundColor: ligh_green,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  errorTextStyle: {
    flex: 2,
    marginLeft: RF(5),
    marginTop: RF(20),
  },
  errorText: {
    color: '#E53935',
    fontFamily: mulish_bold,
    fontSize: RF(20),
  },
  tryAgainText: {
    fontFamily: mulish_regular,
    marginTop: RF(5),
    fontSize: RF(15),
  },
  successText: {
    color: ligh_green,
    fontFamily: mulish_bold,
    fontSize: RF(20),
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 20,
    marginTop: RF(20),
  },
  icon: {},
});
