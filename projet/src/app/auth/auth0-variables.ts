interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6kWRaSJIrNGEQKe5xcgSMcerBvZCSL8p',
  domain: 'bearideas.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
