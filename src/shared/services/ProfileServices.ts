import {ENDPOINTS, HTTP_CLIENT} from '@utils';

export const update_profile = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_PROFILE, params);
};
export const update_password = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_PASSWORD, params);
};
export const get_contactUs_title = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_CONTACTUS_TITLE);
};
export const contactUs = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.CONTACT_US, params);
};
export const fetch_Notifications = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_NOTIFICATIONS);
};

export const update_notifications = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_NOTIFICATIONS, params);
};

export const fetchFaq_Keyword = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_FAQ_KEYWORD);
};

export const fetchFaq_List = (data: any) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_FAQ_LIST}?keyword=` + data.keyword);
};

export const fetchCard_List = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_CARD_LIST);
};
export const create_Card = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.CREATE_CARD, params);
};
export const remove_Card = (data: any) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.REMOVE_CARD}?card_id=` + data.card_id);
};
