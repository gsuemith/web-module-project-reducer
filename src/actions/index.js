export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const STORE_MEMORY = "STORE_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = op => {
    return({type:CHANGE_OPERATION, payload:op});
}

export const storeMemory = () => ({type:STORE_MEMORY})

export const clearMemory = () => ({type:CLEAR_MEMORY})