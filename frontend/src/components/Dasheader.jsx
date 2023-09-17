import { Link } from "react-router-dom/dist";



export default function Dasheader() {
  return (
    <div className="flex items-center justify-between w-[80vw] h-[10vh]  bg-white rounded-md shadow-lg px-5">
<p className="font-bold text-xl">Hello, <Link to='/dashboard/profile' className="text-red-500">Joshua</Link></p>  
<Link to='/signup' className="bg-red-500 text-white font-semibold text-center p-3 rounded-[50px] w-[100px]">Log Out</Link>      
    </div>
  );
}
