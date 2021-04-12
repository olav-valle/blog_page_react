import React, {useEffect} from "react";
import {ArticleCard} from "./ArticleCard";
import {fetchArticles, selectAllPosts} from "./articlesSlice";
import {useDispatch, useSelector} from "react-redux";
import {LoadingPlaceholder} from "./LoadingPlaceholder";


export const ArticleList = () => {
    const dispatch = useDispatch();

    const articles = useSelector(selectAllPosts)

    const status = useSelector(state => state.articles.status)

    useEffect(() => {
            if (status === 'idle') {
                dispatch(fetchArticles())
            }
        }, [status, dispatch]
    )


    let articleList;
    // todo: any better to make this a switch?
    if (status === 'pending') {

        articleList = [
            <LoadingPlaceholder key={"1"}/>,
            <LoadingPlaceholder key={"2"}/>,
            <LoadingPlaceholder key={"3"}/>,
            ]
    } else if (status === 'fulfilled') {
        const ordered = articles.slice().sort((a, b) =>
            b.date.localeCompare(a.date));
        articleList = ordered.map(item => (
            <ArticleCard key={item.id} props={item}/>
        ))
    } else if ( status === 'rejected') {
        articleList = <div>Error loading articles...</div>
    }

return (
    <div className="m-auto flex flex-col justify-center p-auto pt-20 space-y-5 lg:max-w-screen-lg">
        {articleList}
    </div>
)

}