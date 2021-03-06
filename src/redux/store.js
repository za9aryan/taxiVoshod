import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";
import * as ApiServices from "./services/ApiServices";

const store = configureStore({
    reducer: {reducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: ApiServices
            }
        })
})

export default store;