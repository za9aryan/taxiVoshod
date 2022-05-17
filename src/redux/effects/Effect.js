import { getMenuDataAction, getCarDamageAction, getCarDetailsAction } from "../actions/Action";
import fakeData from "./fakeData"

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
            // Todo Remove The Fake Data And UnComment This Service
            const res = await services.getCarDamage()
            if(typeof res.data === "string") return
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
            dispatch(getCarDetailsAction(res.data))
        } catch (e) {
            console.log(e, "getCarDetailsEffect");
        }
    }
}