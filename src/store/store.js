import { configureStore } from "@reduxjs/toolkit";
import openSlice from "./openSlice";

const store = configureStore({
    reducer: {
        open: openSlice,
    },
});

export default store;