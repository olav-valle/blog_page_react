import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import randomArticles from "./randomArticles";


const initialArts = [
    {
        ID: 'phL66m6GZpV7uJCqHUDM6',
        date: '2021-04-05T22:43:29.924Z',
        title: 'occaecat irure aliquip excepteur',
        content: 'Amet nulla aliquip excepteur mollit duis. Culpa minim voluptate anim id in non laborum sint consequat ad mollit. Fugiat labore labore consectetur. Nulla laboris ut velit velit occaecat ut consectetur cillum tempor enim sunt sint. Exercitation excepteur id cupidatat eiusmod commodo laboris qui tempor cillum duis deserunt. Laborum enim incididunt do. Dolor culpa ipsum sit sint eu do voluptate culpa qui officia proident et dolor incididunt.\nMinim culpa pariatur dolor in esse enim commodo ipsum. Min...',
    },
    {
        ID: '7uJCM6m6VGZpphL66qHUD',
        date: '2021-04-05T22:43:29.924Z',
        title: 'occaecat irure ad excepteur mollit duis',
        content: 'Amet nulla aliquip excepteur mollit duis excepteur mollit duis excepteur mollit duis. Culpa minim voluptate anim id in non laborum sint consequat ad mollit. Fugiat labore labore consectetur. Nulla laboris ut velit velit occaecat ut consectetur cillum tempor enim sunt sint. Exercitation excepteur id cupidatat eiusmod commodo laboris qui tempor cillum duis deserunt. Laborum enim incididunt do. Dolor culpa ipsum sit sint eu do voluptate culpa qui officia proident et dolor incididunt.\nMinim culpa pariatur dolor in esse enim commodo ipsum. Min...',
    },
    {
        ID: 'm6GZphL66D7uJCMVqHUp6',
        date: '2021-04-05T22:43:29.924Z',
        title: 'irure occaecat ad',
        content: 'Amet nulla aliquip excepteur mollit duis. Culpa minim voluptate anim id in non labor excepteur mollit duisum sint consequat ad mollit. Fugiat labore labore consectetur. Nulla laboris ut velit velit occaecat ut consectetur cillum tempor enim sunt sint. Exercitation excepteur id cupidatat eiusmod commodo laboris qui tempor cillum duis deserunt. Laborum enim incididunt do. Dolor culpa ipsum sit sint eu do voluptate culpa qui officia proident et dolor incididunt.\nMinim culpa pariatur dolor in esse enim commodo ipsum. Min...',
    },
];

const initialState = {
    arts: [],
    status: 'idle',
}


export const fetchArticles = createAsyncThunk(
    'articles/fetchAll',
    async () => {
        const response = await randomArticles();
        return response;
    })

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchArticles.pending]: (state, action) => {
            state.status = 'pending';
        },
        [fetchArticles.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.arts = state.arts.concat(action.payload);
        },
        [fetchArticles.rejected]: (state, action) => {
            state.status = 'rejected';
        }

    }
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;

export const selectArticleById = (state, artId) => state.articles.arts.find(art => art.id === artId);

export const selectAllPosts = state => state.articles.arts;

