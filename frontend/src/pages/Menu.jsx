import { Link } from "react-router-dom";
import { BsGrid1X2Fill, BsFillExclamationCircleFill, BsBasket2Fill, BsFillPersonBadgeFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from "react";

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  };

  const dropDown = () => {
    setIsDrop(!isDrop)
  }
  return (
    <div className="flex flex-col items-center justify-between w-[20vw] h-[100vh]  bg-white rounded-md shadow-lg">
      <div className="flex flex-col items-center justify-between h-[50vh] w-[100%] ">
        <Link to='/' className="bg-red-500 w-full h-[10vh] rounded-lg flex items-center justify-center gap-10">
          <div className="border-2 border-white rounded-[50%] w-[35px] h-[35px] text-center text-white">
            p
          </div>
          <div className="font-bold text-[20px]">Prosperio</div>
        </Link>
        <Link
          to="/dashboard/board"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500"
        >
          <BsGrid1X2Fill /> Dashboard
        </Link>
        <div className="relative">
      <button
        className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500"
        onClick={dropDown}
      >
      <BsBasket2Fill/>  Products <IoMdArrowDropdown/>
      </button>
      {isDrop && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <Link
            to="/dashboard/products"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500"
          >
            Deatils
          </Link>
          <Link
            to="/dashboard/addproducts"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500"
          >
            Update
          </Link>
        </div>
      )}
      </div>
        <div className="relative">
      <button
        className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500"
        onClick={toggleDropdown}
      >
      <BsFillPersonBadgeFill/>  Account <IoMdArrowDropdown/>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <Link
            to="/dashboard/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/update"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500"
          >
            Update Profile
          </Link>
        </div>
      )}
    </div>
        <Link
          to="/dashboard/issues"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500"
        >
         <BsFillExclamationCircleFill/> Report issues
        </Link>
      </div>
      <Link
        to="/dashboard/settings"
        className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500"
      >
        <AiTwotoneSetting /> Settings
      </Link>
    </div>
  );
}
