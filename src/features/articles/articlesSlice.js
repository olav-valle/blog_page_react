import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import randomArticles from "../../app/randomArticles";

const initialState = {
    arts: [],
    status: 'idle',
}

// Fake-fetches articles from the "API"
//todo: implement real API?
export const fetchArticles = createAsyncThunk(
    'articles/fetchAll',
    async () => {
        return await randomArticles();
    })

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        articleAdded: {

            reducer(state, action) {
                state.arts.push(action.payload)
            },

            prepare(title, content, id) {
                return {
                    payload: {
                        id: id,
                        date: new Date().toISOString(),
                        title,
                        content
                    }
                }
            }

        },

        articleDeleted: {
            reducer(state, action) {
                state.arts = state.arts.filter(art => art.id !== action.payload.id)
            },
            prepare(id) {
                return {
                    payload: {
                        id
                    }
                }
            }
        },
        articleEdited: {}
    },
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

export const {articleAdded, articleDeleted} = articleSlice.actions;

export default articleSlice.reducer;

export const selectArticleById = (state, artId) => state.articles.arts.find(art => art.id === artId);

export const selectAllPosts = state => state.articles.arts;

