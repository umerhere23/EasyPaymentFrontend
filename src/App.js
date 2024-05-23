import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import Login from "./views/ui/login/Login";

const App = () => {
  const routing = useRoutes(Themeroutes);
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return <div className="dark">{routing}</div>;
  }
  return <Login />;
};

export default App;
