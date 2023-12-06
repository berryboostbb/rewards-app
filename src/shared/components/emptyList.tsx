import React from 'react';
import {RF} from '@theme';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const EmptyList = ({
  title,
  description,
  titleStyles,
  desStyles,
}: {
  titleStyles?: any;
  desStyles?: any;
  title?: any;
  description?: any;
}) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyles]}>{title}</Text>
      <Text style={[styles.description, desStyles]}>{description}</Text>
    </View>
  );
};
export default EmptyList;

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: colors.LABEL_COLOR,
      fontWeight: 'bold',
      fontSize: RF(10),
    },
    description: {
      color: colors.LABEL_COLOR,
      fontWeight: 'bold',
      fontSize: RF(20),
    },
  });
