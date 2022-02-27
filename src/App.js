import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import UserFormPage from "./pages/UserFormPage";

function App() {
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
