import React from "react";
import {Link} from 'react-router-dom'

export const Header = () => {

    return (
        <div className="fixed z-50 w-full rounded-b flex flex-row justify-between items-center h-16 bg-blue-400">
            <Link className=" text-5xl p-6" to={"/"}>#blog</Link>
            <Link to={"/"}>Home</Link>

            <div className="align-bottom pl-1 pr-3 mr-2 bg-blue-100">
                <input className="hidden bg-transparent p-1" type="text" placeholder={"Search..."}/>
                <button>
                    <i className="zmdi zmdi-search"></i>
                </button>
            </div>
        </div>
    )

}