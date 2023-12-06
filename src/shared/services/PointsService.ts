import {ENDPOINTS, HTTP_CLIENT} from '@utils';

export const fetch_Account_Summary = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_ACCOUNT_SUMMARY);
};
