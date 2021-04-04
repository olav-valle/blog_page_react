import React from 'react'
import {fade, IconButton, InputBase, makeStyles, Toolbar} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import theme from "./theme";

const useStyles = makeStyles({
    searchBox: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: "100%",
        // maxHeight: "fit-content",
        [theme.breakpoints.up('sm')]: {
            //marginLeft: theme.spacing(1),
            width: 'auto',
        }

    },
    searchInput: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        flexGrow: 1,
//        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        }
    }
})

export const SearchBox = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchBox}>
            <InputBase
                // todo: fix active/highlight color
                className={classes.searchInput}
                placeholder={"Search..."}
                endAdornment={<IconButton size={"small"}><SearchIcon/></IconButton>}

            />
        </div>)
};