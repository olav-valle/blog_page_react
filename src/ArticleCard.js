import React from "react";
import {
    makeStyles,
    CardActionArea,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from "@material-ui/core";

import theme from "./theme"

const useStyles = makeStyles({
    date: {

    },
    contentArea: {},
    headline: {},
    byline: {
        fontSize: "xx-small",

    },
    excerpt: {},
    media: {},

})


export const ArticleCard = () => {
    const classes = useStyles();
    return (
        <Card>
            <CardActionArea>
                <CardContent className={classes.contentArea}>
                    <Typography variant={"overline"} classes={classes.date}>
                        {new Date().toISOString()}
                    </Typography>

                    <Typography variant='h3' classes={classes.headline}>
                        Article title.
                    </Typography>

                    <Typography gutterBottom={true} variant="subtitle2" color="textSecondary" classes={classes.byline}>
                        Whoever the Author is
                    </Typography>

                    <Typography component={'p'} classes={classes.excerpt}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi consectetur corporis
                        cumque debitis delectus dolor ducimus explicabo id impedit in ipsa iste iure maxime molestiae
                        natus

                    </Typography>

                </CardContent>

            </CardActionArea>
        </Card>
    )

}