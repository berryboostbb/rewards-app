import {ENDPOINTS, HTTP_CLIENT} from '@utils';

// export const fetchSummary = () => {
//   return HTTP_CLIENT.get(ENDPOINTS.GET_SUMMARY);
// };
// export const fetchCategories_BAP = (params: any) => {
//   return HTTP_CLIENT.get(ENDPOINTS.GET_CATEGORIES_BAP, params);
// };

export const fetchCategories_BMP = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.GET_CATEGORIES_BMP, params);
};

export const fetchSubCategories_BMP = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.GET_SUBCATEGORIES_BMP, params);
};

export const fetchCategories_BAP = (data: any) => {
  return HTTP_CLIENT.get(
    `${ENDPOINTS.GET_CATEGORIES_BAP}?paginated=true=` +
      data.paginated +
      '&page=' +
      data.page +
      '&itemsPerPage=' +
      data.itemsPerPage +
      '&searchText=' +
      data.searchText,
  );
};
export const fetchSubCategories_BAP = (params: any) => {
  // console.log('sssscccccccc', `${ENDPOINTS.GET_SUBCATEGORIES_BAP}/` + params);
  return HTTP_CLIENT.get(`${ENDPOINTS.GET_SUBCATEGORIES_BAP}/` + params);
};
