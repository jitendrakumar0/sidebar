import axios from "axios";

const BASE_URL = "";
const TOKEN = process.env.REACT_APP_API_TOKEN;

const headers = {
    "X-RapidAPI-Key": TOKEN,
    "X-RapidAPI-Host": "papi-pornstarsapi.p.rapidapi.com",
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
