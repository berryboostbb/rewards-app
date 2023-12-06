import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {GST, RF, txt_gray, typography, WHITE} from '@theme';
import {
  Bottom_Sheet,
  CustomLoader,
  HomeHeader,
  Text,
  Wrapper,
} from '@components';
import {Image, ImageBackground, Pressable, View} from 'react-native';
import {
  arrow_next,
  borrowell,
  borrowell_points,
  green_sterik,
  koho,
  koho_points,
  points,
  points_insights,
} from '@assets';
import {useSelector} from 'react-redux';
import {fetch_Account_Summary, navigate} from '@services';
import {openLink} from '@utils';
import {date} from 'yup';
import moment, {months} from 'moment';

const Ponits = ({navigation}: any) => {
  const date: any = new Date();
  const theme: any = useTheme();
  const [month, setmonth] = useState('');
  const [point, setPoints] = useState<any>();
  const [dollar, setDollar] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [purchases, setPurchases] = useState<any>();
  const [dollarSpent, setDollarSpent] = useState<any>();

  const {user, colorCode} = useSelector((state: any) => state.root.user);

  useEffect(() => {
    get_Points();
  }, []);

  const get_Points = () => {
    setLoading(true);
    fetch_Account_Summary()
      .then((res: any) => {
        setPoints(res?.data?.data?.totalPoints);
        setDollar(res?.data?.data?.totalAmount);
        setPurchases(res?.data?.data?.purchases);
        setDollarSpent(res?.data?.data?.dollarSpent);
      })
      .catch((err: any) => {
        console.log('error....nerme...', err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const menuButtonPressed = () => {
    navigation.openDrawer();
  };
  const onPress = () => {
    navigate('InsightsStack', {screen: 'Insights'});
  };

  useEffect(() => {
    var check = moment(date, 'YYYY/MM/DD');
    var month = check.format('MMMM');
    setmonth(month);
  }, []);

  return (
    <Wrapper>
      <HomeHeader
        myTheme={theme}
        title={'My Points'}
        cardText={'Spend & Earn'}
        backgroundColor={colorCode}
        menuButtonPressed={menuButtonPressed}
      />

      <ImageBackground
        resizeMode="contain"
        source={
          user?.user_type == 'Borrowell'
            ? borrowell_points
            : user?.user_type == 'KOHO'
            ? koho_points
            : points_insights
        }
        style={styles.imgView}>
        <View style={styles.txt_view}>
          <Text color={WHITE}>Plastk Reward Points</Text>

          <View style={styles.img_View}>
            <Image
              resizeMode="contain"
              source={
                user?.user_type == 'Borrowell'
                  ? borrowell
                  : user?.user_type == 'KOHO'
                  ? koho
                  : points
              }
              style={[
                styles.img,
                {
                  tintColor:
                    user?.user_type == 'Borrowell' || user?.user_type == 'KOHO'
                      ? WHITE
                      : '',
                  borderWidth:
                    user?.user_type == 'Borrowell' || user?.user_type == 'KOHO'
                      ? 0
                      : RF(4),
                  borderRadius:
                    user?.user_type == 'Borrowell' || user?.user_type == 'KOHO'
                      ? 0
                      : RF(50),
                  borderColor:
                    user?.user_type == 'Borrowell' || user?.user_type == 'KOHO'
                      ? ''
                      : '#525151',
                },
              ]}
            />
            <Text color={WHITE} style={styles.points_number}>
              {point}
            </Text>
          </View>

          <Text color={WHITE}>${dollar} Available in Points</Text>
        </View>
      </ImageBackground>

      <Section
        month={month}
        _points={point}
        onPress={onPress}
        purchases={purchases}
        colorCode={colorCode}
        dollarSpent={dollarSpent}
      />

      <View style={{marginTop: 60, paddingBottom: 30}}>
        <Bottom_Sheet />
      </View>

      {/* 
        {user?.user_type === 'Borrowell' ||
        user?.user_type === 'KOHO' ? null : (
        )}
      </View> */}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

const Section = ({
  colorCode,
  _points,
  dollarSpent,
  purchases,
  onPress,
  month,
}: {
  month?: any;
  colorCode?: any;
  _points?: any;
  dollarSpent?: any;
  purchases?: any;
  onPress?: any;
}) => {
  return (
    <>
      <Pressable
        style={[styles.innerView, {backgroundColor: colorCode}]}
        // onPress={() =>
        //   openLink(
        //     'https://plastkrewards.plastk.p2motivate.com/sso_login/MQSK6319/1eda9be9df494439bf5b44ca893d25dd',
        //   )
        // }
      >
        <Image source={green_sterik} style={styles.inner_img} />
        <Text color={WHITE}>Visit Rewards Store</Text>
      </Pressable>

      <View style={styles.outerView}>
        <View style={styles.view}>
          <Text
            size={typography.standard}
            semiBold
            color={txt_gray}
            style={{marginLeft: -10}}>
            {month} Overview
          </Text>
          <Pressable onPress={onPress} style={{padding: 5}}>
            <Image source={arrow_next} style={styles.image} />
          </Pressable>
        </View>

        <View style={styles.pointsView}>
          <View style={GST.AI}>
            <View style={[GST.flexDir1, {alignItems: 'center'}]}>
              <Image source={points} style={styles.wh_img} />
              <Text semiBold size={typography.standard} color={txt_gray}>
                {_points}
              </Text>
            </View>
            <Text bold size={typography.standard} color={txt_gray}>
              Points Earned
            </Text>
          </View>

          <View style={GST.AI}>
            <Text semiBold size={typography.standard} color={txt_gray}>
              ${dollarSpent ? dollarSpent : 0}
            </Text>

            <Text bold size={typography.standard} color={txt_gray}>
              Dollars Spent
            </Text>
          </View>

          <View style={GST.AI}>
            <Text semiBold size={typography.standard} color={txt_gray}>
              {purchases ? purchases : 0}
            </Text>
            <Text bold size={typography.standard} color={txt_gray}>
              Purchases
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Ponits;
