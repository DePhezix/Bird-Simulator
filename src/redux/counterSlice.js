import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    editAmount: (state, action) => {
      state.value = action.payload
    }
  },
});

export const { editAmount } = counterSlice.actions;

export default counterSlice.reducer;
