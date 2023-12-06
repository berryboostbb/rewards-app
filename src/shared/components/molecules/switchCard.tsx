import {
  RF,
  borderClr,
  txt_gray,
  typography,
  ligh_green,
  mulish_bold,
} from '@theme';
import React from 'react';
import {Text} from '@components';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';

const SwitchCard = ({
  theme,
  title,
  onToggle,
  isEnabled,
  storeTheme,
}: {
  theme?: any;
  title?: any;
  onToggle?: any;
  isEnabled?: any;
  storeTheme?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  return (
    <View style={styles.mainView}>
      <Text color={txt_gray} size={typography.standard} semiBold>
        {title}
      </Text>

      <View style={[styles.profileContainer]}>
        <ToggleSwitch
          isOn={isEnabled}
          offColor="#dcdcdc"
          onColor={ligh_green}
          onToggle={
            theme ? () => storeTheme('THEME_KEY', !isEnabled) : () => onToggle()
          }
        />
      </View>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    mainView: {
      height: RF(60),
      borderWidth: 1,
      borderColor: borderClr,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 16,
      paddingHorizontal: RF(30),
      marginTop: RF(10),
    },
    darkModeText: {
      fontSize: RF(13),
      textAlign: 'center',
      fontFamily: mulish_bold,
      color: colors.LABEL_COLOR,
    },
    switchContainer: {
      flex: 1,
    },
    profileContainer: {},
    linearStyle: {
      flexDirection: 'row',
      width: '100%',
      height: RF(50),
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: RF(30),
      borderRadius: RF(15),
      elevation: 3,
    },
  });

export default SwitchCard;
