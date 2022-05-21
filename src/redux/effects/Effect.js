// import { getMenuDataAction, getCarDamageAction, getCarDetailsAction } from "../actions/Action";
import {
    getMenuDataAction,
    getCarDamageAction,
    getCarDetailsAction,
    addCatDamageDetailsAction
} from "../actions/Action";
// import fakeData from "./fakeData"
import {addCatDamageDetails} from "../services/ApiServices";

export const getMenuDataEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getMenuData()
            dispatch(getMenuDataAction(res.data))
        } catch (e) {
            const res = await services.getMenuData()
            dispatch(getMenuDataAction(res.data))
        }
    }
}



export const getCarDamageEffect = () => {
    return async (dispatch, getState, services) => {
        try {

            const result = await services.getCarDamage()
            dispatch(getCarDamageAction(result.data))

        } catch (e) {
            console.log("getCarDamageEffect", e.message)
        }
    }
}

export const getCarDetailsEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getCarDetails()
            dispatch(getCarDetailsAction(res.data))
        } catch (e) {
            console.log(e, "getCarDetailsEffect");
        }
    }
}

export const addCarDamageDetailsEffect = (body) => {
    return async (dispatch, getState, services) => {
        try {
            const res = await addCatDamageDetails(body)
            if(res.data.success) {
                dispatch(getCarDamageEffect());
            }
            dispatch(addCatDamageDetailsAction(res.data))
        } catch (e) {
            console.log(e, "addCarDamageDetailsEffect");
        }
    }
}