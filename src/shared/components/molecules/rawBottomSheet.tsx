import {View, Button, Animated, StyleSheet, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import Up from 'react-native-vector-icons/Entypo';
import Down from 'react-native-vector-icons/Entypo';
import RBSheet from 'react-native-raw-bottom-sheet';
import Text from '../atoms/text';
import Search from '../search';
import CustomLoader from '../customLoader';

const Raw_Bottom_Sheet = ({
  sheetRef,
  children,
  loading,
}: {
  sheetRef?: any;
  children?: any;
  loading?: any;
}) => {
  const onClick = () => {
    sheetRef?.current.open();
  };

  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        closeOnPressMask={false}
        ref={sheetRef}
        height={400}
        openDuration={250}
        customStyles={{
          container: {
            alignItems: 'center',
          },
          wrapper: {},
          draggableIcon: {},
        }}>
        {children}
        {loading && <CustomLoader />}
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({});

export default Raw_Bottom_Sheet;
