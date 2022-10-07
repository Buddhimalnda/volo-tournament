import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: {},
  members: {},
  bank: {},
};

export const regSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addTeamDetails: (state, action) => {
      state.team = action.payload;
    },
    addMembersDetails: (state, action) => {
      state.members = action.payload;
    },
    addBankDetail: (state, action) => {
      state.bank = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTeamDetails, addMembersDetails, addBankDetail } =
  regSlice.actions;

export default regSlice.reducer;
