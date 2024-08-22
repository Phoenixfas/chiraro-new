import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface JobappModal {
    value: boolean;
}

const initialState: JobappModal = {
    value: false,
};

// create slice
export const jobappModalSlice = createSlice({
    name: "jobappModal",
    initialState,
    reducers: {
        // define action to change active blog

        // @ts-ignore
        toggleModal: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});


// export actions
export const { toggleModal } = jobappModalSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectJobappModal = (state: RootState) => state.jobappModal;

// export reducer
export default jobappModalSlice.reducer;
