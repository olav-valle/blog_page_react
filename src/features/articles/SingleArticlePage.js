import React from "react";
import {useSelector} from "react-redux";
import {selectArticleById} from "./articlesSlice";
import {ArticleDate} from "./ArticleDate";
import {NotFound} from '../../app/NotFoundPage'
import {FloatingEditButton} from "../../app/FloatingActionButton";
import {useHistory} from "react-router-dom";

export const SingleArticlePage = (match) => {
    const artId = match.props.params.artId;

    const history = useHistory();



    const onEditArticleClick = () => {
        history.push(`/editPost/${artId}`)
    }
    const article = useSelector(state =>
        selectArticleById(state, artId));

    if (!!article) {
        return(
            <div className="w-4/5 m-auto flex flex-col p-5 pt-20">
                <div className="capitalize text-xl font-bold ">{article.title}</div>
                <div className="text-blue-800 text-xs"><ArticleDate date={article.date}/></div>
                <p className="">{article.content}</p>
                <button onClick={onEditArticleClick}><FloatingEditButton/></button>
            </div>
        )
    }
    return(
        <NotFound/>
    );


}
