import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Caption, Title} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {GradientButton, UserAvatar} from '@components';
import LinearGradient from 'react-native-linear-gradient';
import {RF, GST, mulish_bold, mulish_regular} from '@theme';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {setFirstLogin, signOut} from '@redux';
import {navigate} from '@services';

const CustomDrawerContent = (props: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const sections = [1, 2];
  const {user} = useSelector((state: any) => state.root.user);

  const logOut = () => {
    dispatch(signOut());
    dispatch(setFirstLogin(false));
  };

  return (
    <LinearGradient
      colors={[
        theme.colors.DRWAER_FIRST_COLOR,
        theme.colors.DRWAER_SECOND_COLOR,
      ]}
      style={GST.flex}>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View style={GST.flex}>
          <View style={styles.mainView}>
            <UserAvatar />
            <View style={styles.titleView}>
              <Title style={[styles.title, {color: theme.colors.LABEL_COLOR}]}>
                {user ? user?.first_name + ' ' + user?.last_name : 'Jhon Doe'}
              </Title>
              <Caption
                style={[styles.caption, {color: theme.colors.LABEL_COLOR}]}>
                {user ? user?.email : 'jhon@example.com'}
              </Caption>
            </View>
          </View>

          <View style={styles.btn_item_container}>
            {sections.map((index: any) => (
              <View
                key={index}
                style={[
                  styles.btn_container,
                  {
                    backgroundColor: '#f5f5f5',
                  },
                ]}>
                <GradientButton
                  title={index === 1 ? 'Home' : 'Profile'}
                  titleStyle={{
                    color: theme.colors.LABEL_COLOR,
                    fontFamily: mulish_bold,
                  }}
                  style={styles.gradientBtnStyles}
                  onPress={
                    index === 1
                      ? () => navigate('HomeStack')
                      : () => navigate('ProfileStack')
                  }
                />
              </View>
            ))}
          </View>

          <View style={styles.lastBtn}>
            <GradientButton
              logOutIcon
              title="Log Out"
              titleStyle={styles.logoutText}
              style={styles.logoutButton}
              onPress={logOut}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  titleView: {flexDirection: 'column', alignItems: 'center'},
  mainView: {
    flexDirection: 'column',
    marginTop: RF(15),
    alignItems: 'center',
    paddingTop: RF(20),
  },
  title: {
    fontSize: RF(16),
    marginTop: RF(3),
    fontWeight: 'bold',
    fontFamily: mulish_bold,
  },
  caption: {
    fontSize: RF(14),
    lineHeight: RF(14),
    fontFamily: mulish_regular,
  },
  btn_item_container: {
    flex: 1,
    marginTop: RF(30),
    marginVertical: RF(17),
    backgroundColor: 'green',
  },
  btn_container: {
    alignItems: 'center',
  },
  lastBtn: {
    // backgroundColor: 'red',
    // alignItems: 'flex-end',
    // marginTop: RF(10),
    marginHorizontal: RF(20),
    borderRadius: 16,
    flex: 1,
  },
  text: {
    fontFamily: mulish_bold,
    fontSize: RF(12),
  },
  logoutText: {
    fontFamily: mulish_bold,
    fontSize: RF(13),
    color: '#fe5c31',
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: RF(15),
  },
  logoutButton: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'flex-end',
  },
  gradientBtnStyles: {
    width: '85%',
    height: RF(50),
    elevation: 3,
  },
});
