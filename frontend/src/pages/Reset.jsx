import { Link } from "react-router-dom";
import log from "../assets/log.png";
import Logo1 from "../components/Logo1";


export default function Reset() {
  return (
    <div className="flex items-center justify-center w-creen h-screen">
    <img src={log} alt="" className="h-[100%] w-[30%]" />
    <div className="h-[70%] w-[70%] flex flex-col items-center justify-between">
      <div className=" w-[60%]">
        <div className="flex items-center justify-between w-[100%]">
          <Logo1 className="" />
          <p className="text-3xl font-bold">Reset Password</p>
        </div>
      </div>
      <div className="w-[60%] flex flex-col h-[60%] items-center justify-start gap-7">
        <input type="password" name="" id="" placeholder="New Password" className="w-full outline-none border-2 border-slate-400  text-center rounded-xl h-[20%]"/>
        <input type="password" name="" id="" placeholder="Comfirm New Password" className="w-full outline-none border-2 border-slate-400  text-center rounded-xl h-[20%]"/>
        <Link to='/dashboard/board' className="w-full bg-red-500 h-[20%] text-white font-bold rounded-xl text-center flex items-center justify-center"><button >Reset Password</button></Link>

        <div className="w-full ">
        <Link to='/login' className=" text-right h-[15%] underline">login</Link>
        </div>
      
        </div>
    </div>
    
  </div>
  )
}
