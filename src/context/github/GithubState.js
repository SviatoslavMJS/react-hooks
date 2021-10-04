import React, { useReducer } from "react"
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../Alert/types"
import { GithubContext } from "./githubContext"
import { githubReducer } from "./githubReducer"
import axios from "axios"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

export const GithubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: [],
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const search = async value => {
        setLoading()

        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        console.log(response)

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }



    const getUser = async name => {
        setLoading()
        //...
        dispatch({
            type: GET_USER,
            payload: {}
        })
    }

    const getRepos = async name => {
        setLoading()
        //...
        dispatch({
            type: GET_REPOS,
            pyload: []
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    const setLoading = () => dispatch({ type: SET_LOADING })

    const { users, user, repos, loading } = state

    return (
        <GithubContext.Provider value={{
            setLoading, clearUsers, getRepos, getUser, search,
            users, user, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
}

