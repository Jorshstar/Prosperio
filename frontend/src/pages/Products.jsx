import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../slices/products/productApiSlice";
import Loader from "../components/Loader";
import milo from "../assets/milo.png";
import { Link} from "react-router-dom";

export default function Products() {
  const { productId } = useParams();

  //Fetch the product detaile using the product Id
  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    //Handle error .....product not found
    return (
      <div className="text-2xl font-bold ">
        Error: Unable to fetch Product Details.................
        <br />
        <div> Please confirm you clicked on the right product!!!!</div>
      </div>
    );
  }
  if (!productData) {
    //Handling the case where the product details is null(i.e product not found)
    return <div>Error: Product not Found</div>;
  }
  const { name, sku, categories, price, quantity, description } = productData;

  return (

    <div className="flex flex-col justify-center w-[80vw] h-[85vh] mt-3">
      <div className="flex items-start justify-center w-[100%] h-[100%] gap-10">
        <div className="flex flex-col justify-center w-[80vw] h-[100%]">
          <div className="flex items-start justify-center w-[90%] gap-10 h-[100%]">
            <div className="bg-white rounded-lg shadow-lg w-[45%] h-[100%] flex flex-col gap-2 items-center justify-start ">
              <div className=" w-[95%]">
                <h2 className="text-2xl font-bold ">Product</h2>
                <p className="font-bold border-t-2 border-b-2 border-gray-300">
                  Products Avaliability :{" "}
                  <span className="text-green-700 font-semibold">In Stock</span>
                </p>
              </div>

    <div className="flex flex-col justify-center w-[80vw] h-[85vh]">
      <div className="flex items-start justify-center w-[100%] h-[100%] gap-10 mt-5">
        <div className="bg-white rounded-lg shadow-lg w-[45%] flex flex-col items-center justify-center">
          <div className=" w-[95%] ">
            <h2 className="text-2xl font-bold ">Add Products</h2>
            <div className="flex flex-col justify-center w-[80vw]">
              <div className="flex items-start justify-center w-[90%] gap-10 mt-5">
                <div className="bg-white rounded-lg shadow-lg w-[45%] h-[100%] flex flex-col items-center justify-center ">
                  <div className="h-[100%] w-[95%] ">
                    <h2 className="text-2xl font-bold ">Product</h2>
                    <p className="font-bold border-t-2 border-b-2 border-gray-300 my-2">
                      Products Avaliability :{" "}
                      <span className="text-green-700 font-semibold">
                        In Stock
                      </span>
                    </p>
                  </div>

                  <div className="h-[73vh] w-[95%] ">
                    <p>
                      <b className="red bg-red-500 p-1 mb-2 text-xl text-white">
                        Name:
                      </b>{" "}
                      <span className="">{name}</span>
                    </p>
                    <p>
                      <b className="">SKU: {sku}</b>{" "}
                      <span className="text-gray-500 font-semibold">
                        -183547496489307
                      </span>
                    </p>
                    <p>
                      <b className="">Categories:</b>{" "}
                      <span className="text-gray-500 font-semibold ml-3">
                        {categories}
                      </span>
                    </p>
                    <p>
                      <b className="">Price:</b>{" "}
                      <span className="text-gray-500 font-semibold ml-3">
                        #{price}
                      </span>
                    </p>
                    <p>
                      <b className="">Quantity in Stock:</b>{" "}
                      <span className="text-gray-500 font-semibold ml-3">
                        {quantity}
                      </span>
                    </p>
                    <p className="border-b-2 border-gray-300">
                      <b className="">Total value in Stock:</b>{" "}
                      <span className="text-gray-500 font-semibold ml-3">
                        #{price * quantity}
                      </span>
                    </p>
                    <b>Description:</b>
                    
                    <p className="text-gray-500 font-semibold">{description}</p>
                  </div>
                  <div>
                    <Link to="/dashboard/editproduct:productId">
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-center p-1 rounded mt-2 no-underline">
                        Edit Profile
                      </button>
                    </Link>
                  </div>
                  
                </div>
                <div className="w-[45%] h-[100%]">
                  <p className="text-xl">Product Image:</p>
                  {/* <img src={milo} alt="Image of a milo" className='h-[92%] w-[100%]' /> */}


              <div className=" w-[95%] ">
                <p>
                  <b className="red bg-red-500 p-1 text-xl text-white">Name:</b>{" "}
                  <span className="">{name}</span>
                </p>
                <p>
                  <b className="">SKU: {sku}</b>{" "}
                  <span className="text-gray-500 font-semibold">
                    -183547496489307
                  </span>
                </p>
                <p>
                  <b className="">Categories:</b>{" "}
                  <span className="text-gray-500 font-semibold ml-3">
                    {categories}
                  </span>
                </p>
                <p>
                  <b className="">Price:</b>{" "}
                  <span className="text-gray-500 font-semibold ml-3">
                    #{price}
                  </span>
                </p>
                <p>
                  <b className="">Quantity in Stock:</b>{" "}
                  <span className="text-gray-500 font-semibold ml-3">
                    {quantity}
                  </span>
                </p>
                <p className="border-b-2 border-gray-300">
                  <b className="">Total value in Stock:</b>{" "}
                  <span className="text-gray-500 font-semibold ml-3">
                    #{price * quantity}
                  </span>
                </p>
                <b>Description:</b>
                <div className="text-gray-500 font-semibold">{description}</div>
                <p className="text-gray-500 font-semibold">{description}</p>
              </div>
            </div>
            <div className="w-[45%]">
              <p className="text-xl">Product Image:</p>
              <img src={milo} alt="Image of a milo" className='h-[92%] w-[100%]' />

              <img src={productData.image} alt={`Image of ${name}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
