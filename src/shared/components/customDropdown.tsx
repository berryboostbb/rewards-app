import React, {useState} from 'react';
import {RF, txt_black, txt_gray, typography} from '@theme';
import {days} from '@utils';
import {Text} from '@components';
import Feather from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';

const Custom_DropDown = ({open, setOpen}: {open?: any; setOpen?: any}) => {
  const [openTime, setOpenTime] = useState<any>(null);
  const [closeTime, setCloseTime] = useState<any>(null);

  const onSelect = (item: any, index: number) => {
    let result = item?.time?.split('-');
    setOpenTime(result[0]);
    setCloseTime(result[1]);
    setOpen(false);
  };

  return (
    <View style={[styles.mainView, {height: open ? RF(200) : RF(50)}]}>
      <Text size={typography.subHeading} color={txt_gray} semiBold>
        Open. Closes {closeTime}
      </Text>

      <Pressable onPress={() => setOpen(!open)} style={{marginTop: 1}}>
        {open ? (
          <Feather name={'chevron-up'} size={20} color={txt_gray} />
        ) : (
          <Feather name={'chevron-down'} size={20} color={txt_gray} />
        )}
      </Pressable>

      <View style={styles.open}>
        {open && (
          <>
            {days.map((item: any, index: any) => (
              <TouchableOpacity
                style={styles.view}
                onPress={() => onSelect(item, index)}>
                <Text
                  regular
                  size={typography.standard}
                  style={styles.icon}
                  color={txt_gray}>
                  {item.day}
                </Text>
                <Text semiBold size={typography.subHeading} color={txt_black}>
                  {item.time}
                </Text>
              </TouchableOpacity>
            ))}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  open: {
    position: 'absolute',
    marginTop: RF(30),
    justifyContent: 'center',
  },
  view: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: RF(20),
  },
  icon: {
    marginRight: RF(20),
  },
});

export default Custom_DropDown;
