import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface OrderModal {
    value: boolean;
}

const initialState: OrderModal = {
    value: false,
};

// create slice
export const orderModalSlice = createSlice({
    name: "orderModal",
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
export const { toggleModal } = orderModalSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectOrderModal = (state: RootState) => state.orderModal;

// export reducer
export default orderModalSlice.reducer;
