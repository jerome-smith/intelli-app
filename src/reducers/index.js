/**
 * Created by stan229 on 5/27/16.
 */
import { combineReducers } from "redux";
import NavReducer from './NavReducer'
import userData from "./PeopleReducer";


export default function getRootReducer() {
    return combineReducers({
        userData: userData
    });
}