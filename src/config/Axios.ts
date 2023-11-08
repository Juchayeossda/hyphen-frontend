import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

export const BaseUrl = 'http://220.122.166.117:8080'

/* export const axiosInstanse = (url:string) => {
    return Instance
} */
export const Instance = axios.create({
    baseURL:BaseUrl,
})

export const Instance2 = axios.create({
    baseURL:'http://172.18.233.87:8080'
})

axios.interceptors.request.use((config)=>{
    const navigator = useNavigate()

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    const refreshTokenExpiredAt:string|null = localStorage.getItem('refreshTokenExpiredAt')
    const accessTokenExpiredAt:string|null = localStorage.getItem('accessTokenExpiredAt')
    const now = new Date()

    // refreshToken 만료되었을 때
    if(refreshTokenExpiredAt){
        if(new Date(refreshTokenExpiredAt) < now){
            navigator('/signin')
        }
    }
    // accessToken 만료되었을 때
    
    // accessToken이 있을 때
    if(accessToken){
        Instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }

    return config
})
