import { combineReducers } from "redux";
import { productReducer } from "./reducers/productReducer";


export const rootReducer=combineReducers(
    {
        allProducts:productReducer
    }
)

