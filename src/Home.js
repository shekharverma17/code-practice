import React from "react";
import { useAuth } from "./ AuthContext";

const Home = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      {user ? (
        <>
          <h2> Welcome {user.email}!</h2>
          <button onClick={logout}> Logout </button>
        </>
      ) : (
        <>
          <h2> Please login!</h2>
          <button
            onClick={() => {
              login("shekhar@text.com", "123456");
            }}
          >
            {" "}
            Login{" "}
          </button>
        </>
      )}
    </>
  );
};

export default Home;
