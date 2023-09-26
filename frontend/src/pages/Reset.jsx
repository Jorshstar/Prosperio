import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import log from "../assets/log.png";
import Logo1 from "../components/Logo1";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../slices/usersApiSlice";


export default function Reset() {
  const { password, setPassword } = useState('')
  const { confirmPassword, setConfirmPassword } = useState('')
  const { resetToken } = useParams()
  const navigate = useNavigate()
  const {mutateAsync: resetPassword} = useResetPasswordMutation()

  const handleResetPassword = async () => {
    try {
      if (password !== confirmPassword) {
        toast.error("Password do not match")
        return
      }

      const userData = {
        password: password,
        confirmPassword: confirmPassword,
      }

      await resetPassword(userData, resetToken)
      toast.success("Password reset successfully")

      navigate('/signup')
    } catch (error) {
      toast.error("Failed to reset password")
    }
  }




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
          <input
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none border-2 border-slate-400  text-center rounded-xl h-[20%]"
          />
          <input
            type="password"
            name="confirmPassword" 
            id="confirmPassword"
            placeholder="Comfirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full outline-none border-2 border-slate-400  text-center rounded-xl h-[20%]"
          />
        <Link to='/dashboard/board' className="w-full bg-red-500 h-[20%] text-white font-bold rounded-xl text-center flex items-center justify-center"><button onClick={handleResetPassword}>Reset Password</button></Link>

        <div className="w-full ">
        <Link to='/Signup' className=" text-right h-[15%] underline">login</Link>
        </div>
      
        </div>
    </div>
    
  </div>
  )
}
