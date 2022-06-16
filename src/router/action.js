import { keys, get, castArray } from "lodash";
import { Redirect } from "react-router-dom";

const RedirectTo = ({ value }) => {
  return <Redirect to={value} />;
};

export const getActions = (action) => {
  const getAction = (action, params, key) => {
    if (typeof params !== "string") {
      return getAction(action, { value: params });
    }
    switch (action) {
      case "redirectTo":
        return <RedirectTo key={key} {...params} />;
      default:
        return false;
    }
  };

  const components = [];
  for (const key of keys(action)) {
    for (const item in castArray(get(action, key))) {
      const component = getAction(key, item, components.length);
      if (component) {
        components.push(component);
      }
    }
  }
  return components;
};
