import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../views/dashboard/index";

const WithoutLeftSidebarRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/without-leftsidebar" component={Index} />
      </Switch>
    </>
  );
};

export default WithoutLeftSidebarRouter;
