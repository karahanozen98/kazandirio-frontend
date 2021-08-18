import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SingupPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import React from "react";
import PrivateRoute from "./components/PrivateRouter";
import AdminRoute from "./components/AdminRouter";
import AuthProvider from "./components/AuthProvider";
import Toast from "./pages/Toast";

function App() {
  return (
    <AuthProvider>
      <Toast />
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute exact path="/" component={HomePage} />
          <AdminRoute exact path="/admin" component={AdminPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
