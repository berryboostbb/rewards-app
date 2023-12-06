import {ENDPOINTS, HTTP_CLIENT} from '@utils';

export const scan_Order = (params: any) => {
  return HTTP_CLIENT.post(`${ENDPOINTS.SCAN_ORDER}` + params);
};

export const pay_Order = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.PAY_ORDER, params);
};

export const scan_receipt = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SCAN_RECIEPT, params);
};

// https://staging.service.plastk.ca/reward_app/promotion/brand-promotion-points
export const promotion_Points = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.PROMOTION_POINTS, params);
};
