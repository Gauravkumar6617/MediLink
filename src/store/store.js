import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/testSlice"

const store=configureStore({
    reducer:{
        counter: testReducer,
    }
});

export default store;