import React from "react";
import InputBase from "@material-ui/core/InputBase";
import "../index.css";

export const Input =({className,placeholder,onKeyUp,type,change,fieldName,required})=>{

    return (
        <InputBase required={required} type={type} name={fieldName} onChange={change} onKeyUp={onKeyUp} className={className} placeholder={placeholder} />
    )
}