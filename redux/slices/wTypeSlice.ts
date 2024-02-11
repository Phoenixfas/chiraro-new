import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with name, image, type, content, and date
export interface WType {
    value: string;
}

// define initial state
const initialState: WType = {
    value: "static",
};

// create slice
export const wTypeSlice = createSlice({
    name: "wType",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        changeWType: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});


// export actions
export const { changeWType } = wTypeSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectWType = (state: RootState) => state.wType;

// export reducer
export default wTypeSlice.reducer;
