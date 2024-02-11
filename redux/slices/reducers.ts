import { combineReducers } from "@reduxjs/toolkit";
import wTypeReducer from "./wTypeSlice";

export const rootReducer = combineReducers({
    wType: wTypeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
