import { BsEye } from "react-icons/bs";
import {HiOutlineRefresh} from "react-icons/hi";
import {ImBin} from "react-icons/im"

export default function Table() {
  return (
    <div className="flex flex-col items-center justify-center h-[55vh]">
    <table className="w-full text-center h-full">
      <tr className="border-t-2 border-b-2 border-red-500">
        <th className="w-[5%]">S/N</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Value</th>
        <th>Action</th>
      </tr>
      <tr >
        <td>1</td>
        <td>Goldberg</td>
        <td>Beer</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><BsEye className="text-[#0F1377]"/> <HiOutlineRefresh className="text-[#0A6502]"/> <ImBin className="text-[#850707]"/></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Fanta</td>
        <td>Beverage</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><BsEye className="text-[#0F1377]"/> <HiOutlineRefresh className="text-[#0A6502]"/> <ImBin className="text-[#850707]"/></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Milo</td>
        <td>Beverage</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><BsEye className="text-[#0F1377]"/> <HiOutlineRefresh className="text-[#0A6502]"/> <ImBin className="text-[#850707]"/></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Cornflakes</td>
        <td>Beverage</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><BsEye className="text-[#0F1377]"/> <HiOutlineRefresh className="text-[#0A6502]"/> <ImBin className="text-[#850707]"/></td>
      </tr>
      <tr>
        <td>5</td>
        <td>Cereals</td>
        <td>Cereals</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><BsEye className="text-[#0F1377]"/> <HiOutlineRefresh className="text-[#0A6502]"/> <ImBin className="text-[#850707]"/></td>
      </tr>
      <tr>
        <td>6</td>
        <td>Turkey</td>
        <td>Food</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><BsEye className="text-[#0F1377]"/> <HiOutlineRefresh className="text-[#0A6502]"/> <ImBin className="text-[#850707]"/></td>
      </tr>
    </table>
      <p className="text-center w-full text-slate-400">Team Prosperio © 2023</p>
  </div>
  )
}
