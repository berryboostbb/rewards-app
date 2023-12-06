import React from 'react';
import {Text} from '@components';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ligh_green, mulish_bold, RF} from '@theme';
import ToggleSwitch from 'toggle-switch-react-native';
import LinearGradient from 'react-native-linear-gradient';

const ToggleBtn = ({
  theme,
  title,
  isTop,
  onToggle,
  isEnabled,
  storeTheme,
}: {
  theme?: any;
  title?: any;
  isTop?: any;
  onToggle?: any;
  isEnabled?: any;
  storeTheme?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  return (
    <>
      <View style={[]}>
        <Text style={styles.darkModeText}>{title}</Text>
        <View style={styles.switchContainer}>
          <ToggleSwitch
            isOn={isEnabled}
            offColor="#dcdcdc"
            onColor={ligh_green}
            onToggle={
              theme
                ? () => storeTheme('THEME_KEY', !isEnabled)
                : () => onToggle()
            }
          />
        </View>
      </View>
    </>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    darkModeText: {
      fontSize: RF(13),
      textAlign: 'center',
      fontFamily: mulish_bold,
      color: colors.LABEL_COLOR,
    },
    switchContainer: {
      flex: 1,
      paddingRight: RF(10),
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    profileContainer: {
      shadowOpacity: 0.15,
      shadowOffset: {width: 0, height: 0},
      alignItems: 'center',
    },
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

export default ToggleBtn;
