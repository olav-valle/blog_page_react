import React, {useState} from "react";
import {FloatingSaveButton} from "../../app/FloatingActionButton";
import {useDispatch, useSelector} from "react-redux";
import {articleAdded, articleDeleted, selectArticleById} from "./articlesSlice";
import { useHistory } from 'react-router-dom'
import {nanoid} from "@reduxjs/toolkit";

export const NewArticleForm = (match) => {
    let initialTitle = "";
    let initialContent = "";
    let artId = ""
    if (match.props)  artId = match.props.params.artId;

    const article = useSelector(state =>
        selectArticleById(state, artId));

    if (article) {
        initialTitle = article.title;
        initialContent = article.content;
    }

    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);






    const dispatch  = useDispatch();
    const history = useHistory();

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    // Dispatches article data to store, including a generated nanoid.
    const onArticleSaveClick = () => {
        let id = nanoid();
        // Is generating ID locally a bad idea? It's the easiest way to retrieve
        //  the ID for use in the history.push url, but could it somehow be abused to
        //  exploit the backend DB?
        //  Perhaps just a security check in the backend will be enough.

        if (title && content) {
            dispatch(articleAdded(title, content, id));
            setTitle("");
            setContent("");
        }
        history.push(`/posts/${id}`)
    }

    // Deletes the current article.
    const onDeleteArticleClick = () => {
        dispatch(articleDeleted(artId))
        history.push("/")
    }
    let deleteButtonVisible = "hidden"
    if (article) {
        deleteButtonVisible = ""
    }

    return (
        <div className="lg:w-4/5 h-screen m-auto flex flex-col p-5 pt-20">
            <div className="flex flex-col">
                <label className="capitalize text-xl font-bold " htmlFor="articleTitle">Title:</label>
                <input
                    className="rounded-md focus:shadow-inner p-3 outline-none  border w-full"
                    type="text"
                    id="articleTitle"
                    name="articleTitle"
                    value={title}
                    onChange={onTitleChange}
                    //placeholder={"The post headline."}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor={"articleContent"}>Content:</label>
                <div className="">
                    <textarea
                    className="w-full h-80 rounded-md focus:shadow-inner p-3 resize outline-none border "
                    id="articleContent"
                    name="articleContent"
                    value={content}
                    onChange={onContentChange}

                    />
                </div>
            </div>
                <button
                    className={`mt-3 p-2 bg-red-500 rounded-md w-2/5 ${deleteButtonVisible}`}
                    onClick={onDeleteArticleClick}>Delete Post</button>
            <button onClick={onArticleSaveClick}><FloatingSaveButton /></button>
        </div>
    )

}