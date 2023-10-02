import milo from '../assets/milo.png'

export default function Products() {
  
 
  return (
    <div className="flex flex-col justify-center w-[80vw] h-[85vh]">
    <div className="flex items-start justify-center w-[100%] h-[100%] gap-10 mt-5">
      <div className="bg-white rounded-lg shadow-lg w-[45%] flex flex-col items-center justify-center">
        <div className=" w-[95%] ">
          <h2 className="text-2xl font-bold ">Add Products</h2>

          <p className="font-bold border-t-2 border-b-2 border-gray-300 my-2">
            Products Avaliability :{" "}
            <span className="text-green-700 font-semibold">In Stock</span>
          </p>
        </div>

        <div className="h-[73vh] w-[95%] ">
          <p>
            <b className="red bg-red-500 p-1 mb-2 text-xl text-white">Name:</b>{" "}
            <span className="">Milo</span>
          </p>
          <p>
            <b className="">SKU: BEV</b>{" "}
            <span className="text-gray-500 font-semibold">
              -183547496489307
            </span>
          </p>
          <p>
            <b className="">Categories:</b>{" "}
            <span className="text-gray-500 font-semibold ml-3">
              Beverages
            </span>
          </p>
          <p>
            <b className="">Price:</b>{" "}
            <span className="text-gray-500 font-semibold ml-3">#600</span>
          </p>
          <p>
            <b className="">Quantity in Stock:</b>{" "}
            <span className="text-gray-500 font-semibold ml-3">10</span>
          </p>
          <p className="border-b-2 border-gray-300">
            <b className="">Total value in Stock:</b>{" "}
            <span className="text-gray-500 font-semibold ml-3">#6000</span>
          </p>
          <b>Description:</b>
          <div className="text-gray-500 font-semibold">
            Milo is a popular chocolate malt beverage known for its harmonious
            blend of chocolate and malt flavors with a hint of caramel.
            Enjoyed hot or cold, it combines cocoa, malted barley, and milk
            solids to create a comforting and energizing drink. Often
            fortified with essential vitamins and minerals, Milo provides both
            a delicious taste and nutritional value. 
          </div>
        </div>
      </div>
      <div className="w-[45%] h-[100%]">
        <p className='text-xl'>Product Image:</p>
        <img src={milo} alt="Image of a milo" className='h-[92%] w-[100%]' />
      </div>
    </div>
  </div>
  )
}
