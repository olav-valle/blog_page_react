import React from "react";
import {Link} from 'react-router-dom'
import {SearchBar} from "./SearchBar";

export const Header = () => {
    // todo: set active/click visual feedback

    return (
        <div className="fixed z-50 w-full flex flex-row  items-center h-16 bg-blue-400">
            <Link className="hover-hover:hover:text-white text-5xl p-6" to={"/"}>#blog</Link>
            <Link className="self-end hover-hover:hover:text-white " to={"/"}>Home</Link>

            <div className="ml-auto relative pr-1">
                <SearchBar/>
            </div>

        </div>
    )

}