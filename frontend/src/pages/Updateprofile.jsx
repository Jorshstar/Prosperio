import { useDispatch, useSelector } from "react-redux";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useUpdateUserMutation } from "../slices/usersApiSlice";

function Updateprofile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
    setUserName(userInfo.userName);
    setEmail(userInfo.email);
    setPhoneNumber(userInfo.phoneNumber);
    setBio(userInfo.bio);
  }, [
    userInfo.firstName,
    userInfo.lastName,
    userInfo.userName,
    userInfo.email,
    userInfo.phoneNumber,
    userInfo.bio,
  ]);

  const [profileImage, setProfileImage] = useState("");
  const [fileName, setFileName] = useState("No Selected file");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        bio,
      }).unwrap();
      console.log(res);
      dispatch(setCredentials(res));
      navigate("/dashboard/profile");
      toast.success("Profile Updated Successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[80vw] h-[85vh] mt-3">
      <div
        className="flex items-start justify-center w-[100%] h-full  gap-10 "
        onSubmit={submitHandler}
      >
        <div className="bg-white rounded-lg shadow-lg w-[40%] h-[92%] ">
          <div className="w-[98%] flex flex-col items-start justify-between gap-1">
          <h2 className="text-2xl font-bold">Update Profile Details</h2>
          <form className="w-[98%]">
            <div>
              <label htmlFor="subject" className="font-bold pl-2">
                Firstname :
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full border border-gray-400 p-2 ml-2  rounded-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="subject" className="font-bold pl-2">
                Lastname :
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full border border-gray-400 p-2 ml-2 rounded-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="" className="font-bold pl-2">
                Username :
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="UserName"
                className="w-full border border-gray-400 p-2 ml-2 rounded-lg"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="" className="font-bold pl-2">
                Email :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                className="w-full border border-gray-400 p-2 ml-2 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="" className="font-bold pl-2">
                Phone number :
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="PhoneNumber"
                className="w-full border border-gray-400 p-2 ml-2 rounded-lg"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="message" className=" font-bold pl-2">
                Message
              </label>
              <textarea
                name="bio"
                rows={3}
                placeholder="message"
                className="w-full border border-gray-400 p-2 ml-2 rounded-lg"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
          </form>
          <div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold text-center p-1 rounded "
            >
              Save Changes
            </button>

            {isLoading && <Loader />}
          </div>
          </div>
        </div>
        <div className="w-[45%] flex flex-col justify-center gap-5">
          <b>
            {" "}
            Profile Image:{" "}
            <span className="text-neutral-500">Jpg, Png, Jpeg</span>
          </b>

          <form
            className="flex flex-col items-center justify-center h-[300px] w-[500px] cursor-pointer rounded-xl bg-white shadow-lg"
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName(files[0].name);
                if (files) {
                  setProfileImage(URL.createObjectURL(files[0]));
                }
              }}
            />
            {profileImage ? (
              <img src={profileImage} width={150} height={180} alt={fileName} />
            ) : (
              <>
                <MdCloudUpload color="#1475cf" size={60} />
                <p>Browse Files to upload</p>
              </>
            )}
          </form>
          <section className="flex items-center justify-between w-full p-[15px] rounded-3xl bg-white shadow-lg">
            <AiFillFileImage color="#1475cf" />
            <span className="flex items-center">
              {fileName} -{" "}
              <MdDelete
                onClick={() => {
                  setFileName("No selected File");
                  setProfileImage(null);
                }}
              />
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Updateprofile;
