import React from "react";

//header
import Header from "../../components/partials/dashboard/headerStyle/header";

//sidebar
import RightSidebar from "../../components/partials/dashboard/sidebarStyle/rightsidebar";

//footer
import Footer from "../../components/partials/dashboard/footerStyle/footer";

//default
import WithoutLeftSidebarRouter from "../../router/without-leftsidebar-router";

const WithoutLeftSidebar = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <RightSidebar />
        <div id="content-page" className="content-page">
          <WithoutLeftSidebarRouter />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WithoutLeftSidebar;
