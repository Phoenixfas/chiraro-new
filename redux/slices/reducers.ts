import { combineReducers } from "@reduxjs/toolkit";
import wTypeReducer from "./wTypeSlice";
import orderModalReducer from "./orderModalSlice";
import packageReducer from "./packageSlice";

export const rootReducer = combineReducers({
    wType: wTypeReducer,
    orderModal: orderModalReducer,
    package: packageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
