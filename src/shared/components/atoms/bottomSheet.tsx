import Text from './text';
import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {dull_gray, light_grey, typography} from '@theme';
import CustomPicker from './picker';

const BottomSheet = ({
  refRBSheet,
  pickerRef,
  selectedLanguage,
  setSelectedLanguage,
}: {
  refRBSheet?: any;
  pickerRef?: any;
  selectedLanguage?: any;
  setSelectedLanguage?: any;
}) => {
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: light_grey,
        },
        container: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: light_grey,
        },
      }}
      animationType={'fade'}></RBSheet>
  );
};

export default BottomSheet;
