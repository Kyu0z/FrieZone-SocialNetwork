import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUser } from "../store/auth";
import { checkCondition } from "./condition";
import { getActions } from "./action";

const rules = [
  {
    path: /^\/auth\/(sign-in|sign-up|recoverpw|confirm-mail|lock-screen)/,
    condition: {
      isGuest: true,
    },
    fallback: {
      redirectTo: "/",
    },
  },
  {
    path: /.*/,
    condition: {
      isSignedIn: true,
    },
    fallback: {
      redirectTo: "/auth/sign-in",
    },
  },
];

export const getComponents = (user, location) => {
  for (const { path, condition, fallback } of rules) {
    if (path.test(location)) {
      if (!checkCondition(condition, { user, path })) {
        return getActions(fallback);
      }
    }
  }
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  };
};

const RouterMiddleware = ({ user, children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {getComponents(user, pathname)}
      {children}
    </>
  );
};

export default connect(mapStateToProps)(RouterMiddleware);
