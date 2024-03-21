import { createSlice } from '@reduxjs/toolkit';
import { getCampers } from './campersApi';
// import {
//   getColumns,
//   addColumn,
//   deleteColumn,
//   updateColumnById,
// } from './columnApi';
// import {
//   addCard,
//   deleteCard,
//   editCard,
//   fetchCards,
//   transportCard,
// } from '../card/CardApi';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

// const handleFulfilledGetColumns = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   state.shownBoard.columns = payload;
// };

const handleFulfilledGetCampers = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  if (payload.length) {
    if (!state.campers.length) state.campers.push(...payload);
    else if (state.campers[0]._id !== payload[0]._id)
      state.campers.push(...payload);
  }

  // if (payload.length && payload[0]._id) {
  //   const columnIdx = state.shownBoard.columns.findIndex(
  //     col => col._id === payload[0].columnId
  //   );
  //   if (!state.shownBoard.columns[columnIdx].cards.length)
  //     state.shownBoard.columns[columnIdx].cards.push(...payload);
  // }
};

// const handleFulfilledAddColumn = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   payload.cards = [];
//   state.shownBoard.columns.push(payload);
// };

// const handleFulfilledUpdateColumnById = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   const array = state.shownBoard.columns;
//   console.log(array);
//   const columnIndex = array.findIndex(el => el._id === payload._id);
//   if (columnIndex !== -1) {
//     array[columnIndex].title = payload.title;
//   }
// };

// const handleFulfilledDeleteColumn = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   state.shownBoard.columns = state.shownBoard.columns.filter(
//     ({ _id }) => _id !== payload
//   );
// };

// const handleFulfilledAddCard = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   const columns = state.shownBoard.columns;
//   const columnIdx = columns.findIndex(col => col._id === payload.columnId);
//   if (columnIdx !== -1) {
//     columns[columnIdx].cards.push(payload);
//   }
// };

// const handleFulfilledEditCard = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   const columns = state.shownBoard.columns;
//   const columnIdx = columns.findIndex(col => col._id === payload.columnId);
//   if (columnIdx !== -1) {
//     columns[columnIdx].cards = columns[columnIdx].cards.map(card =>
//       card._id === payload._id ? (card = payload) : card
//     );
//   }
// };

// const handleFulfilledDeleteCard = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   const columns = state.shownBoard.columns;
//   const columnIdx = columns.findIndex(col => col._id === payload.columnId);
//   if (columnIdx !== -1) {
//     columns[columnIdx].cards = columns[columnIdx].cards.filter(
//       ({ _id }) => _id !== payload._id
//     );
//   }
// };

// const handleFulfilledTransportCard = (state, { payload }) => {
//   console.log(payload);
//   state.isLoading = false;
//   state.error = null;
//   const columns = state.shownBoard.columns;
//   const newColumnIdx = columns.findIndex(col => col._id === payload.columnId);
//   if (newColumnIdx !== -1) {
//     columns[newColumnIdx].cards.push(payload);
//   }

//   const oldColumnIndex = columns.findIndex(
//     col => col._id === payload.oldColumnId
//   );
//   if (oldColumnIndex !== -1) {
//     columns[oldColumnIndex].cards = columns[oldColumnIndex].cards.filter(
//       ({ _id }) => _id !== payload._id
//     );
//   }
// };

const initialState = {
  campers: [],
  favCampers: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,

  //   reducers: {
  //     showFavCampers(state) {
  //       state.shownBoard = {
  //         columns: [],
  //       };
  //     },
  //     setShowBoard(state, action) {
  //       state.shownBoard = {
  //         ...action.payload,
  //         columns: [],
  //       };
  //     },
  //   },

  extraReducers: builder =>
    builder
      //   .addCase(addCard.fulfilled, handleFulfilledAddCard)
      //   .addCase(editCard.fulfilled, handleFulfilledEditCard)
      //   .addCase(transportCard.fulfilled, handleFulfilledTransportCard)
      //   .addCase(deleteCard.fulfilled, handleFulfilledDeleteCard)
      .addCase(getCampers.fulfilled, handleFulfilledGetCampers)
      //   .addCase(fetchCards.fulfilled, handleFulfilledGetCards)
      //   .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      //   .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      //   .addCase(updateColumnById.fulfilled, handleFulfilledUpdateColumnById)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const campersReducer = campersSlice.reducer;
// export const { showBoard, setShowBoard } = columnsSlice.actions;
