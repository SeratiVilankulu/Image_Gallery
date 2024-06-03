import { Route } from "react-router-dom";

import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Route path="/">
        <LoginPage />
      </Route>
      <Route path="/Register">
        <RegisterPage />
      </Route>
      <Route path="/Home">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
