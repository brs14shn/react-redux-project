import {createStore} from "redux";
import {rootReducer}from "./index"



const store=createStore(rootReducer,{})

// export const getStore = () => {
//     const store = createStore(rootReducer);
//     return store;
//   };

export default store;