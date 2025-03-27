import { useEffect, useRef } from "react"
import request from "../utils/request"

const baseURL = 'http://localhost:3030/users'

export const useLogin = () => {

    const abortRef = useRef(new AbortController())

    const login = async (email, password) => {

        const result = await request.post(`${baseURL}/login`, {email, password}, {signal: abortRef.current.signal})

        return result
    }

    useEffect(() => {
 
        const abortController = abortRef.current

        return () => abortController.abort()
    }, [])

    return {
        login,
    }
}