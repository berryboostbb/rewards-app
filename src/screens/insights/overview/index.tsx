import {GST, RF} from '@theme';
import React, {useEffect, useState} from 'react';
// import {monthly, weekly} from '@utils';
import {useSelector} from 'react-redux';
import Transactions from '../transactions';
import {useTheme} from '@react-navigation/native';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {
  Charts,
  CustomLoader,
  HomeHeader,
  TabWidget,
  Wrapper,
} from '@components';
import {fetchAmountCharts, fetchRewardCharts} from '@services';

const Insights = ({navigation}: any) => {
  const theme: any = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const [weeklyLabel, setWeeklyLabel] = useState<any>([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyLabel, setMonthlyLabel] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  const [weeklyLabel_A, setWeeklyLabel_A] = useState<any>([]);
  const [weeklyData_A, setWeeklyData_A] = useState([]);
  const [monthlyLabel_A, setMonthlyLabel_A] = useState([]);
  const [monthlyData_A, setMonthlyData_A] = useState([]);

  const [loading, setLoading] = useState(false);
  const [selectedRewards, setSelectedRewards] = useState('weekly');
  const [selected_AmountSpent, setSelected_AmountSpent] = useState('weekly');

  const {colorCode} = useSelector((state: any) => state.root.user);

  const getOffers = () => {};
  const getMyProducts = () => {};

  useEffect(() => {
    getRewards_Charts();
    getAmount_Charts();
  }, []);
  const menuButtonPressed = () => {
    navigation.openDrawer();
  };
  const getRewards_Charts = () => {
    setLoading(true);

    let arrLabel_W: any = [];
    let arrData_W: any = [];

    let arrLabel_M: any = [];
    let arrData_M: any = [];

    fetchRewardCharts()
      .then((res: any) => {
        res?.data?.data?.weeklyData?.map((key: any) => {
          arrLabel_W.push(key.label);
          arrData_W.push(key.value);
        });
        setWeeklyLabel(arrLabel_W);
        setWeeklyData(arrData_W);

        res?.data?.data?.monthlyData?.map((key: any) => {
          arrLabel_M.push(key.label);
          arrData_M.push(key.value);
        });
        setMonthlyLabel(arrLabel_M);
        setMonthlyData(arrData_M);
      })
      .catch((err: any) => {
        console.log('error...', err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getAmount_Charts = () => {
    setLoading(true);

    let arrLabel_W: any = [];
    let arrData_W: any = [];

    let arrLabel_M: any = [];
    let arrData_M: any = [];

    fetchAmountCharts()
      .then((res: any) => {
        res?.data?.data?.weeklyData?.map((key: any) => {
          arrLabel_W.push(key.label);
          arrData_W.push(key.value);
        });
        setWeeklyLabel_A(arrLabel_W);
        setWeeklyData_A(arrData_W);

        res?.data?.data?.monthlyData?.map((key: any) => {
          arrLabel_M.push(key.label);
          arrData_M.push(key.value);
        });
        setMonthlyLabel_A(arrLabel_M);
        setMonthlyData_A(arrData_M);
      })
      .catch((err: any) => {
        console.log('error...', err.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Wrapper>
        <HomeHeader
          myTheme={theme}
          title={'Insights'}
          cardText={'Spend & Earn'}
          backgroundColor={colorCode}
          menuButtonPressed={menuButtonPressed}
        />

        <TabWidget
          firstTabTitle="Overview"
          secondTabTitle="Transactions"
          tabSelectedIndex={selectedTab}
          setTabSelectedIndex={setSelectedTab}
          getOffers={getOffers}
          getMyProducts={getMyProducts}
        />

        {loading ? (
          <CustomLoader />
        ) : (
          selectedTab == 0 && (
            <ScrollView style={[GST.mt20, {paddingHorizontal: RF(10)}]}>
              {weeklyData.length > 0 && (
                <Charts
                  label={
                    selectedRewards == 'weekly' ? weeklyLabel : monthlyLabel
                  }
                  data={selectedRewards == 'weekly' ? weeklyData : monthlyData}
                  title={'Reward Points Earned'}
                  selectedRewards={selectedRewards}
                  setSelectedRewards={setSelectedRewards}
                />
              )}
              {weeklyData_A.length > 0 && (
                <Charts
                  label={
                    selected_AmountSpent == 'weekly'
                      ? weeklyLabel_A
                      : monthlyLabel_A
                  }
                  data={
                    selected_AmountSpent == 'weekly'
                      ? weeklyData_A
                      : monthlyData_A
                  }
                  title={'Amount Spent'}
                  selectedRewards={selected_AmountSpent}
                  setSelectedRewards={setSelected_AmountSpent}
                />
              )}
              <View style={{marginBottom: 100}} />
            </ScrollView>
          )
        )}

        {selectedTab == 1 && <Transactions />}
      </Wrapper>
    </>
  );
};

export default Insights;
