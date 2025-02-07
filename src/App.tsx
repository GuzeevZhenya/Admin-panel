// import { Main } from "./Main";
// import { Login } from "../features/auth/ui/Login/Login";
// import { Page404 } from "common/components";
// import { useAuth } from "../features/auth/hooks/useAuth"; // Хук для проверки авторизации
import Main from "components/Main/Main";
import NavBar from "components/NavBar/NavBar";
import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <Main />
    </div>
  );
};
