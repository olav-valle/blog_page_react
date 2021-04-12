import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {articleDeleted, selectArticleById} from "./articlesSlice";
import {ArticleDate} from "./ArticleDate";
import {NotFound} from '../../app/NotFoundPage'
import {FloatingDeleteButton} from "../../app/FloatingActionButton";
import {useHistory} from "react-router-dom";

export const SingleArticlePage = (match) => {
    const artId = match.props.params.artId;

    const dispatch = useDispatch();
    const history = useHistory();

    const onDeleteArticleClick = () => {
        dispatch(articleDeleted(artId))
        history.push("/")
    }

    const article = useSelector(state =>
        selectArticleById(state, artId));

    if (!!article) {
        return(
            <div className="w-4/5 m-auto flex flex-col p-5 pt-20">
                <div className="capitalize text-xl font-bold ">{article.title}</div>
                <div className="text-blue-800 text-xs"><ArticleDate date={article.date}/></div>
                <p className="">{article.content}</p>
                <button onClick={onDeleteArticleClick}><FloatingDeleteButton/></button>
            </div>
        )
    }
    return(
        <NotFound/>
    );


}
