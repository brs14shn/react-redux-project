import { ProductTypes } from "../types/productTypes";


export const setProducts=(products)=>{
    return {
        type:ProductTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedProduct=(product)=>{
    return {
        type:ProductTypes.SELECTED_PRODUCT,
        payload:product,
    }
}
export const removePoduct=(product)=>{
    return {
        type:ProductTypes.REMOVE_SELECTED_PRODUCT,
        payload:product,
    }
}
