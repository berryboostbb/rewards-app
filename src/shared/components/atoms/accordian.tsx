import Text from './text';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ligh_green, mulish_regular, RF} from '@theme';
import Accordion from 'react-native-collapsible/Accordion';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
];

const AccordionView = ({days, openNow}: {days?: any; openNow?: any}) => {
  const [activeSections, setActiveSections] = useState([]);

  const _renderHeader = (section: any) => {
    return (
      <View style={{...styles.header}}>
        <View style={styles.iconConatainer}>
          <Ionicons color={ligh_green} name="stopwatch-outline" size={RF(25)} />
          <Text size={15}>{openNow ? 'Open now' : 'Closed'}</Text>
        </View>

        <View>
          <AntDesign name="down" color={ligh_green} size={RF(10)} />
        </View>
      </View>
    );
  };

  const _renderContent = (section: any) => {
    return (
      <View style={{...styles.content}}>
        <Text>{'day'}</Text>
      </View>
    );
    // });
  };

  const _updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  return (
    <View>
      <Accordion
        underlayColor="transparent"
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(20),
    marginHorizontal: RF(17),
  },
  content: {
    padding: 8,
  },
  iconConatainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: '-4%',
    alignItems: 'center',
  },
  closedText: {
    fontFamily: mulish_regular,
    fontSize: '2.3%',
    marginLeft: '5%',
    marginTop: '0.3',
  },
});

export default AccordionView;
