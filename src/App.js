import React from 'react';
import './App.css';
import {
    AppBar,
    Button,
    Container, Fab, fade,
    IconButton, InputAdornment, InputBase,
    makeStyles,
    MuiThemeProvider,
    TextField,
    Toolbar, Typography
} from '@material-ui/core'
import {Menu, PostAdd} from '@material-ui/icons'
import theme from "./theme"
import {SearchBox} from "./SearchBox";


const useStyles = makeStyles((theme) => ({
        main: {
            color: "white",
            justify: "space-around",
            // justifyContent: "center",
            // alignContent: "center"
        },
        homeButton: {
            color: "white",
            padding: theme.spacing(2),
        },
        actionButton: {
            position: "absolute",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        title: {
            justifyContent: "center",
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            }

        },
        menuButton: {
            marginRight: theme.spacing(2)
        },

    })
)

function App() {
    const classes = useStyles();

    return (
        // todo: refactor header to separate comp
        // todo: add a home/main button
        // todo: add a "New Post" button

        <MuiThemeProvider theme={theme}>
            <Container>
                <AppBar className={classes.main} position={"static"}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                        >
                            <Menu/>
                        </IconButton>


                        <Typography className={classes.title} variant={"h5"}>
                            #blog
                        </Typography>

                        <Button className={classes.homeButton}>Home</Button>
                        <SearchBox/>
                    </Toolbar>
                </AppBar>
                <Fab className={classes.actionButton} color="primary" aria-label="add">
                    <PostAdd />
                </Fab>
            </Container>
        </MuiThemeProvider>
    )
}

export default App;
