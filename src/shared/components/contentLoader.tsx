import {dim_Gray, light_grey, GREY, txt_gray} from '@theme';
import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

const MyContentLoader = ({
  myCredit,
  forMe,
  brands,
  topPicks,
  nearme,
}: {
  myCredit?: any;
  forMe?: any;
  brands?: any;
  topPicks?: any;
  nearme?: any;
}) => {
  return (
    <>
      <ContentLoader
        speed={3}
        backgroundColor={light_grey}
        foregroundColor={'#999'}>
        {brands ? (
          <>
            <Circle cx={'30'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'90'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'150'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'210'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'270'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'330'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'390'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'450'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'510'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
          </>
        ) : forMe ? (
          <>
            <RecLoader y={20} width={'90%'} x={2} height={'95%'} />
          </>
        ) : topPicks ? (
          <RecLoader y={20} width={'90%'} x={2} height={'95%'} />
        ) : nearme ? (
          <RecLoader y={20} width={'90%'} x={2} height={'95%'} />
        ) : (
          <>
            <Circle cx={'30'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'90'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'150'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'210'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'270'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'330'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'390'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'450'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            <Circle cx={'510'} r={'25'} cy={'30'} strokeWidth={'2.5'} />
            {/* <Circle cx={'30'} cy={'30'} r={'25'} strokeWidth={'2.5'} /> */}
            {/* <RecLoader y={14} /> */}
            {/* <RecLoader y={21} /> */}
            {/* <RecLoader y={28} /> */}

            <RecLoader y={80} width={'30%'} x={1} />
            <RecLoader y={100} width={'50%'} x={1} />

            <RecLoader y={120} width={'20%'} x={1} height={'5%'} />
            <RecLoader y={120} width={'20%'} x={100} height={'5%'} />
            <RecLoader y={120} width={'20%'} x={200} height={'5%'} />

            <RecLoader y={200} width={'92%'} x={1} />
            <RecLoader y={220} width={'92%'} x={1} />
            <RecLoader y={240} width={'92%'} x={1} />

            <RecLoader y={260} width={'92%'} x={1} />
            <RecLoader y={280} width={'92%'} x={1} />
            <RecLoader y={300} width={'92%'} x={1} />

            <RecLoader y={360} width={'40%'} x={1} />
            <RecLoader y={380} width={'80%'} x={1} />

            <RecLoader y={410} width={'92%'} x={1} height={'50%'} />
          </>
        )}
      </ContentLoader>
    </>
  );
};

const RecLoader = ({
  y,
  x,
  width,
  height,
}: {
  y?: any;
  x?: any;
  width?: any;
  height?: any;
}) => (
  <>
    <Rect
      scaleX={1}
      scaleY={0.7}
      translateY={y}
      strokeWidth="3"
      fill="rgb(0,0,255)"
      stroke="rgb(0,0,0)"
      translateX={x ? x : 270}
      width={width ? width : 30}
      height={height ? height : 5}
    />
  </>
);

export default MyContentLoader;
