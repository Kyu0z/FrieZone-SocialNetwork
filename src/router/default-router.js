import React from "react";
import Index from "../views/dashboard/index";
import { Switch, Route } from "react-router-dom";

//app
import userProfile from "../views/dashboard/app/user-profile";
import UserPrivacySetting from "../views/dashboard/app/user-privacy-setting";
import FriendProfile from "../views/dashboard/app/friend-profile";
import ProfileBadges from "../views/dashboard/app/profile-badges";
import ProfileForums from "../views/dashboard/app/profile-forum";
import Chat from "../views/dashboard/app/chat";
import Notification from "../views/dashboard/app/notification";
import File from "../views/dashboard/app/file";
import FriendRequest from "../views/dashboard/app/friend-request";
import Todo from "../views/dashboard/app/todo";
import UserAccountSetting from "../views/dashboard/app/user-account-setting";
import UserProfileEdit from "../views/dashboard/app/user-profile-edit";

// icon
import Remixicon from "../views/dashboard/icons/icon-remixicon";
import Lineawesome from "../views/dashboard/icons/icon-lineawesome";
import Fontawesome from "../views/dashboard/icons/icon-fontawesome-5";

// Form
import FormElement from "../views/dashboard/from/form-element";
import FormValidation from "../views/dashboard/from/form-validation";
import FormSwitch from "../views/dashboard/from/form-switch";
import FormWizard from "../views/dashboard/from/form-wizard";
import FormWizardValidate from "../views/dashboard/from/form-wizard-validate";
import FormWizardVertical from "../views/dashboard/from/form-wizard-vertical";
import FormCheckbox from "../views/dashboard/from/form-checkbox";
import FormRadio from "../views/dashboard/from/form-radio";

// table
import DataTable from "../views/dashboard/table/data-table";
import TableBasic from "../views/dashboard/table/tables-basic";
import TableEditable from "../views/dashboard/table/table-editable";

//TransitionGroup
import { TransitionGroup, CSSTransition } from "react-transition-group";

// blog pages
import BlogGrid from "../views/dashboard/blog/bloggrid";
import BlogList from "../views/dashboard/blog/bloglist";
import BlogDetail from "../views/dashboard/blog/blogdetail";

// Email
import Email from "../views/dashboard/email/email";
import EmailCompose from "../views/dashboard/email/email-compose";

//ui-kit
import UiAlerts from "../views/dashboard/ui-kit/ui-alerts";
import UiBadges from "../views/dashboard/ui-kit/ui-badges";
import UiBreadcrumbs from "../views/dashboard/ui-kit/ui-breadcrumb";
import UiButtons from "../views/dashboard/ui-kit/ui-buttons";
import UiCards from "../views/dashboard/ui-kit/ui-cards";
import UiCarousels from "../views/dashboard/ui-kit/ui-carousel";
import UiColors from "../views/dashboard/ui-kit/ui-color";
import UiDropdowns from "../views/dashboard/ui-kit/ui-dropdowns";
import UiEmbedVideos from "../views/dashboard/ui-kit/ui-embed-video";
import UiGrids from "../views/dashboard/ui-kit/ui-grid";
import UiImages from "../views/dashboard/ui-kit/ui-images";
import UiListGroups from "../views/dashboard/ui-kit/ui-list-groups";
import UiModals from "../views/dashboard/ui-kit/ui-modal";
import UiNotifications from "../views/dashboard/ui-kit/ui-notifications";
import UiOffcanvas from "../views/dashboard/ui-kit/ui-offcanvas";
import UiPaginations from "../views/dashboard/ui-kit/ui-pagination";
import UiPopovers from "../views/dashboard/ui-kit/ui-popovers";
import UiProgressbars from "../views/dashboard/ui-kit/ui-progressbars";
import UiTabs from "../views/dashboard/ui-kit/ui-tabs";
import UiTooltips from "../views/dashboard/ui-kit/ui-tooltips";
import UiTypographys from "../views/dashboard/ui-kit/ui-typography";

// extrapages
import Pricing from "../views/dashboard/extrapages/pricing";
import Pricing1 from "../views/dashboard/extrapages/pricing1";
import Timeline from "../views/dashboard/extrapages/timeline";
import Invoice from "../views/dashboard/extrapages/invoice";
import Faq from "../views/dashboard/extrapages/faq";
import PrivacyPolicy from "../views/dashboard/extrapages/privacy-policy";
import TermsofService from "../views/dashboard/extrapages/terms-of-service";
import BlankPage from "../views/dashboard/extrapages/blankpage";

