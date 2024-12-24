import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

const faqCounterSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        setFaq: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setFaq } = faqCounterSlice.actions;
export default faqCounterSlice.reducer;