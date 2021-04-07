import React from "react";


const FloatingButton = (props) => {
    const {color, icon} = props;
    return (
        <div
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
        </div>
    );
}


export const FloatingNewButton = () => {
    return (

            <FloatingButton
                color="bg-blue-300 active:bg-blue-400" icon="zmdi zmdi-file-plus zmdi-hc-4x"
            />
    )
}

export const FloatingSaveButton = () => {
    return (

            <FloatingButton
                color="bg-green-300 active:bg-green-400" icon="zmdi zmdi-floppy zmdi-hc-4x"
            />
    )
}

export const FloatingEditButton = () => {
    return (
            <FloatingButton
                color="bg-red-300 active:bg-red-400" icon="zmdi zmdi-edit zmdi-hc-4x"
            />
    )
}