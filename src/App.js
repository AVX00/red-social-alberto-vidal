import { Navigate, Route, Routes } from "react-router-dom";
import UserFormPage from "./pages/UserFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<UserFormPage isLogin={true} />} />
      <Route path="/register" element={<UserFormPage isLogin={false} />} />
    </Routes>
  );
}

export default App;
