import React, { useContext, useState } from "react"
import { AlertContext } from "../context/Alert/AlertContext"

export const Search = () => {
    const [value, setValue] = useState("")
    const { show } = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key !== "Enter") {
            return
        }
        
        if (value.trim()) {
            console.log("send request with ", value)
        } else {
            show("Enter data")
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