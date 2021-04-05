import React from "react";
import {ArticleDate} from "./ArticleDate";

export const ArticleCard = ({props}) => {
    const post = props;
    return (<article
        className="p-3 bg-white w-11/12 mx-auto rounded-xl" key={post.id}>
        <ArticleDate className="" date={post.date}></ArticleDate>
        <div className="capitalize text-xl font-bold ">{post.title}</div>
        <p className="post-content truncate">{post.content}</p>
    </article>)


}
