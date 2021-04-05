import React, {useEffect, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {lorem} from '../articles/lorem'
import {randomInt} from "../../app/tools";
import {ArticleCard} from "./ArticleCard";


const initialPosts = [
    {
        ID: '7uJCM6m6GZpphL66VqHUD',
        date: 'Mon Apr 05 2021',
        title: 'occaecat irure ad',
        content: 'Amet nulla aliquip excepteur mollit duis. Culpa minim voluptate anim id in non laborum sint consequat ad mollit. Fugiat labore labore consectetur. Nulla laboris ut velit velit occaecat ut consectetur cillum tempor enim sunt sint. Exercitation excepteur id cupidatat eiusmod commodo laboris qui tempor cillum duis deserunt. Laborum enim incididunt do. Dolor culpa ipsum sit sint eu do voluptate culpa qui officia proident et dolor incididunt.\nMinim culpa pariatur dolor in esse enim commodo ipsum. Min...',
    },
    {
        ID: '7uJCM6m6GZpphL66VqHUD',
        date: 'Mon Apr 05 2021',
        title: 'occaecat irure ad excepteur mollit duis',
        content: 'Amet nulla aliquip excepteur mollit duis excepteur mollit duis excepteur mollit duis. Culpa minim voluptate anim id in non laborum sint consequat ad mollit. Fugiat labore labore consectetur. Nulla laboris ut velit velit occaecat ut consectetur cillum tempor enim sunt sint. Exercitation excepteur id cupidatat eiusmod commodo laboris qui tempor cillum duis deserunt. Laborum enim incididunt do. Dolor culpa ipsum sit sint eu do voluptate culpa qui officia proident et dolor incididunt.\nMinim culpa pariatur dolor in esse enim commodo ipsum. Min...',
    },
    {
        ID: '7uJCM6m6GZpphL66VqHUD',
        date: 'Mon Apr 05 2021',
        title: 'occaecat irure ad',
        content: 'Amet nulla aliquip excepteur mollit duis. Culpa minim voluptate anim id in non labor excepteur mollit duisum sint consequat ad mollit. Fugiat labore labore consectetur. Nulla laboris ut velit velit occaecat ut consectetur cillum tempor enim sunt sint. Exercitation excepteur id cupidatat eiusmod commodo laboris qui tempor cillum duis deserunt. Laborum enim incididunt do. Dolor culpa ipsum sit sint eu do voluptate culpa qui officia proident et dolor incididunt.\nMinim culpa pariatur dolor in esse enim commodo ipsum. Min...',
    },
]

export const ArticleList = () => {
    // todo: move article state to store

    const [articles, setArticles] = useState([]); // todo: change to useSelector from articlesSlice

    useEffect(() => {
            let n = 3 + randomInt(3)
            let i = 0
            let art = []
            while (i < n) {
                i++
                art = art.concat([
                    {
                        ID: nanoid(),
                        date: new Date().toISOString(),
                        title: lorem.generateWords(Math.floor(3 + (Math.random() * 6))),
                        content: lorem.generateParagraphs(Math.floor(1 + (Math.random() * 3))),
                    }
                ])
            }
            setArticles(art)
        }, []
    )


    const articleList = articles.map((item) => (
        <ArticleCard props={item}/>
    ))

    return (
        <div className="flex flex-col p-5 space-y-5 ">
            {articleList}
        </div>
    )
}