import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

export const initialState = {
    rotating: false,
    some: "some text"
}


function configureStore(state = initialState) {
    return createStore(rotateReducer, state);
}

export default configureStore;