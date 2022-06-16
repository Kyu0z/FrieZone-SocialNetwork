import { keys } from "lodash";

export const checkCondition = (condition, { user, path }) => {
  const check = (key) => {
    switch (key) {
      case "isGuest":
        return !user;
      case "isSignedIn":
        return !!user;
      default:
        return false;
    }
  };

  for (const key of keys(condition)) {
    if (!check(key)) {
      return false;
    }
  }
  return true;
};
