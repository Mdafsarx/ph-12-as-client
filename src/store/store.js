import { configureStore } from "@reduxjs/toolkit";
import openSlice from "./openSlice";
import faqCounterSlice from "./faqCounterSlice";

const store = configureStore({
    reducer: {
        open: openSlice,
        faq: faqCounterSlice
    },
});

export default store;