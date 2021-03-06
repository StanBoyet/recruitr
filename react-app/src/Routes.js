import React from "react";
import { Switch } from "react-router-dom";
import { Provider as AuthenticationProvider } from "./AuthenticationContext";
import PrivateRoute from "./PrivateRoute";
import RecruitrHome from "./components/RecruitrHome";
import Positions from "./components/Positions";
import CreatePosition from "./components/CreatePosition";
import JobApplications from "./components/JobApplications";
import JobApplication from "./components/JobApplication";
import CreateJobApplication from "./components/CreateJobApplication";
import Recruiters from "./components/Recruiters";

const routes = (
  <AuthenticationProvider>
    <Switch>
      <PrivateRoute component={RecruitrHome} exact path="/" />
      <PrivateRoute component={Positions} exact path="/positions" />
      <PrivateRoute component={Recruiters} exact path="/recruiters" />
      <PrivateRoute
        component={JobApplications}
        exact
        path="/positions/:position_id/details"
      />
      <PrivateRoute
        component={JobApplication}
        exact
        path="/job_applications/:job_application_id"
      />
      <PrivateRoute component={CreatePosition} exact path="/positions/new" />
      <PrivateRoute
        component={CreateJobApplication}
        exact
        path="/positions/:position_id/job_applications/new"
      />
    </Switch>
  </AuthenticationProvider>
);
export default routes;
