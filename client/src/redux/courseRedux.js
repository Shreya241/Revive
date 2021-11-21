import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "cart",
  initialState: {
    courses: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = courseSlice.actions;
export default courseSlice.reducer;
