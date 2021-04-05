import React, {useEffect, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {lorem} from '../articles/lorem'
import {randomInt} from "../../app/tools";
import {ArticleCard} from "./ArticleCard";


const initialArticles = []

const fill = () => {
    let n = 3 + randomInt(3)
    let i = 0
    while (i < n) {
        i++
        initialArticles.concat([
            {
                date: new Date().toDateString(),
                ID: nanoid,
                title: lorem.generateWords(Math.floor(3 + (Math.random() * 6))),
                content: lorem.generateParagraphs(Math.floor(1 + (Math.random() * 3))),
            },
        ])
    }
}


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
                        title: lorem.generateWords(Math.floor(3 + (Math.random() * 6))),
                        content: lorem.generateParagraphs(Math.floor(1 + (Math.random() * 3))),
                        date: new Date().toDateString(),
                    }
                ])
            }
            setArticles(art)
        }, []
    )


    const articleList = articles.map((item) => {})

    return (null)
}