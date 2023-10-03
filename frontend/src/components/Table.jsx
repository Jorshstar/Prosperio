import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsEye } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import Search from "./search";
import { deleteProduct } from "../slices/products/productSlice";

export default function Table() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId))
    showModal(false)
  }




  return (
    <div>
      <div className="bg-white h-[15%] w-[98%] flex items-center justify-center">
        <Search />
      </div>
      <div className="flex flex-col items-center justify-center h-[55vh] mt-3 w-[98%]">
        <table className="w-full text-center h-full">
          <tr className="border-t-2 border-b-2 border-black">
            <th className="w-[5%]">S/N</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
          {/*Table rows */}
          {products.map((product, index) =>
        (
          <tr key={product._id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>#{product.price}</td>
            <td>{product.quantity}</td>
            <td>#{product.value}</td>
            <td className="flex items-center justify-evenly mt-2">
              <Link to={`/dashboard/products/${product._id}`}>
                <BsEye className="text-[#0F1377]" />
              </Link>{" "}
              <Link to={`/dashboard/editproduct/${product._id}`}>
                <HiOutlineRefresh className="text-[#0A6502]" />
                </Link>{" "}
                <button
                className=""
                type="button"
                onClick={() => setShowModal(true)}
              >
                <ImBin className="text-[#850707]" />
                </button>
                {showModal ? (
                <>
                  {/*Delete Confirmation Modal*/}
                  <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center justify-center w-[40vw] h-[40vh] bg-white outline-none focus:outline-none">
                        <p>Hey Joshua!</p>
                        <p>Are you sure you want to delete this?</p>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-white bg-green-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 hover:bg-green-300"
                            type="button"
                            onClick={() => handleDeleteProduct(product.id)}
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
              ) : null}
            </td>
          </tr>
          ))}
        </table>
        <p className="text-center w-full text-slate-400">
          Team Prosperio © 2023
        </p>
      </div>
    </div>
  );
}
          
              
              
              
