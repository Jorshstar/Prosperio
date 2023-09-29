import { Link } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillExclamationCircleFill,
  BsFillPersonBadgeFill,
} from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-between w-[20vw] h-[100vh]  bg-white rounded-md shadow-lg">
      <div className="flex flex-col items-center justify-between h-[50%] w-[100%] ">
        <Link
          to="/"
          className="bg-red-500 w-full h-[10vh] rounded-lg flex items-center justify-center gap-10 no-underline"
        >
          <div className="border-2 border-white rounded-[50%] w-[35px] h-[35px] text-center text-white">
            p
          </div>
          <div className="font-bold text-[20px]">Prosperio</div>
        </Link>
        <Link
          to="/dashboard/board"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500 no-underline"
        >
          <BsGrid1X2Fill /> Dashboard
        </Link>
        <Link
          to="/dashboard/addproducts"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500 no-underline"
        >
          <BsGrid1X2Fill /> Products
        </Link>
        <div className="relative">
          <button
            className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500 no-underline"
            onClick={toggleDropdown}
          >
            <BsFillPersonBadgeFill /> Account <IoMdArrowDropdown />
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <Link
                to="/dashboard/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500 no-underline"
              >
                Profile
              </Link>
              <Link
                to="/dashboard/update"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:text-red-500 no-underline"
              >
                Update Profile
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/dashboard/issues"
          className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500 no-underline"
        >
          <BsFillExclamationCircleFill /> Report issues
        </Link>
      </div>
      <Link
        to="/dashboard/settings"
        className="font-semi-bold text-xl text-[20px] flex items-center justify-center gap-3 hover:text-red-500 focus:text-red-500 no-underline"
      >
        <AiTwotoneSetting /> Settings
      </Link>
    </div>
  );
}
