import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchWasEntered} from "./searchSlice";

export const SearchBar = () => {
    const [searchString, setSearchString] = useState("");

    const dispatch = useDispatch();

    const onSearchStringChange = e => setSearchString(e.target.value)

    const onSearchButtonClick = () => {
        if (searchString) {
            dispatch(searchWasEntered(searchString));
            setSearchString("");
        }
    }

    return (
        <div>
            <input type="search"
                   name="search"
                   placeholder="Search..."
                   value={searchString}
                   onChange={onSearchStringChange}
                   className="
                       py-2
                       text-sm
                       bg-blue-200
                       rounded-md
                       pl-2
                       focus:outline-none
                       focus:ring
                       focus:border-black
                       focus:bg-blue-300
                       focus:text-gray-600"
            />

            <button
                onClick={onSearchButtonClick}
                className="
                    hover-hover:hover:text-white
                    focus:outline-none
                    text-black
                    active:text-gray-500
                    absolute inset-y-0 right-2
                    pl-2
                    zmdi zmdi-search zmdi-hc-2x
                ">
            </button>
        </div>
    )
}
