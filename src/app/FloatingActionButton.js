import React from "react";


const FloatingButton = (props) => {
    //todo: Why isn't box shadow working?
    const {color, icon} = props;
    return (
        <div
            className={`
                group
                rounded-full h-20 w-20
                fixed right-10 bottom-10
                shadow-FAB
                active:shadow-inner
                flex items-center justify-center
                ${color}
                `}
        >
            <i className={`${icon} hover-hover:group-hover:text-gray-600`}/>
        </div>
    );
}


export const FloatingNewButton = () => {
    return (
        <FloatingButton
            color="bg-blue-300 active:bg-blue-400"
            icon="zmdi zmdi-file-plus zmdi-hc-4x"
        />
    )
}


export const FloatingSaveButton = () => {
    return (
        <FloatingButton
            color="bg-green-300 active:bg-green-400"
            icon="zmdi zmdi-floppy zmdi-hc-4x"
        />
    )
}

export const FloatingDeleteButton = () => {
    return (
        <FloatingButton
            color="bg-red-300 active:bg-red-400"
            icon="zmdi zmdi-delete zmdi-hc-4x"
        />
    )
}

export const FloatingEditButton = () => {
    return (
        <FloatingButton
            color="bg-red-300 activate:bg-red-400"
            icon="zmdi zmdi-edit zmdi-hc-4x"
        />
    )
}