import React, { useContext, useEffect, Fragment } from "react"
import { Link } from "react-router-dom"
import { GithubContext } from "../context/github/githubContext"

export const Profile = ({ match }) => {

    const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)

    }, [])

    if (loading) {
        return <p className="text-center">LOADING...</p>
    }

    const {
        name, company, avatar_url,
        location, bio, blog, login,
        html_url, followers, following,
        public_repos, public_gists
    } = user

    return (
        <Fragment>

            <Link to="/" className="btn btn-link">Home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{ width: "150px" }} />
                            <h2>{name}</h2>
                            {location && <p>Location : {location}</p>}
                        </div>

                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a
                                href={html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark"
                            >Go to profile</a>

                            <ul>
                                {login && <li>
                                    <strong>Username : </strong>{login}
                                </li>}

                                {company && <li>
                                    <strong>Company : </strong>{company}
                                </li>}

                                {blog && <li>
                                    <strong>Website : </strong>{blog}
                                </li>}
                            </ul>

                            <div className="badge badge-pill badge-primary">Followers : {followers}</div>
                            <div className="badge badge-success">Subscribe : {following}</div>
                            <div className="badge badge-info">Repositories : {public_repos}</div>
                            <div className="badge badge-dark">Gists : {public_gists}</div>
                            {repos.join()}
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}