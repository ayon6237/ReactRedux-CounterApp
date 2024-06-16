import { DECREMENT, INCREMENT, RESET } from "../Constant/Constant"

export const stateIncrement = ()=>{
    return {
        type:INCREMENT
    }
}
 export const stateDecrement = ()=>{
    return {
        type:DECREMENT
        }
}
 export const stateReset = ()=>{
    return {
        type:RESET
    }
}