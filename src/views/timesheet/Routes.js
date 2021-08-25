import React from "react";
import {Redirect} from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import TimeTracker from "./timeTracker/TimeTracker";
import Projects from "./projects/Projects";
import Members from "./members/Members";
import CostHead from "./costHead/CostHead";
import Settings from "./settings/Settings";

/**
 * Defines a component Routes
 * Used for routing in Certmanager
 * @param props
 * @returns {*}
 * @constructor
 */

function Routes() {
    /**
     * renders JSX of Certmanager component
     */
    return (
        <div style={{width: "100%"}}>
            {/* <Route path="/timesheet/dashboard">
                <Dashboard/>
            </Route> */}
            <Route path="/timesheet/timeTracker">
                <TimeTracker/>
            </Route>
            <Route exact path="/timesheet/projects">
                <Projects/>
            </Route>

            <Route exact path="/timesheet/members">
                <Members/>
            </Route>

            <Route exact path="/timesheet/costHead">
                <CostHead/>
            </Route>
            <Route exact path="/timesheet/settings">
                <Settings/>
            </Route>
            <Route exact path="/timesheet" render={() => <Redirect to="/timesheet/timeTracker"/>}
            />
        </div>
    );
}

/**
 * @exports Routes component
 */
export default Routes;
