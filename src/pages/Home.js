import React, { Fragment, useContext } from "react"
import { Card } from "../components/Card"
import { Search } from "../components/Search"
import { GithubContext } from "../context/github/githubContext"

export const Home = () => {

    const { users, loading } = useContext(GithubContext)

    return (
        <Fragment>
            <Search />

            <div className="row">

                {loading
                    ? <p className="text-center">LOADING ...</p>
                    : users.map(user => (
                        <div className="col-sm-4 mb-4 mt-4" key={user.id}>
                            <Card user={user}/>
                        </div> )
                    )
                }

            </div>

        </Fragment>
    )
}