import axios from "axios"

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "https://mechanic.taxivoshod..ru"

export const Axios = axios.create({
    baseURL: apiBaseUrl
});

export const getMenuData = async () => {
    return await Axios.get("/api/?page=menu")
}


export const getCarDamage = async () => {
    return await Axios.get("/api/?page=damage")
}

export const addCatDamageDetails = async (body) => {
    return await Axios.post("/api/?page=damage", body)
}


export const getCarDetails = async () => {
    return await Axios.get("/api/?page=details")
}

export const postCarDetails = async (body) => {
    return await Axios.post("/api/?page=details", { ...body })
}

export const getCarAllInformation = async () => {
    return await Axios.get("/api/?page=final")
}

export const finallyFinish = async (formData) => {
    return Axios({
        method: "post",
        url: "/api/?page=final",
        data: formData,
    });
}