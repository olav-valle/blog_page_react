import React from "react";
import {ArticleDate} from "./ArticleDate";

export const ArticleCard = ({props}) => {
    const post = props;
    return (
        <article
            className="shadow-md transform hover-hover:hover:shadow-xl hover-hover:hover:-translate-y-1 p-3 bg-white w-11/12 mx-auto rounded-xl"
            key={post.id}
        >
            <div className="text-blue-800 text-xs"><ArticleDate date={post.date}/></div>
            <div className="capitalize text-xl font-bold ">{post.title}</div>
            <p className="post-content truncate">{post.content}</p>
        </article>)


}
