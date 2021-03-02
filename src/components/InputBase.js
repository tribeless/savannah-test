import React from "react";
import InputBase from "@material-ui/core/InputBase";

export const Input =({className,placeholder,onKeyUp,type,change,fieldName})=>{

    return (
        <InputBase type={type} name={fieldName} onChange={change} onKeyUp={onKeyUp} className={className} placeholder={placeholder} />
    )
}