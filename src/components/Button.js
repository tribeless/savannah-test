import React from "react";
import Button from "@material-ui/core/Button";
import {Typo} from "./Typography";

export const SavaButton = ({text,color,variant,className,textVariant,textClassName,size,click})=>{
    return (
        <Button onClick={click} size={size} variant={variant} color={color} className={className}>
            <Typo className={textClassName} text={text} variant={textVariant} />
        </Button>
    )
}