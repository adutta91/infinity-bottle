import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../Navbar";
import config from "../../utils/auth_config.json";

import { withAuth, withLoginRequired, Auth0Provider } from "use-auth0-hooks";

const Main = () => (
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={config.redirect_uri}
  >
    <Navbar />
  </Auth0Provider>
);

export default withAuth(Main);
