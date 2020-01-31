import React from "react";
import Main from "../components/Main";
import withTheme from "../components/HoC/with-theme";
import { withAuth, Auth0Provider } from "use-auth0-hooks";
import Head from "next/head";

import config from "../utils/auth_config.json";

const MainWithWrappers = withTheme(Main);

function HomePage() {
  return (
    <>
      <Head>
        <title>Infinity Bottle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={config.redirect_uri}
      >
        <MainWithWrappers />
      </Auth0Provider>
    </>
  );
}

export default withAuth(HomePage);
