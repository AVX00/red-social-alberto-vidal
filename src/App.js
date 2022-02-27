import { Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import Login from "./pages/Login";

function App() {
  return <Route path="/login" element={Login} />;
}

export default App;
