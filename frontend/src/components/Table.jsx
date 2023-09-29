import { useState } from "react";
import { BsEye } from "react-icons/bs";
import {HiOutlineRefresh} from "react-icons/hi";
import {ImBin} from "react-icons/im"
import { Link } from "react-router-dom";

export default function Table() {
  const [showModal, setShowModal] = useState(false);
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
        <td className="flex items-center justify-evenly mt-2"><Link to='/dashboard/products'><BsEye className="text-[#0F1377]"/></Link> <Link to='/dashboard/editproduct' ><HiOutlineRefresh className="text-[#0A6502]"/></Link> <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
        <ImBin className="text-[#850707]" />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-[40vw] h-[40vh] bg-white outline-none focus:outline-none">
                
                <p>Hey Joshua!</p>
                <p>Are you sure you want to delete this?</p>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-green-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-green-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-white bg-red-500 hover:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}</td>
      </tr>
      <tr >
        <td>2</td>
        <td>Goldberg</td>
        <td>Beer</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><Link to='/dashboard/products'><BsEye className="text-[#0F1377]"/></Link> <Link to='/dashboard/editproduct'><HiOutlineRefresh className="text-[#0A6502]"/></Link> <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
        <ImBin className="text-[#850707]" />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-[40vw] h-[40vh] bg-white outline-none focus:outline-none">
                
                <p>Hey Joshua!</p>
                <p>Are you sure you want to delete this?</p>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-green-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-green-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-white bg-red-500 hover:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}</td>
      </tr>
      <tr >
        <td>3</td>
        <td>Goldberg</td>
        <td>Beer</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><Link to='/dashboard/products'><BsEye className="text-[#0F1377]"/></Link> <Link to='/dashboard/editproduct'><HiOutlineRefresh className="text-[#0A6502]"/></Link> <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
        <ImBin className="text-[#850707]" />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-[40vw] h-[40vh] bg-white outline-none focus:outline-none">
                
                <p>Hey Joshua!</p>
                <p>Are you sure you want to delete this?</p>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-green-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-green-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-white bg-red-500 hover:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}</td>
      </tr>
      <tr >
        <td>4</td>
        <td>Goldberg</td>
        <td>Beer</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><Link to='/dashboard/products'><BsEye className="text-[#0F1377]"/></Link> <Link to='/dashboard/editproduct'><HiOutlineRefresh className="text-[#0A6502]"/></Link> <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
        <ImBin className="text-[#850707]" />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-[40vw] h-[40vh] bg-white outline-none focus:outline-none">
                
                <p>Hey Joshua!</p>
                <p>Are you sure you want to delete this?</p>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-green-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-green-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-white bg-red-500 hover:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}</td>
      </tr>
      <tr >
        <td>5</td>
        <td>Goldberg</td>
        <td>Beer</td>
        <td>#600</td>
        <td>10</td>
        <td>#6000</td>
        <td className="flex items-center justify-evenly mt-2"><Link to='/dashboard/products'><BsEye className="text-[#0F1377]"/></Link> <Link to='/dashboard/editproduct'><HiOutlineRefresh className="text-[#0A6502]"/></Link> <button
        className=""
        type="button"
        onClick={() => setShowModal(true)}
      >
        <ImBin className="text-[#850707]" />
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-[40vw] h-[40vh] bg-white outline-none focus:outline-none">
                
                <p>Hey Joshua!</p>
                <p>Are you sure you want to delete this?</p>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-green-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-green-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-white bg-red-500 hover:bg-red-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}</td>
      </tr>
      
    </table>
      <p className="text-center w-full text-slate-400">Team Prosperio © 2023</p>
  </div>
  )
}
