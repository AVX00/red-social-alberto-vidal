import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import UserFormPage from "./pages/UserFormPage";
import jwt_decode from "jwt-decode";
import UserContext from "./store/constexts/userContext/UserContext";
import { loadUserActionCreator } from "./store/actions/user/userActionsCreator";

function App() {
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { username } = jwt_decode(token);
      dispatch(loadUserActionCreator(username));
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<UserFormPage isLogin={true} />} />
        <Route path="/register" element={<UserFormPage isLogin={false} />} />
      </Routes>
    </>
  );
}

export default App;
