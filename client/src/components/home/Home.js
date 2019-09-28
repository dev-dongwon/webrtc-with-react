import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated, user, token } = authContext;

  useEffect(() => {
    if (token && !user) {
      loadUser();
    }
  }, [token, user]);

  return <div></div>;
};

export default Home;
