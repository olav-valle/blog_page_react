import React from "react";
import {Link} from "react-router-dom";


const FloatingButton = (props) => {
    const {color, icon} = props;
    return (
        <button
            className={`
                ${color}
                bg-
                shadow-xl
                rounded-full h-20 w-20
                fixed right-10 bottom-10
                active:shadow-inner
                flex items-center justify-center
                `}
        >
            <i className={`${icon}`}/>
        </button>
    );
}


export const FloatingNewButton = () => {
    return (
        <Link to={"/newPost"}>
            <FloatingButton
                color="bg-blue-300 active:bg-blue-400" icon="zmdi zmdi-file-plus zmdi-hc-4x"
            />
        </Link>
    )
}

export const FloatingSaveButton = () => {
    return (
        <Link to={"/"}>
            <FloatingButton
                color="bg-green-300 active:bg-green-400" icon="zmdi zmdi-floppy zmdi-hc-4x"
            />
        </Link>
    )
}

export const FloatingEditButton = () => {
    return (
        <Link to={"/"}>
            <FloatingButton
                color="bg-red-300 active:bg-red-400" icon="zmdi zmdi-edit zmdi-hc-4x"
            />
        </Link>
    )
}