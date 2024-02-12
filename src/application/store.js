import { configureStore } from "@reduxjs/toolkit";
import  CounterReducer  from "../Features/CounterSlice";

export const store=configureStore({
reducer:{
    counter:CounterReducer
}
});

export default store;