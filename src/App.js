import { Navigate, Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<UserForm isLogin={true} />} />
      <Route path="/register" element={<UserForm isLogin={false} />} />
    </Routes>
  );
}

export default App;
