import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { useState } from 'react';

export default function Addproducts() {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
  return (
    <div className="flex flex-col justify-center items-center w-[80vw] h-[85vh] ">
      <div className="flex items-center justify-center gap-5 w-[100%] h-[90%] ">
        <div className="bg-white rounded-lg shadow-lg w-[45%] h-[95%] px-3 ">
        <h2 className="text-2xl font-bold ">Add Products Details</h2>
          <form className="">
            <div className="">
              <label htmlFor="subject" className="font-bold">
                product Name:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="product Name"
                className="w-full border border-gray-400 pt-2 rounded-lg"
              />
              <label htmlFor="" className="font-bold">
                Product Category:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Product Category"
                className="w-full border border-gray-400 pt-2 rounded-lg"
              />
              <label htmlFor="" className="font-bold">Product Price:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Product Price"
                className="w-full border border-gray-400 pt-2 rounded-lg"
              />
              <label htmlFor="" className="font-bold">Product Quantity:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Product Quantity"
                className="w-full border border-gray-400 pt-2 rounded-lg"
              />
            </div>
            <div className="">
              <label htmlFor="message" className=" font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Enter message"
                className="w-full border border-gray-400 pt-2 rounded-lg"
              />
            </div>
            
          </form>
        </div>
        <div className="w-[45%] flex flex-col justify-center gap-5 h-[95%]">
          <b> Product Image: <span className="text-neutral-500">Jpg, Png, Jpeg</span></b>
          

      <form  className='flex flex-col items-center justify-center h-[300px] w-[450px] cursor-pointer rounded-xl bg-white shadow-lg' onClick={() => document.querySelector(".input-field").click()}>
        <input
          type="file"
          accept='image/*'
          className='input-field'
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <img src={image} width={150} height={150} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color='#1475cf' size={60} />
            <p>Browse Files to upload</p>
          </>
        )}
      </form>
      <section className='flex items-center justify-between w-full p-[15px] rounded-3xl bg-white shadow-lg'>
        <AiFillFileImage color='#1475cf' />
        <span className='flex items-center'>
          {fileName} -{' '}
          <MdDelete
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
            }}
          />
        </span>
      </section>
      <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Save Changes
            </button>
        </div>
      </div>
    </div>
  )
}
