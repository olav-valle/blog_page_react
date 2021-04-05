import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";
import {blue, green, orange, purple, red} from "@material-ui/core/colors";

let theme = createMuiTheme({
    palette: {

    },
    status: {
    },
})

theme = responsiveFontSizes(theme);

export default theme;