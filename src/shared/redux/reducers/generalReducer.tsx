import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  points: null,
};

export const generalReducer = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setPointsData: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const {setPointsData} = generalReducer.actions;

export default generalReducer.reducer;
