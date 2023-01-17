import React, { createContext, useState } from "react";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  login: () => {},
  logout: () => {},
  userId: null,
  currentCar: null,
  displayCarHandler: () => {},
});

const calculateRemainingTime = (exp) => {
  const currentTime = new Date().getTime();
  const expTime = exp;
  const remainingTime = expTime - currentTime;
  return remainingTime;
};

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");

  const remainingTime = calculateRemainingTime(storedExp);

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const GlobalContextProvider = (props) => {
  const localData = getLocalData();

  let initalToken;
  if (localData) {
    initalToken = localData.token;
  }

  const [token, setToken] = useState(initalToken);
  const [userId, setUserId] = useState(null);
  const [currentCar, setCurrentCar] = useState("");

  const logout = () => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("exp");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const login = (token, expirationTime, userId) => {
    setToken(token);
    console.log(token, "token here");
    setUserId(userId);
    console.log(userId, "HERE IN GLOBAL CONTEXT");
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("exp", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logout, remainingTime);
  };

  const displayCarHandler = (car) => {
    console.log(car);
    setCurrentCar(car);
  };

  const contextValues = {
    token,
    login,
    logout,
    userId,
    currentCar,
    displayCarHandler,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
