import React from 'react';
import {GST, RF} from '@theme';
import {dp, female, male} from '@assets';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';

const UserAvatar = ({isProfile}: {isProfile?: any}) => {
  const {user} = useSelector((state: any) => state.root.user);

  const avatar = () => {
    let name;
    let value1 = user?.first_name?.charAt(0);
    let value2 = user?.last_name?.charAt(0);
    name = value1.concat(value2);
    return (
      <Avatar.Text
        label={name}
        style={GST.bgGreen}
        size={isProfile ? RF(100) : RF(60)}
      />
    );
  };

  return (
    <>
      {/* {user !== undefined && user && user.profile_picture_url !== null ? ( */}
      <Avatar.Image
        size={isProfile ? RF(86) : RF(45)}
        source={dp}
        // source={{uri: user?.profile_picture_url}}
      />

      {/* ) : user !== '' && user && user?.gender === 'M' ? (
        <Avatar.Image size={50} source={male} style={GST.bgBlack} />
      ) : user !== '' && user && user?.gender === 'F' ? (
        <Avatar.Image size={50} source={female} style={GST.bgBlack} />
      ) : (
        avatar()
      )} */}
    </>
  );
};

export default UserAvatar;
