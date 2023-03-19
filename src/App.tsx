import React from "react";
import "./App.css";
import MainPage from "./pages/main";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RefactorPost from "./pages/Post";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route path="/" Component={MainPage} />
            <Route path="/posts/:id" Component={RefactorPost} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
