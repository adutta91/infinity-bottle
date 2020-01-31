import React from "react";
import Button from "../Button";
import { useAuth } from "use-auth0-hooks";
import { useRouter } from "next/router";

import config from "../../utils/auth_config.json";

const AuthButton = () => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, login, logout } = useAuth();

  return isAuthenticated ? (
    <Button onClick={() => logout({ returnTo: config.redirect_uri })}>
      Log out
    </Button>
  ) : (
    <Button
      onClick={() =>
        login({
          redirect_uri: config.redirect_uri,
          appState: { returnTo: { pathname, query } }
        })
      }
    >
      Log in
    </Button>
  );
};

export default AuthButton;
