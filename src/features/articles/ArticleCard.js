import React from "react";
import {ArticleDate} from "./ArticleDate";
import {useHistory} from "react-router-dom";

export const ArticleCard = ({props}) => {
    const article = props;

    const history = useHistory();

    const goToArticlePage = () => {
        history.push(`/posts/${article.id}`);
    }
    return (
        <div>
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
            <div onClick={goToArticlePage} className="cursor-pointer capitalize text-xl font-bold hover-hover:hover:text-blue-500">{article.title}</div>
            <p className="post-content truncate">{article.content}</p>
            <button
                onClick={goToArticlePage}
                className="button muted-button hover-hover:hover:text-blue-500">
                View Post
            </button>
        </article>
        </div>
    )



}
