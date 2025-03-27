import request from "../utils/request"

const baseURL = 'http://localhost:3030/users'

export const useLogin = () => {

    const login = async (email, password) => {

        const result = await request.post(`${baseURL}/login`, {email, password})

        return result
    }

    return {
        login,
    }
}