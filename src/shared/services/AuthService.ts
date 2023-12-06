import {ENDPOINTS, HTTP_CLIENT, BASE_URL} from '@utils';

export const login = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const getUser = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_USER);
};

export const getInterests = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_INTEREST);
};

export const getBrands = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_SIGNUP_BRANDS);
};

export const verifySignUp_Otp = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.VERIFY_SIGNUP_OTP, params);
};

export const sendSignUp_Otp = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SEND_SIGNUP_OTP, params);
};

export const signUp = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGNUP, params);
};

export const reset_password = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.RESET_PASSWORD, params);
};

export const forgetPassword = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.FORGOT_PASSWORD, params);
};
