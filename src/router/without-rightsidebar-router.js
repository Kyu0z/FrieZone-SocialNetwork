import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../views/dashboard/index";

const WithoutRightSidebarRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/without-rightsidebar" component={Index} />
      </Switch>
    </>
  );
};

export default WithoutRightSidebarRouter;
