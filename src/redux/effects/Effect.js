import {
    // getMenuDataAction,
    // getCarDamageAction,
    // getCarDetailsAction,
    // getCarDamageActionApi,
    // addCatDamageDetailsAction,
    // getCarAllInformationAction,
    postCarAllInformationAction,
    setSuccessCarAllInformationAction,
    getMenuDataAction,
    getCarDamageAction,
    getCarDetailsAction,
    addCatDamageDetailsAction,
    getCarAllInformationAction, successFalseAction,
} from "../actions/Action";
import { addCatDamageDetails } from "../services/ApiServices";

export const getMenuDataEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getMenuData();
            dispatch(getMenuDataAction(res.data));
        } catch (e) {
            const res = await services.getMenuData();
            dispatch(getMenuDataAction(res.data));
        }
    };
};

export const getCarDamageEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const result = await services.getCarDamage();
            dispatch(getCarDamageAction(result.data));
        } catch (e) {
            console.log("getCarDamageEffect", e.message);
        }
    };
};

export const getCarDetailsEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getCarDetails();
            dispatch(getCarDetailsAction(res.data));
        } catch (e) {
            console.log(e, "getCarDetailsEffect");
        }
    };
};
export const addCarDamageDetailsEffect = (body, deleteItem = false) => {
  return async (dispatch, getState, services) => {
    try {
      const res = await addCatDamageDetails(body);
      if (res.data.success) {
        dispatch(getCarDamageEffect());
      }
      dispatch(addCatDamageDetailsAction(res.data, deleteItem));
    } catch (e) {
      console.log(e, "addCarDamageDetailsEffect");
    }
  };
};

export const successFalse = () => {
    return async dispatch => {
        dispatch(successFalseAction())
    };
}

export const getCarAllInformationEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getCarAllInformation();

            dispatch(getCarAllInformationAction(res.data));
        } catch (e) {
            console.log("getCarAllInformation", e.message);
        }
    };
};

export const finallyFinishEffect = (button) => {
    return async (dispatch, getState, services) => {
        try {
            const formData = new FormData();
            formData.append("button", button);
            const res = await services.finallyFinish(formData);

            dispatch(postCarAllInformationAction(res.data));
        } catch (e) {
            console.log("finallyFinishEffect", e.message);
        }
    };
};

export const setSuccessCarAllInformationEffect = (button) => {
    return async (dispatch, getState, services) => {
        try {

            dispatch(setSuccessCarAllInformationAction({}));
        } catch (e) {
            console.log("finallyFinishEffect", e.message);
        }
    };
};
