import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Signin from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Board from "./Board";
import Products from "./Products";
import Accounts from "./Accounts";
import Issues from "./Issues";
import Settings from "./Settings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/board" element={<Board />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/accounts" element={<Accounts />} />
        <Route path="/dashboard/issues" element={<Issues />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
