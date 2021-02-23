import React from "react";
import Typography from "@material-ui/core/Typography";

export const Typo = ({text,variant,className})=>{
    return (
        <Typography variant={variant} className={className}>
            {text}
        </Typography>
    )
}