const oktaAuthConfig = {
  clientId: "0oa3tepg1wM1wfGCG5d7",
  issuer: "https://dev-69126205.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
};
const oktaSignInConfig = {
  baseUrl: "https://dev-69126205.okta.com",
  clientId: "0oa3tepg1wM1wfGCG5d7",
  redirectUri: "http://localhost:3000/login/callback",
  authParams: {},
};

export { oktaAuthConfig, oktaSignInConfig };
