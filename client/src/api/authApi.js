import { useEffect, useRef } from "react"
import request from "../utils/request"

const baseURL = 'http://localhost:3030/users'

export const useLogin = () => {

    const login = async (email, password) => {

        request.post(
            `${baseURL}/login`, 
            {email, password}, 
        )

    }

    return {
        login,
    }
}

export const useRegister = () => {

    const register = async (email, password) => {

        request.post(
            `${baseURL}/register`, 
            {email, password}
        )
    }

    return {
        register,
    }
}