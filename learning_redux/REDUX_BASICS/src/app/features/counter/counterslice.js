import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
            if (state.value === 0) {
                return state.value
            }
        },
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