const DefaultRouter = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fadeUp" timeout={300}>
        <Switch>
          <Route path="/" exact component={Index} />

          {/* app */}
          <Route path="/dashboard/app/profile" component={userProfile} />
          <Route
            path="/dashboard/app/user-privacy-setting"
            component={UserPrivacySetting}
          />
          <Route
            path="/dashboard/app/friend-profile"
            component={FriendProfile}
          />
          <Route
            path="/dashboard/app/profile-badges"
            component={ProfileBadges}
          />
          <Route
            path="/dashboard/app/profile-forum"
            component={ProfileForums}
          />
          <Route path="/dashboard/app/chat" component={Chat} />
          <Route path="/dashboard/app/notification" component={Notification} />
          <Route path="/dashboard/app/file" component={File} />
          <Route
            path="/dashboard/app/friend-request"
            component={FriendRequest}
          />
          <Route path="/dashboard/app/todo" component={Todo} />
          <Route
            path="/dashboard/app/user-account-setting"
            component={UserAccountSetting}
          />
          <Route
            path="/dashboard/app/user-profile-edit"
            component={UserProfileEdit}
          />

          {/* icon */}
          <Route path="/dashboard/icon/fontawesome-5" component={Fontawesome} />
          <Route path="/dashboard/icon/remixicon" component={Remixicon} />
          <Route path="/dashboard/icon/lineawesome" component={Lineawesome} />

          {/* Form */}
          <Route path="/dashboard/form/form-element" component={FormElement} />
          <Route
            path="/dashboard/form/form-validation"
            component={FormValidation}
          />
          <Route path="/dashboard/form/form-switch" component={FormSwitch} />
          <Route path="/dashboard/form/form-wizard" component={FormWizard} />
          <Route
            path="/dashboard/form/form-wizard-validate"
            component={FormWizardValidate}
          />
          <Route
            path="/dashboard/form/form-wizard-vertical"
            component={FormWizardVertical}
          />
          <Route
            path="/dashboard/form/form-checkbox"
            component={FormCheckbox}
          />
          <Route path="/dashboard/form/form-radio" component={FormRadio} />

          {/* table */}
          <Route path="/dashboard/table/data-table" component={DataTable} />
          <Route path="/dashboard/table/tables-basic" component={TableBasic} />
          <Route
            path="/dashboard/table/table-editable"
            component={TableEditable}
          />

          {/* blog */}
          <Route path="/dashboard/blog/blog-grid" component={BlogGrid} />
          <Route path="/dashboard/blog/blog-list" component={BlogList} />
          <Route path="/dashboard/blog/blog-detail" component={BlogDetail} />

          {/* Email */}
          <Route path="/dashboard/Email/email" component={Email} />
          <Route
            path="/dashboard/Email/email-compose"
            component={EmailCompose}
          />

          {/*ui kit*/}
          <Route path="/dashboard/ui-kit/ui-alerts" component={UiAlerts} />
          <Route path="/dashboard/ui-kit/ui-badges" component={UiBadges} />
          <Route
            path="/dashboard/ui-kit/ui-breadcrumb"
            component={UiBreadcrumbs}
          />
          <Route path="/dashboard/ui-kit/ui-buttons" component={UiButtons} />
          <Route path="/dashboard/ui-kit/ui-cards" component={UiCards} />
          <Route path="/dashboard/ui-kit/ui-carousel" component={UiCarousels} />
          <Route path="/dashboard/ui-kit/ui-color" component={UiColors} />
          <Route
            path="/dashboard/ui-kit/ui-dropdowns"
            component={UiDropdowns}
          />
          <Route
            path="/dashboard/ui-kit/ui-embed-video"
            component={UiEmbedVideos}
          />
          <Route path="/dashboard/ui-kit/ui-grid" component={UiGrids} />
          <Route path="/dashboard/ui-kit/ui-images" component={UiImages} />
          <Route
            path="/dashboard/ui-kit/ui-list-groups"
            component={UiListGroups}
          />
          <Route path="/dashboard/ui-kit/ui-modal" component={UiModals} />
          <Route
            path="/dashboard/ui-kit/ui-notifications"
            component={UiNotifications}
          />
          <Route
            path="/dashboard/ui-kit/ui-offcanvas"
            component={UiOffcanvas}
          />
          <Route
            path="/dashboard/ui-kit/ui-pagination"
            component={UiPaginations}
          />
          <Route path="/dashboard/ui-kit/ui-popovers" component={UiPopovers} />
          <Route
            path="/dashboard/ui-kit/ui-progressbars"
            component={UiProgressbars}
          />
          <Route path="/dashboard/ui-kit/ui-tabs" component={UiTabs} />
          <Route path="/dashboard/ui-kit/ui-tooltips" component={UiTooltips} />
          <Route
            path="/dashboard/ui-kit/ui-typography"
            component={UiTypographys}
          />

          {/* extrapages */}
          <Route
            path="/dashboard/extrapages/pages-pricing"
            component={Pricing}
          />
          <Route
            path="/dashboard/extrapages/pages-pricing-one"
            component={Pricing1}
          />
          <Route
            path="/dashboard/extrapages/pages-timeline"
            component={Timeline}
          />
          <Route
            path="/dashboard/extrapages/pages-invoice"
            component={Invoice}
          />
          <Route path="/dashboard/extrapages/pages-faq" component={Faq} />
          <Route
            path="/dashboard/extrapages/privacy-policy"
            component={PrivacyPolicy}
          />
          <Route
            path="/dashboard/extrapages/terms-of-service"
            component={TermsofService}
          />
          <Route path="/dashboard/extrapages/blankpage" component={BlankPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DefaultRouter;
