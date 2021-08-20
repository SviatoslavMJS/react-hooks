import React, { useContext } from "react"
import { AlertContext } from "../context/Alert/AlertContext"

export const Search = () => {
    const {show} = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key === "Enter") {
            show("WARNING !!!")
        }
    }

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Input user nickname..."
                onKeyPress={onSubmit}
            />
        </div>
    )
}