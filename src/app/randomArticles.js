import {randomInt} from "./tools";
import {nanoid} from "@reduxjs/toolkit";
import {lorem} from "./lorem";
import sub from 'date-fns/sub';

const articles = () => {
    let n = 15 + randomInt(10)
    let i = 0
    let art = [];
    while (i < n) {
        i++
        art = art.concat([
            {
                id: nanoid(),
                date: sub(new Date(), {minutes: randomInt(60)}).toISOString(),
                title: lorem.generateWords(3+randomInt(3)),
                content: lorem.generateParagraphs(2 + randomInt(8)),
            }
        ])
    }
    return art;
}

function randomArticles() {

    const timeOffset = 5000
    let timeout = 100 + randomInt(timeOffset)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(articles());
        }, timeout);
    });

}

export default randomArticles