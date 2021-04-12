import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchWasEntered} from "./searchSlice";
import {useHistory} from "react-router-dom";

export const SearchBar = () => {
    const [searchString, setSearchString] = useState("");

    const dispatch = useDispatch();

    const history = useHistory();

    // Sets input value in state
    const onSearchStringChange = e => setSearchString(e.target.value)

    // Dispatches search input and pushes search url to history
    const onSearchButtonClick = () => {
        if (searchString) {
            dispatch(searchWasEntered(searchString));
            history.push(`/search/${String(searchString).replace(" ", "_")}`);
        }
    }

    // Programmatically 'click' search button on 'Enter' keypress.
    const handleEnter = (e) => {
        if (e.key === "Enter"){
            onSearchButtonClick();
        }

    }

    return (
        <div className="group">
            <input type="search"
                   name="search"
                   placeholder="Search..."
                   value={searchString}
                   onKeyPress={e => handleEnter(e)}
                   onChange={onSearchStringChange}
                   className="
                       group-hover:placeholder-gray-600
                       py-2
                       pl-2

                       text-sm
                       bg-blue-200
                       rounded-md
                       focus:ring
                       focus:outline-none
                       focus:bg-blue-300
                       focus:text-black
                       "
            />

            <button
                onClick={onSearchButtonClick}

                className="
                    active:text-black
                    hover-hover:group-hover:text-gray-600
                    focus:outline-none
                    text-black
                    absolute inset-y-0 right-2
                    pl-2
                    zmdi zmdi-search zmdi-hc-2x
                    "
            >
            </button>
        </div>
    )
}
