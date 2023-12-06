import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  firstLogin: true,
  user: null,
  password: null,
  authToken: null,
  isLoggedIn: false,
  userFormData: {
    firstName: '',
    lastName: '',
    dob: new Date(),
    homeAddress: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    category: [],
  },
  colorCode: '#19383A',
  captureFlag: false,
  stores: [],
  fcm_token: null,
  notification_counter: 0,
  selectedRadius: 50,
  latLon: 0,
  nearMe: [],
  forMe: [],
  fav_Offers: [],
  fav_MyProducts: [],
  fav_TopPicks: [],
  explore_Bmp: [],
  explore_Bap: [],
  top_Picks: [],
  bmp_detail: [],
  bap_detail: [],
  notifications: {},
  add_A_Card: 'add',
  card_Added: false,
  card_Number: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstLogin: (state, action) => {
      state.firstLogin = action.payload;
    },
    setFav_TopPicks: (state, action) => {
      state.fav_TopPicks = action.payload;
    },
    setFav_Offers: (state, action) => {
      state.fav_Offers = action.payload;
    },
    setFav_MyProducts: (state, action) => {
      state.fav_MyProducts = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setStores: (state, action) => {
      state.stores = action.payload;
    },
    setExploreBmp: (state, action) => {
      state.explore_Bmp = action.payload;
    },
    setAdd_A_Card: (state, action) => {
      state.add_A_Card = action.payload;
    },
    setCard_Added: (state, action) => {
      state.card_Added = action.payload;
    },
    setCard_Number: (state, action) => {
      state.card_Number = action.payload;
    },
    setExploreBap: (state, action) => {
      state.explore_Bap = action.payload;
    },
    setBAP_Detail: (state, action) => {
      state.bap_detail = action.payload;
    },
    setBMP_Detail: (state, action) => {
      state.bmp_detail = action.payload;
    },
    setNearMe: (state, action) => {
      state.nearMe = action.payload;
    },
    setTop_Picks: (state, action) => {
      state.top_Picks = action.payload;
    },
    setForMe: (state, action) => {
      state.forMe = action.payload;
    },
    setLatLon: (state, action) => {
      state.latLon = action.payload;
    },
    setNotification_counter: (state, action) => {
      state.notification_counter = action.payload;
    },
    setSelectedRadius: (state, action) => {
      state.selectedRadius = action.payload;
    },
    setCaptureFlag: (state, action) => {
      state.captureFlag = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setColorCode: (state, action) => {
      state.colorCode = action.payload;
    },
    setUserFormData: (state, action) => {
      state.userFormData = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setFCMToken: (state, action) => {
      state.fcm_token = action.payload;
    },
    signOut: state => {
      state.user = null;
      state.colorCode = '#19383A';
      state.authToken = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  setFav_MyProducts,
  setFav_Offers,
  setFav_TopPicks,
  setCard_Number,
  setCard_Added,
  setAdd_A_Card,
  setBAP_Detail,
  setBMP_Detail,
  setTop_Picks,
  setExploreBap,
  setExploreBmp,
  setForMe,
  setNearMe,
  setLatLon,
  setSelectedRadius,
  setNotification_counter,
  setUser,
  signOut,
  setFCMToken,
  setPassword,
  setColorCode,
  setAuthToken,
  setIsLoggedIn,
  setUserFormData,
  setCaptureFlag,
  setStores,
  setNotifications,
  setFirstLogin,
} = userReducer.actions;

export default userReducer.reducer;
