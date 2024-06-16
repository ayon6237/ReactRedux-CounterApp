
import {createStore} from "redux";
import { stateReducers } from "../Reducers/Reducers";



export const store = createStore(stateReducers);