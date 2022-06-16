export const SignIn = (token, user) => {
  return { type: "SIGN_IN", token, user };
};

export const SignOut = () => {
  return { type: "SIGN_OUT" };
};
