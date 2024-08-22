import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface Job {
    "Job ID": string;
    "Job Title": string;
    "Experience": string;
    "Location": string;
    "Salary": string;
    "Qualifications": string;
    "Type": string;
}

const initialState: Job = {
    "Job ID": "",
    "Job Title": "",
    "Experience": "",
    "Location": "",
    "Salary": "",
    "Qualifications": "",
    "Type": "",
};

export const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {

        // @ts-ignore
        setJob: (state, action: PayloadAction<{ id: string; details: Job }>) => {
            const { id, details } = action.payload;

            state["Job ID"] = id;
            state["Job Title"] = details["Job Title"];
            state["Experience"] = details["Experience"];
            state["Location"] = details["Location"];
            state["Salary"] = details["Salary"];
            state["Qualifications"] = details["Qualifications"];
            state["Type"] = details["Type"];
        },
    },
});


export const { setJob } = jobSlice.actions;

export const selectJob = (state: RootState) => state.job;

// export reducer
export default jobSlice.reducer;