import React from "react";

//header
import Header from "../../components/partials/dashboard/headerStyle/header";

//sidebar
import Sidebar from "../../components/partials/dashboard/sidebarStyle/sidebar";

//footer
import Footer from "../../components/partials/dashboard/footerStyle/footer";

//default
import WithoutRightSidebarRouter from "../../router/without-rightsidebar-router";

const WithoutRightSidebar = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Header />
        <div id="content-page" className="content-page">
          <WithoutRightSidebarRouter />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WithoutRightSidebar;
