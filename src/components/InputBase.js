import React from "react";
import InputBase from "@material-ui/core/InputBase";

export const Input =({className,placeholder})=>{

    return (
        <InputBase className={className} placeholder={placeholder} />
    )
}