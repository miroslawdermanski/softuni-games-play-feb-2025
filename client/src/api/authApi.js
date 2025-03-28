import { useContext, useEffect, useRef } from "react"
import request from "../utils/request"
import { UserContext } from "../contexts/UserContext"

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

export const useLogout = () => {

    const {accessToken} = useContext(UserContext)

    const options = {
        headers: {
            'X-Authorization': accessToken
        }
    }

    const logout = async () => {
        request.get(
            `${baseURL}/logout`,
            null,
            options,
        )
    }

    return {
        logout,
    }
}