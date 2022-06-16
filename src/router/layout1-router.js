import React from "react";

//router
import { Switch, Route } from "react-router";

//pages
import Groups from "../views/dashboard/app/groups";
import GroupDetail from "../views/dashboard/app/group-detail";
import FriendList from "../views/dashboard/app/friend-list";
import ProfileImages from "../views/dashboard/app/profile-images";
import ProfileVideos from "../views/dashboard/app/profile-videos";
import ProfileEvents from "../views/dashboard/app/profile-events";
import EventDetail from "../views/dashboard/app/event-detail";
import Calendar from "../views/dashboard/app/calendar";
import Birthday from "../views/dashboard/app/birthday";
import Weather from "../views/dashboard/app/weather";
import Music from "../views/dashboard/app/music";
import CatergoryGrid from "../views/dashboard/store/store-category-grid";
import CatergoryList from "../views/dashboard/store/store-category-list";
import StoreDetail from "../views/dashboard/store/store-detail";
import StoreCheckout from "../views/dashboard/store/store-checkout";

//market and profile pages
import Market1 from "../views/dashboard/market-place/market1";
import Market2 from "../views/dashboard/market-place/market2";
import Profile1 from "../views/dashboard/profiles/profile1";
import Profile2 from "../views/dashboard/profiles/profile2";
import Profile3 from "../views/dashboard/profiles/profile3";

const Layout1Router = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboards/app/groups" component={Groups}></Route>
        <Route
          path="/dashboards/app/group-detail"
          component={GroupDetail}
        ></Route>
        <Route path="/dashboards/app/friend-list" component={FriendList} />
        <Route
          path="/dashboards/app/profile-images"
          component={ProfileImages}
        />
        <Route
          path="/dashboards/app/profile-videos"
          component={ProfileVideos}
        />
        <Route
          path="/dashboards/app/profile-events"
          component={ProfileEvents}
        />
        <Route path="/dashboards/app/event-detail" component={EventDetail} />
        <Route path="/dashboards/app/calendar" component={Calendar} />
        <Route path="/dashboards/app/birthday" component={Birthday} />
        <Route path="/dashboards/app/weather" component={Weather} />
        <Route path="/dashboards/app/music" component={Music} />
        <Route
          path="/dashboards/store/store-category-grid"
          component={CatergoryGrid}
        />
        <Route
          path="/dashboards/store/store-category-list"
          component={CatergoryList}
        />
        <Route path="/dashboards/store/store-detail" component={StoreDetail} />
        <Route
          path="/dashboards/store/store-checkout"
          component={StoreCheckout}
        />

        <Route path="/dashboards/market-place/market1" component={Market1} />
        <Route path="/dashboards/market-place/market2" component={Market2} />
        <Route path="/dashboards/profiles/profile1" component={Profile1} />
        <Route path="/dashboards/profiles/profile2" component={Profile2} />
        <Route path="/dashboards/profiles/profile3" component={Profile3} />
      </Switch>
    </>
  );
};

export default Layout1Router;
