import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

const openSlice = createSlice({
    name: "open",
    initialState,
    reducers: {
        toggleOpen: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggleOpen } = openSlice.actions;
export default openSlice.reducer;