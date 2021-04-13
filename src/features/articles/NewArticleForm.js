import React, {useState} from "react";
import {FloatingSaveButton} from "../../app/FloatingActionButton";
import {useDispatch} from "react-redux";
import {articleAdded} from "./articlesSlice";
import { useHistory } from 'react-router-dom'
import {nanoid} from "@reduxjs/toolkit";

export const NewArticleForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch  = useDispatch();
    const history = useHistory();
    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const onArticleSaveClick = () => {
        let id = nanoid();
        if (title && content) {
            dispatch(articleAdded(title, content, id));
            setTitle("");
            setContent("");
        }
        history.push(`/posts/${id}`)
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
                    //placeholder="What's on your mind..?"

                /></div>
            </div>
            <button onClick={onArticleSaveClick}><FloatingSaveButton /></button>
        </div>
    )

}