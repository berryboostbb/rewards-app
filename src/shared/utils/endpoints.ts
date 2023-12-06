const BASE_URL = 'https://tservice.plastk.ca/';
// const BASE_URL = 'https://staging.service.plastk.ca/';
// const BASE_URL = 'https://dev.service.plastk.ca/rewards_app/';

const ENDPOINTS = {
  //...........login..........
  LOGIN: 'reward_app/auth/login',
  GET_USER: 'user/get-single-user',

  //..........signUp..........
  SIGNUP: 'reward_app/auth/signup',
  RESET_PASSWORD: 'reward_app/auth/reset-password',
  FORGOT_PASSWORD: 'reward_app/auth/forgot-password',
  GET_INTEREST: 'reward_app/user/intrest-list',
  GET_SIGNUP_BRANDS: 'reward_app/user/intrest-list-brands',
  VERIFY_SIGNUP_OTP: 'reward_app/auth/verify-otp-code',
  SEND_SIGNUP_OTP: 'reward_app/auth/send-otp-code',

  //..........scan..............
  SCAN_ORDER: 'rewards_app/order/scan-order/',
  PAY_ORDER: 'order/pay/',
  SCAN_RECIEPT: 'reward_app/scan-receipt',

  // //...............Home............
  GET_SUMMARY: 'transactions/get-summary',
  GET_ALL_CATEGORIES: 'categories/get-all',
  GET_FEATURED_LIST: 'categories/by-parent/',
  GET_ALL_CAMPAIGNS: 'promotion/campaigns',
  GET_CATEGORY_BY_NAME: 'categories/get-categories',
  FAVOURITE_CAMPAIGN: 'promotion/favorite-campaign',
  GET_SINGLE_CAMPAIGN: 'promotion/campaigns/',
  // CHARTS: 'cards/mobile-charts',

  //new Home Api's
  FOR_ME: 'bmp-rewards/for-me-list',
  FOR_ME_DETAIL: 'bmp-rewards/get-for-me-detail',
  PROMOTION_POINTS: 'promotion/brand-promotion-points',
  //new Home Api's BAP
  NEAR_ME: 'bap-rewards/get-promotions',
  NEAR_ME_DETAIL: 'bap-rewards/get-promotion-detail',
  GET_PROMOTION_NOTIFICATION: 'bap-rewards/send-promotion-notification',
  GET_STORES: 'bap-rewards/active-stores-list',
  SET_FAVORITE_BAP: 'bap-rewards/mark-as-favorite',
  UPDATE_CLICKS_BAP: 'bap-rewards/update-clicks',
  UPDATE_IMPRESSIONS: 'bap-rewards/update-impression',
  GET_STORE_DETAIL: 'bap-rewards/get-store-detail',

  //new Home Api's BMP
  GET_TOPPICKS: 'bmp-rewards/top-picks',
  GET_BRANDS: 'bmp-rewards/get-brands-list',
  BRAND_DETAIL: 'bmp-rewards/get-brand-detail',
  UPDATE_CLICKS_BMP: 'bmp-rewards/update-clicks',
  SET_BMP_FAVORITE: 'bmp-rewards/brand-favourite-campaign',
  UPDATE_IMPRESSIONS_BMP: 'bmp-rewards/update-impression',

  //EXPLORE bap
  GET_CATEGORIES_BAP: 'bap-rewards/get-categories',
  GET_SUBCATEGORIES_BAP: 'bap-rewards/get-subcategory',

  //EXPLORE bmp
  GET_CATEGORIES_BMP: 'bmp-rewards/get-categories-list',
  GET_SUBCATEGORIES_BMP: 'bmp-rewards/get-sub-categories-list',

  // //............profile...............
  UPDATE_PROFILE: 'reward_app/user/update-profile',
  UPDATE_PASSWORD: 'reward_app/user/change-password',
  GET_CONTACTUS_TITLE: 'reward_app/user/contactus-title',
  CONTACT_US: 'reward_app/user/contact-us',
  GET_NOTIFICATIONS: 'reward_app/user/notification-setting',
  UPDATE_NOTIFICATIONS: 'reward_app/user/update-notification',
  GET_FAQ_KEYWORD: 'reward_app/faq/get-kewords',
  GET_FAQ_LIST: 'reward_app/faq/list',
  CREATE_CARD: 'reward_app/user/create-card',
  GET_CARD_LIST: 'reward_app/user/cards-list',
  REMOVE_CARD: 'reward_app/user/remove-card',

  //...............insights
  GET_TRANSACTIONS: 'reward_app/transactions-list',
  GET_REWARDS_CHARTS: 'reward_app/reward-points-chart',
  GET_AMOUNT_CHARTS: 'reward_app/reward-amount-chart',

  //..........POINTS
  GET_ACCOUNT_SUMMARY: 'reward_app/account-summary',
};

export {BASE_URL, ENDPOINTS};
