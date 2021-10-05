import React, { useContext, useState } from "react"
import { AlertContext } from "../context/Alert/AlertContext"
import { GithubContext } from "../context/github/githubContext"

export const Search = () => {
    const [value, setValue] = useState("")
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== "Enter") {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show("Enter correct name !!!")
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Input user nickname..."
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}