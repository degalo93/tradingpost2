import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
//main would be the search page with the cards in the app also need to add landing 
import Main from "./Main"; 


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
   <Navbar />
   <Main /> 
      </div>
    </Router>
  </Provider>
);

export default App;
