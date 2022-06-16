import React from "react";

//router
import { Switch, Route } from "react-router";

//layoutpages
import Default from "../layouts/dashboard/default";
import WithoutLeftSidebar from "../layouts/dashboard/without-leftsidebar";
import WithoutRightSidebar from "../layouts/dashboard/without-rightsidebar";
import Layout1 from "../layouts/dashboard/layout-1";
import Simple from "../layouts/dashboard/simple";
import RouterMiddleware from "./middleware";

const IndexRouters = () => {
  return (
    <>
      <Switch>
        <RouterMiddleware>
          <Route
            path="/without-leftsidebar"
            component={WithoutLeftSidebar}
          ></Route>
          <Route
            path="/without-rightsidebar"
            component={WithoutRightSidebar}
          ></Route>
          <Route path="/auth" component={Simple}></Route>
          <Route path="/errors" component={Simple}></Route>
          <Route path="/extra-pages" component={Simple}></Route>
          <Route path="/dashboards" component={Layout1}></Route>
          <Route path="/" component={Default}></Route>
        </RouterMiddleware>
      </Switch>
    </>
  );
};

export default IndexRouters;
