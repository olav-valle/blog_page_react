import React, {useEffect} from "react";
import {ArticleCard} from "./ArticleCard";
import {fetchArticles, selectAllPosts} from "./articlesSlice";
import {useDispatch, useSelector} from "react-redux";
import {LoadingPlaceholder} from "./LoadingPlaceholder";
import {selectSearchString} from "../../app/searchSlice";
import {Link} from "react-router-dom";
import {FloatingNewButton} from "../../app/FloatingActionButton";


export const ArticleList = ({props}) => {

    const useSearchFilter = props; // should list be filtered by user search input?

    const dispatch = useDispatch();

    const articles = useSelector(selectAllPosts) // Get all posts in store

    const {searchString} = useSelector(selectSearchString); // User search input

    const status = useSelector(state => state.articles.status) // Are articles loaded?

    // Fetch articles if article store is 'idle', i.e. "not loaded yet".
    useEffect(() => {
            if (status === 'idle') {
                dispatch(fetchArticles())
            }
        }, [status, dispatch]
    )


    let articleList;
    if (status === 'pending') {
        // Show loading placeholders while we fetch from API
        articleList = [
            <LoadingPlaceholder key={"1"}/>,
            <LoadingPlaceholder key={"2"}/>,
            <LoadingPlaceholder key={"3"}/>,
        ]
    } else if (status === 'fulfilled') {
        // Sort (and filter) articles for rendering.

        const ordered = articles.slice().sort((a, b) =>
                b.date.localeCompare(a.date));

        // Filter articles using search input?
        if (useSearchFilter) {
            const filtered = ordered.filter(item => {
                const text = item.content;
                return text.includes(searchString);
            });
            articleList = filtered.map(item => (<ArticleCard key={item.id} props={item}/>));
        } else {
            articleList = ordered.map(item => (
                <ArticleCard key={item.id} props={item}/>
            ))
        }

    } else if (status === 'rejected') {
        // Something went wrong fetching articles.

        articleList = <div>Error loading articles...</div>
    }

    // render Articles in list, or a loading/error message.
    return (
        <div
            className="
            m-auto
            flex flex-col justify-center
            p-auto pt-20
            space-y-5
            lg:max-w-screen-lg"
        >
            {articleList}

            <Link to={"/newPost"}>
                <FloatingNewButton/>
            </Link>

        </div>
    )

}