import React from "react";
import {Link} from "react-router-dom";


export const FloatingNewButton = () => {

    return (
        <Link to={"/newPost"}>
            <button
                className="
                shadow-xl

                rounded-full h-20 w-20
                fixed right-10 bottom-10
                bg-blue-300
                active:bg-blue-300 active:shadow-inner
                flex items-center justify-center
                "
            >
                <i className="zmdi zmdi-file-plus zmdi-hc-4x"></i>
            </button>
        </Link>
    )
}