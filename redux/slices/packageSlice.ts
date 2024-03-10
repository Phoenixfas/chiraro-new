import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// define blog state as an object with name, image, type, content, and date
export interface Package {
    value: string;
}

// define initial state
const initialState: Package = {
    value: "",
};

// create slice
export const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        setPackage: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});


// export actions
export const { setPackage } = packageSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectPackage = (state: RootState) => state.package;

// export reducer
export default packageSlice.reducer;
