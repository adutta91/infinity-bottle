import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "use-auth0-hooks";
import config from "../../utils/auth_config.json";

const NavBar = () => {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  return (
    <navbar>
      {!isAuthenticated && (
        <button
          onClick={() =>
            login({
              redirect_uri: config.redirect_uri,
              appState: { returnTo: { pathname, query } }
            })
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && (
        <button onClick={() => logout({ returnTo: config.redirect_uri })}>
          Log out
        </button>
      )}
    </navbar>
  );
};

export default NavBar;
