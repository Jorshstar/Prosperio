import { Link } from "react-router-dom";
import log from "../assets/log.png";
import Logo from "../components/Logo1";

function Login() {
  return (
    <div className="flex items-center justify-center w-creen h-screen">
      <img src={log} alt="" className="h-[100%] w-[30%]" />
      <div className="h-[90%] w-[70%] flex flex-col items-center justify-around">
        <div className=" w-[60%]">
          <div className="flex items-center justify-between w-[100%]">
        <Logo className=""/>
        <p className="text-3xl font-bold">Sign Up</p>
          </div>
        </div>
        <input type="text" name="" id="" placeholder="Firstname" className="w-[60%] h-[7%] outline-none border-2 border-slate-400  text-center rounded-xl"/>
        <input type="text" name="" id="" placeholder="Lastname"  className="w-[60%] outline-none border-2 border-slate-400  text-center rounded-xl h-[7%]"/>
        <input type="text" name="" id="" placeholder="Username"  className="w-[60%] outline-none border-2 border-slate-400  text-center rounded-xl h-[7%]"/>
        <input type="email" name="" id="" placeholder="your.example@gnail.com" className="w-[60%] outline-none border-2 border-slate-400  text-center rounded-xl h-[7%]"/>
        <input type="password" name="" id="" placeholder="Password"  className="w-[60%] outline-none border-2 border-slate-400  text-center rounded-xl h-[7%]"/>
        <input type="password" name="" id="" placeholder="Comfirm Password" className="w-[60%] outline-none border-2 border-slate-400  text-center rounded-xl h-[7%]"/>
        <button className="w-[60%] bg-red-500 h-[7%] text-white font-bold rounded-xl"><Link to='/Signup'>Sign Up</Link></button>
        
        <p className="text-xl font-bold">Already have an account? <Link to='/Signup' className="text-red-500">Log In</Link></p>
      </div>
    </div>
  );
}

export default Login;
