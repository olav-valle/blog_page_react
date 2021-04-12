import React from "react";
import {ArticleDate} from "./ArticleDate";
import {Link} from "react-router-dom";

export const ArticleCard = ({props}) => {
    const article = props;
    return (
        <Link to={`/posts/${article.id}`} className="">
        <article
            className="
            shadow-lg
            transform
            hover-hover:hover:shadow-xl hover-hover:hover:-translate-y-1
            p-3
            bg-white
            w-11/12 mx-auto
            rounded-xl
            active:shadow-inner"
            key={article.id}
        >
            <div className="text-blue-800 text-xs"><ArticleDate date={article.date}/></div>
            <div className="capitalize text-xl font-bold ">{article.title}</div>
            <p className="post-content truncate">{article.content}</p>
            <button className="button muted-button">
                View Post
            </button>
        </article>
        </Link>
    )



}
