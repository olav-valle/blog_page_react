import React from "react";
import {parseISO, formatDistanceToNow } from 'date-fns'

export const ArticleDate = ({date}) => {
    let timeAgo = '';
    if (date) {
        const parsedTime = parseISO(date);
        timeAgo = formatDistanceToNow(parsedTime);
    }

    return (
        <span title={date}>
            <i>{`${timeAgo}`}</i>
        </span>
    )

}