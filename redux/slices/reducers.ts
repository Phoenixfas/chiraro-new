import { combineReducers } from "@reduxjs/toolkit";
import wTypeReducer from "./wTypeSlice";
import orderModalReducer from "./orderModalSlice";
import packageReducer from "./packageSlice";
import jobappReducer from "./jobappModalSlice";
import jobReducer from "./jobSlice";

export const rootReducer = combineReducers({
    wType: wTypeReducer,
    orderModal: orderModalReducer,
    package: packageReducer,
    jobappModal: jobappReducer,
    job: jobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
