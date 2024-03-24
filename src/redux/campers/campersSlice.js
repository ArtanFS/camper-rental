import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getCampersByPage } from './campersApi';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGetCampers = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.campers = payload;
};

const handleFulfilledGetCampersByPage = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownCampers.push(...payload);
};

const initialState = {
  campers: [],
  shownCampers: [],
  favCampers: [],
  filteredCampers: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,

  reducers: {
    // showFavCampers(state) {
    //   state.shownBoard = {
    //     columns: [],
    //   };
    // },
    deleteShownCampers(state) {
      state.shownCampers = [];
    },
    setFavCampers(state, { payload }) {
      const favCamperIdx = state.favCampers.findIndex(
        camper => camper._id === payload._id
      );
      if (favCamperIdx !== -1) state.favCampers.splice(favCamperIdx, 1);
      else state.favCampers.push(payload);
    },
    setFilteredCampers(state, { payload }) {
      state.filteredCampers = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getCampers.fulfilled, handleFulfilledGetCampers)
      .addCase(getCampersByPage.fulfilled, handleFulfilledGetCampersByPage)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const campersReducer = campersSlice.reducer;
export const { deleteShownCampers, setFavCampers, setFilteredCampers } =
  campersSlice.actions;
