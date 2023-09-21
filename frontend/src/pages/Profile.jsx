import profile from "../assets/profile.png";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center w-[80vw] h-[85vh]">
      <div className="flex items-start justify-center h-[100%] w-[90%] gap-10 mt-5">
        <div className="bg-white rounded-lg shadow-lg w-[45%] h-[100%] flex flex-col items-center justify-center ">
          <div className="h-[100%] w-[95%] flex flex-col gap-2 ">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300">
              Profile Details
            </h2>

            <p className="font-bold  border-gray-300">Name : </p>
            <p className="text-gray-500 font-semibold">Joshua Akinbode</p>

            <p className="font-bold  border-gray-300">Username : </p>
            <p className="text-gray-500 font-semibold">Joshy</p>

            <p className="font-bold  border-gray-300">Email : </p>
            <p className="text-gray-500 font-semibold">your.example@gmail.com</p>

            <p className="font-bold  border-gray-300">Phone number : </p>
            <p className="text-gray-500 font-semibold">080 - 395 - XXX</p>


            <b>Description:</b>
            <p className="text-gray-500 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              lectus auctor, bibendum tortor id, laoreet enim. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed ac lectus auctor,
              bibendum tortor id, laoreet enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed ac lectus auctor, bibendum tortor
              id, laoreet enim
            </p>
          </div>
        </div>
        <div className="w-[45%] h-[100%] flex flex-col gap-7">
          <p className="text-xl">Profile Image:</p>
          <img src={profile} alt="Image of a milo" />
        </div>
      </div>
    </div>
  );
}
