import milo from "../assets/milo.png";

export default function Editproducts() {
  return (
    <div className="flex flex-col justify-center w-[80vw] h-fit">
      <div className="flex items-start justify-center w-[90%] h-fit gap-10 mt-5">
        <div className="bg-white rounded-lg shadow-lg w-[45%] h-[100%] flex flex-col items-center justify-center ">
          <div className="h-[100%] w-[95%] ">
            <h2 className="text-2xl font-bold ">Update Product Details</h2>

            <form className="">
              <div className="">
                <label htmlFor="subject" className="font-bold">
                  Product Name :
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="45kg Milo"
                  className="w-full border border-gray-400 p-2 rounded-lg"
                />
                <label htmlFor="" className="font-bold">
                  Product Category :
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Beverages"
                  className="w-full border border-gray-400 p-2 rounded-lg"
                />
                <label htmlFor="" className="font-bold">
                  Product Price :
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="#600"
                  className="w-full border border-gray-400 p-2 rounded-lg"
                />
                <label htmlFor="" className="font-bold">
                  Product Quantity :
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="10"
                  className="w-full border border-gray-400 p-2 rounded-lg"
                />
              </div>
              <div className="">
                <label htmlFor="message" className=" font-bold">
                  Product Description:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Milo is a popular chocolate malt beverage known for its harmonious blend of chocolate and malt flavors with a hint of caramel. Enjoyed hot or cold, it combines cocoa, malted barley, and milk solids to create a comforting and energizing drink. Often fortified with essential vitamins and minerals, Milo provides both a delicious taste and nutritional value. Its a beloved beverage among people of all ages and can be enjoyed on its own or used in various recipes, making it a versatile and cherished drink."
                  className="w-full border border-gray-400 p-2 rounded-lg"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-[45%]">
          <p className="text-xl">Product Image:</p>
          <img src={milo} alt="Image of a milo" />
        </div>
      </div>
    </div>
  );
}
