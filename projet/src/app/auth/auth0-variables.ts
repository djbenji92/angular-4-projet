interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ciPLvG7vP1eoAgL0bOxEL1N6EvaEUzPH',
  domain: 'restoideas.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
