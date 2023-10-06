import axios from "axios";

export const BaseUrl = 'http://101.101.217.155:5000'

/* export const axiosInstanse = (url:string) => {
    return Instance
} */
export const Instance = axios.create({baseURL:BaseUrl})
