import {
    getMenuDataAction,
    getCarDamageAction,
    getCarDetailsAction,
    getCarDamageActionApi,
    addCatDamageDetailsAction
} from "../actions/Action";
import fakeData from "./fakeData"
import {addCatDamageDetails, getCarDamage} from "../services/ApiServices";

export const getMenuDataEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getMenuData()
            console.log(res.data, "inefffect");
            dispatch(getMenuDataAction(res.data))
        } catch (e) {
            console.log(e.message)
        }
    }
}



export const getCarDamageEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            // Todo Remove The Fake Data And UnComment This Service
            // const res = await services.getCarDamage()

            const res = fakeData

            dispatch(getCarDamageAction(res.data))

        } catch (e) {
            console.log("getCarDamageEffect", e.message)
        }
    }
}

export const getCarDetailsEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getCarDetails()
            console.log(res.data);
            dispatch(getCarDetailsAction(res.data))
        } catch (e) {
            console.log(e, "getCarDetailsEffect");
        }
    }
}

export const getCarDamageEffectApi = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await getCarDamage()
            dispatch(getCarDamageActionApi(res.data))
        } catch (e) {
            console.log(e, "getCarDamageEffectApi");
        }
    }
}

export const addCarDamageDetailsEffect = (body) => {
    return async (dispatch, getState, services) => {
        try {
            const res = await addCatDamageDetails(body)
            dispatch(addCatDamageDetailsAction(res.data))
        } catch (e) {
            console.log(e, "addCarDamageDetailsEffect");
        }
    }
}