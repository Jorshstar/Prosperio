import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Signin from "./Signin"
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Board from "./Board";
import Products from "./Products";
import Issues from "./Issues";
import Settings from "./Settings";
import Profile from "./Profile";
import Updateprofile from "./Updateprofile";
import Addproducts from "./Addproducts";
import Forgetten from "./Forgetten";
import Reset from "./Reset";
import Editproduct from "./Editproduct";


function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signin />} />

      <Route path="/login" element={<Signup />} />

      <Route path="/resetpassword" element={<Reset/>}/>
      <Route path="/login/forgottenPassword" element={<Forgetten/>}/>

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/board" element={<Board />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/editproduct" element={<Editproduct/>}/>
        <Route path="/dashboard/addproducts" element={<Addproducts />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/update" element={<Updateprofile />} />
        <Route path="/dashboard/issues" element={<Issues />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
