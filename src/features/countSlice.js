import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: "count",
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + action.payload;
        },
        decrement: (state, action) => {
            return state - action.payload;
        },
    },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
