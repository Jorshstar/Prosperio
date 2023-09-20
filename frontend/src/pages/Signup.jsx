import { Link } from "react-router-dom";
import log from "../assets/log.png";
import Logo1 from "../components/Logo1";

function Signin() {
  return (
    <div className="flex items-center justify-center w-creen h-screen">
      <img src={log} alt="" className="h-[100%] w-[30%]" />
      <div className="h-[70%] w-[70%] flex flex-col items-center justify-between">
        <div className=" w-[60%]">
          <div className="flex items-center justify-between w-[100%]">
            <Logo1 className="" />
            <p className="text-3xl font-bold">Log In</p>
          </div>
        </div>
        <div className="w-[60%] flex flex-col h-[70%] items-center justify-start gap-7">
          <input type="text" name="" id="" placeholder="Firstname / Email Address" className="w-full outline-none border-2 border-slate-400  text-center rounded-xl h-[25%]"/>
          <input type="password" name="" id="" placeholder="Password " className="w-full outline-none border-2 border-slate-400  text-center rounded-xl h-[25%]"/>

          <Link to='/dashboard/board' className="w-full bg-red-500 h-[25%] text-white font-bold rounded-xl text-center flex items-center justify-center"><button >Log In</button></Link>
          <Link to='/login/forgottenPassword' className="w-full text-left h-[25%]">forgetten Password ?</Link>
        <p className="text-xl font-bold">Dont have an account? <Link to='/login' className="text-red-500">SignUp</Link></p>
          </div>
      </div>
      
    </div>
  );
}

export default Signin;
