import { BsListCheck } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { TbCurrencyNaira, TbShoppingCartX } from "react-icons/tb";
import Table from "../components/table";


export default function Board() {
  return (
    <div className="w-full flex flex-col items-center justify-between  h-[85vh]">
      <div className="flex items-center justify-between  h-[20%] w-[98%] text-white">
        <button className=" w-[20%] h-[90%] rounded-xl bg-[#0F1377] flex items-center justify-evenly transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-[#0F1377] duration-300">
          <div>
            <GiShoppingCart className="text-4xl font-semibold" />
          </div>
          <div className="text-center">
            <p>Total Products</p>
            <p>20</p>
          </div>
        </button>
        <button className=" w-[20%] h-[90%] rounded-xl bg-[#0A6502] flex items-center justify-evenly transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-[#0A6502] duration-300">
          <div>
            <TbCurrencyNaira className="text-4xl " />
          </div>
          <div className="text-center">
            <p>Total Stock Value</p>
            <p>20,000</p>
          </div>
        </button>
        <button className=" w-[20%] h-[90%] rounded-xl bg-[#850707] flex items-center justify-evenly transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-[#850707] duration-300">
          <div>
            <TbShoppingCartX className="text-4xl" />
          </div>
          <div className="text-center">
            <p>Out of Stock</p>
            <p>4</p>
          </div>
        </button>
        <div className=" w-[20%] h-[90%] rounded-xl bg-[#530441] flex items-center justify-evenly transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 hover:bg-[#530441] duration-300">
          {" "}
          <div>
            <BsListCheck className="text-4xl " />
          </div>
          <div className="text-center">
            <p>All Categories</p>
            <p>4</p>
          </div>
        </div>
      </div>
      <div className="bg-red-500 h-[10%] w-[98%] flex items-center justify-center">
        <div className="flex items-center justify-between w-[95%]">
          <p className="text-4xl font-bold">Items</p>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search by name"
            className="placeholder:text-center h-[30px] rounded-lg w-[300px] pl-3"
          />
        </div>
      </div>
      <div className="h-[60%] w-[98%]"><Table/></div>
    </div>
  );
}
