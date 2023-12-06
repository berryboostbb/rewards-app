import React from 'react';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const ParallalScrollView = ({
  header,
  children,
  style,
}: {
  header?: any;
  children?: any;
  style?: any;
}) => {
  return (
    <ParallaxScrollView
      stickyHeaderHeight={50}
      parallaxHeaderHeight={400}
      backgroundColor="transparent"
      renderForeground={() => header}
      contentBackgroundColor="transparent"
      contentContainerStyle={style}>
      {children}
    </ParallaxScrollView>
  );
};

export default ParallalScrollView;
