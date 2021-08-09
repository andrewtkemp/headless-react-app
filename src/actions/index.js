import React from 'react'
import { useDispatch } from "react-redux"
import { GetRoutes } from "../utils/API"

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const loadUrls = () => {
    return GetRoutes()
    .then((res) => {
        console.log(res);
        return {
            type: 'LOAD',
            payload: res.data,
        }
    });
    
}

