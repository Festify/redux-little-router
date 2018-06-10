// @flow
import immutableRouterForBrowser from './environment/browser-router';
import immutableRouterForExpress from './environment/express-router';
import immutableRouterForHash from './environment/hash-router';
import immutableRouterForHapi from './environment/hapi-router';

export {
  // High-level Redux API
  immutableRouterForBrowser,
  immutableRouterForExpress,
  immutableRouterForHapi,
  immutableRouterForHash
};
