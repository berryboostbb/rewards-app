import {ENDPOINTS, HTTP_CLIENT} from '@utils';

export const fetchSummary = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_SUMMARY);
};

//bap
export const fetchBrands = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.GET_BRANDS, params);
};
export const favorite_topPicks = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SET_BMP_FAVORITE, params);
};
export const fetchStores = (data: any) => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_STORES);
};
export const fetchStoresByLocation = (data: any) => {
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_STORES}?getLogos=` + data.getLogos);
};
export const fetchTopPicks = (data: any) => {
  let filterUrl = '';
  if (data.filter == 'favourite') {
    filterUrl = `${ENDPOINTS.GET_TOPPICKS}?filter=` + data.filter;
  } else {
    filterUrl = ENDPOINTS.GET_TOPPICKS;
  }
  return HTTP_CLIENT.get(filterUrl);
  // return HTTP_CLIENT.get(`${ENDPOINTS.GET_TOPPICKS}?filter=` + data.filter);
};
export const fetchPromotions_Notification = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.GET_PROMOTION_NOTIFICATION, params);
};
export const favouriteBAP_Promotion = (data: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SET_FAVORITE_BAP, data);
};
export const fetchNearMe = (data: any) => {
  let filterUrl = '';
  if (data?.filter == 'favourite') {
    filterUrl =
      `${ENDPOINTS.NEAR_ME}?searchText=` +
      data.searchText +
      '&paginated=' +
      data.paginated +
      '&page=' +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&filter=' +
      data.filter +
      '&latitude=' +
      data.latitude +
      '&longitude=' +
      data.longitude +
      '&category=' +
      data.category +
      '&subcategory=' +
      data.subcategory;
  } else {
    filterUrl =
      `${ENDPOINTS.NEAR_ME}?searchText=` +
      data.searchText +
      '&paginated=' +
      data.paginated +
      '&page=' +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&latitude=' +
      data.latitude +
      '&longitude=' +
      data.longitude +
      '&category=' +
      data.category +
      '&subcategory=' +
      data.subcategory;
  }
  return HTTP_CLIENT.get(filterUrl);
};
export const fetchNearMe_Detail = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.NEAR_ME_DETAIL}?storeId=` +
      data.storeId +
      '&campaignId=' +
      data.campaignId,
  );
};
export const update_Clicks_BAP = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_CLICKS_BAP, params);
};
export const update_Impressions = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_IMPRESSIONS, params);
};

//bmp
export const update_Clicks_BMP = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_CLICKS_BMP, params);
};
export const update_Impressions_BMP = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.UPDATE_IMPRESSIONS_BMP, params);
};
export const favorite_BMP_Promotion = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SET_BMP_FAVORITE, params);
};
export const fetchForMeBrands = async (data: any) => {
  let res: any = await HTTP_CLIENT.get(
    `${ENDPOINTS.FOR_ME}?page=` +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&paginated=' +
      data.paginated +
      '&company_id=' +
      data?.company_id,
  );

  return res;
};
export const fetchForMe = async (data: any) => {
  let filterUrl = '';
  if (data.filter == 'favourite') {
    filterUrl =
      `${ENDPOINTS.FOR_ME}?page=` +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&paginated=' +
      data.paginated +
      '&filter=' +
      data.filter;
  } else {
    filterUrl =
      `${ENDPOINTS.FOR_ME}?page=` +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&paginated=' +
      data.paginated;
    // +
    // '&searchText=' +
    // data.searchText;
  }
  return HTTP_CLIENT.get(filterUrl);
};
export const fetchForMe_Detail = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.FOR_ME_DETAIL}?campaign_id=` + data.campaign_id,
  );
};
export const fetchBrands_Detail = async (data: any) => {
  let res = await HTTP_CLIENT.get(
    `${ENDPOINTS.BRAND_DETAIL}?company_id=` + data.company_id,
  );
  return res;
};

export const fetchCategoryByName = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.GET_CATEGORY_BY_NAME}?page=` +
      data.page +
      '&itemsPerPage=' +
      data.perPage +
      '&searchText=' +
      data.searchText,
  );
};
export const fetchAllCategories = () => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_ALL_CATEGORIES);
};
export const fetchFeaturedList = (params: any) => {
  return HTTP_CLIENT.get(ENDPOINTS.GET_FEATURED_LIST + params);
};

export const fetchAllCampaigns = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.GET_ALL_CAMPAIGNS}?page=` +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&searchText=' +
      data.searchText +
      '&paginated=' +
      data.paginated +
      '&filteredOnly=' +
      data.filteredOnly +
      '&latitude&longitude&' +
      data.filter +
      '&category=' +
      data.category +
      '&subcategory=' +
      data.subcategory,
  );
};
export const favouriteCampaign = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.FAVOURITE_CAMPAIGN, params);
};
export const getSingleCampaign = (data: any) => {
  return HTTP_CLIENT.get(
    ENDPOINTS.GET_SINGLE_CAMPAIGN + data.id + '?campaignId=' + data.campaign_id,
  );
};

export const getStoreDetail = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.GET_STORE_DETAIL}?storeId=` + data.storeId,
  );
};
