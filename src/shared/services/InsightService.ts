import {ENDPOINTS, HTTP_CLIENT} from '@utils';

export const fetchTransactions = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.GET_TRANSACTIONS}?page=` +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&searchText=' +
      data.searchText +
      '&startDate' +
      data.startDate +
      '&endDate' +
      data.endDate,
  );
};

export const fetchRewardCharts = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_REWARDS_CHARTS);
};

export const fetchAmountCharts = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_AMOUNT_CHARTS);
};
