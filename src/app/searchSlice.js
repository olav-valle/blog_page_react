import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchString: "",
}

const searchSlice = createSlice( {
    name:'search',
    initialState,
    reducers: {
        searchWasEntered: {
            reducer(state, action) {
                state.searchString = action.payload;
            },

            prepare(searchString){
                return{
                    payload: {
                        searchString,
                    },
                }
            }
        },
    }

})
export const {searchWasEntered} = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchString = state => state.search.searchString;

