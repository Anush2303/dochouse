import React, { useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import { BrowserRouter as Router,Route,Redirect,Switch } from "react-router-dom";
import Routes from './components/Routes';
import Navbar from "./components/Navigation/Navbar";
import MainHeader from "./components/Main Section/MainHeader";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const login = useCallback(() => {
  //   setIsLoggedIn(true);
  // }, []);

  // const logout = useCallback(() => {
  //   setIsLoggedIn(true);
  // }, []);

  return (
    <div>
      <Router>
      <Routes/>
      </Router>
    </div>
  );
}
export default App;
