import React from "react";

//header
import Header from "../../components/partials/dashboard/headerStyle/header";

//sidebar
import RightSidebar from "../../components/partials/dashboard/sidebarStyle/rightsidebar";

//sidebar
import Sidebar from "../../components/partials/dashboard/sidebarStyle/sidebar";

//footer
import Footer from "../../components/partials/dashboard/footerStyle/footer";

//default
import DefaultRouter from "../../router/default-router";

const Default = () => {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Header />
        <RightSidebar />
        <div id="content-page" className="content-page">
          <DefaultRouter />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Default;
