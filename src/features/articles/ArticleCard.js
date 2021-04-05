import React from "react";
import PropTypes from 'prop-types'
import {
    makeStyles,
    CardActionArea,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography, Grid,
} from "@material-ui/core";

import theme from "../../theme"

const useStyles = makeStyles({
    date: {},
    contentArea: {},
    headline: {},
    byline: {
        fontSize: "xx-small",

    },
    excerpt: {},
    media: {},

})


export const ArticleCard = (props) => {
    const classes = useStyles();
    const { article } = props;
    return (
        <Grid item>
            <Card>
                <CardActionArea>
                    <CardContent className={classes.contentArea}>

                        <Typography  variant={"overline"} className={classes.date}>
                            {article.date}
                        </Typography>

                        <Typography  variant='h3' className={classes.headline}>
                            {article.title}
                        </Typography>

                        <Typography  gutterBottom={true} variant="subtitle2" color="textSecondary"
                                    className={classes.byline}>
                            Whoever the author is
                        </Typography>

                        <Typography component={'p'} className={classes.excerpt}>
                            {article.content}
                        </Typography>

                    </CardContent>

                </CardActionArea>
            </Card>
        </Grid>
    )

}
 ArticleCard.propTypes = {
    post: PropTypes.object,
 }