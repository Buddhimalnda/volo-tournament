import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: {},
  members: [[], [], [], [], [], [], [], []],
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
      switch (action.payload.id) {
        case 0:
          state.members[action.payload.i][0] = action.payload.value;
          break;
        case 1:
          state.members[action.payload.i][1] = action.payload.value;
          break;
        case 2:
          state.members[action.payload.i][2] = action.payload.value;
          break;
        case 3:
          state.members[action.payload.i][3] = action.payload.value;
          break;
        case 4:
          state.members[action.payload.i][4] = action.payload.value;
          break;
        default:
          console.log(state.members[action.payload.i]);
          break;
      }
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
