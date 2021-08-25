import React from "react";
import {Redirect} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Timesheet from "./views/timesheet/Timesheet";

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/timesheet">
                        <Timesheet/> 
                    </Route>

                    <Route exact path="/" render={() => <Redirect to="/timesheet"/>}/>
                </Switch>
            </div>
        </Router>
    );
}
