import {spinnerData} from '@utils';
import ModalDropdown from 'react-native-modal-dropdown';
import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedRadius} from '@redux';
import {green, RF} from '@theme';
import {TouchableOpacity, View} from 'react-native';
import Text from './text';

const DropDown = () => {
  const ref: any = useRef();
  const dispatch: any = useDispatch();
  const {selectedRadius} = useSelector((state: any) => state.root.user);

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        borderWidth: 1,
        // marginHorizontal: RF(20),
        marginRight: RF(30),
        marginLeft: 5,
        borderColor: green,
      }}
      onPress={() => ref?.current?.show()}>
      <ModalDropdown
        ref={ref}
        isFullWidth
        defaultValue={selectedRadius}
        options={spinnerData}
        dropdownStyle={{
          width: '50%',
          marginTop: -25,
        }}
        style={{
          width: '20%',
          height: RF(40),
          justifyContent: 'center',
        }}
        onSelect={(i: any, item: any) => {
          dispatch(setSelectedRadius(item));
        }}
        textStyle={{fontSize: RF(15), paddingLeft: RF(10)}}
      />
      <Text>meters</Text>
    </TouchableOpacity>
  );
};

export default DropDown;
