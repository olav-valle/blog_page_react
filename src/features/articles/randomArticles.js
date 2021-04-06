import {randomInt} from "../../app/tools";
import {nanoid} from "@reduxjs/toolkit";
import {lorem} from "./lorem";
import sub from 'date-fns/sub';

const articles = () => {
    let n = 10 + randomInt(5)
    let i = 0
    let art = [];
    while (i < n) {
        i++
        art = art.concat([
            {
                ID: nanoid(),
                date: sub(new Date(), {minutes: randomInt(60)}).toISOString(),
                title: lorem.generateWords(3+randomInt(3)),
                content: lorem.generateParagraphs(1 + randomInt(3)),
            }
        ])
    }
    return art;
}

function randomArticles() {

    const timeOffset = 0
    let timeout = 100 + randomInt(timeOffset)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(articles());
        }, timeout);
    });

}

export default randomArticles