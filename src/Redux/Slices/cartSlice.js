import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    stateSection: {
      heroSection: false,
    },
  },
  reducers: {
    stateHero: (state, action) => {
      state.stateSection.heroSection = action.payload;
    },
  },
});
export const { stateHero } = cartSlice.actions;

export default cartSlice.reducer;
