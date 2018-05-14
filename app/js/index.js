import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CssBaseline} from "material-ui";
import {MuiThemeProvider, createMuiTheme, withStyles} from 'material-ui/styles';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from 'material-ui/Typography';
import Blog from "./blog";

const styles = theme => ({});

const theme = createMuiTheme();

const JoshCoxIO = withStyles(styles)((props) => {
    const {classes} = props;
    return (
        <div>
            <AppBar position="sticky">
                <Toolbar variant="title">
                    <Typography>Josh Cox</Typography>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path="/" component={Blog}/>
            </Switch>
        </div>
    );
});

const App = () => (
    <React.Fragment>
        <CssBaseline/>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <JoshCoxIO/>
            </BrowserRouter>
        </MuiThemeProvider>
    </React.Fragment>
);

ReactDOM.render(<App/>, document.getElementById("root"));