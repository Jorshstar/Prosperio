
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';
import { useState } from 'react';

export default function Products() {
  
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
     <div className="flex flex-col items-center justify-center">
      <div className="flex items-start justify-center w-[90%] gap-10 mt-10">
        <div className="bg-white rounded-lg shadow-lg w-[40vw] h-[100%] ">
        <h2 className="text-2xl font-bold ">Add Products</h2>
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
                className="w-full border border-gray-400 p-2 rounded-lg"
              />
              <label htmlFor="" className="font-bold">
                Product Category:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Product Category"
                className="w-full border border-gray-400 p-2 rounded-lg"
              />
              <label htmlFor="" className="font-bold">Product Price:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Product Price"
                className="w-full border border-gray-400 p-2 rounded-lg"
              />
              <label htmlFor="" className="font-bold">Product Quatity:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Product Quatity"
                className="w-full border border-gray-400 p-2 rounded-lg"
              />
            </div>
            <div className="">
              <label htmlFor="message" className=" font-bold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                placeholder="Enter message"
                className="w-full border border-gray-400 p-2 rounded-lg"
              />
            </div>
            
          </form>
        </div>
        <div className="w-[50%] flex flex-col justify-center gap-5">
          <b> Product Image: <span className="text-neutral-500">Jpg, Png, Jpeg</span></b>
          

      <form  className='flex flex-col items-center justify-center h-[300px] w-[500px] cursor-pointer rounded-xl bg-white shadow-lg' onClick={() => document.querySelector(".input-field").click()}>
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
      <section className='flex items-center justify-between p-[15px] rounded-3xl bg-white shadow-lg'>
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
    
        </div>
      </div>
    </div>
  )
}
