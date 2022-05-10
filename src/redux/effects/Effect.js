import { getMenuDataAction, getCarDamageAction, getCarDetailsAction } from "../actions/Action";

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
            const res = await services.getCarDamage()
            console.log(res)
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