import React from "react";
import Main from "../components/Main";
import withTheme from "../components/HoC/with-theme";
import { withAuth, Auth0Provider } from "use-auth0-hooks";

import config from "../utils/auth_config.json";

const MainWithWrappers = withTheme(Main);

function HomePage() {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={config.redirect_uri}
    >
      <MainWithWrappers />
    </Auth0Provider>
  );
}

export default withAuth(HomePage);
