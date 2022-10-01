import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/countSlice";
import sampleReducer from "../features/sampleSlice";

export default configureStore({
    reducer: {
        count: countSlice,
        sample: sampleReducer,
    },
});
