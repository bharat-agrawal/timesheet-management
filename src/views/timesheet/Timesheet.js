import Container from "@material-ui/core/Container";
import React from "react";
import Routes from "./Routes";
import Header from "../../components/header/Header"
import {MenuItems} from "./MenuItems"
import useStyles from "./Style";
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Timesheet() {
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
    const classes = useStyles();
    return (
        <div className={classes.root}>
        
        
<CssBaseline/>
            <Header menu={MenuItems}/>
            <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
                <Container maxWidth="xl" className={classes.container}>
                        <Routes/>
                </Container>
            </main>
        </div>
    )
}
