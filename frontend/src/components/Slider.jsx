import { milo } from "../assets/milo.png";
import { vite } from "../assets/logbook.png";
import { logbook } from "../assets/logbook.png";

import '../Css/Slider.css'

export default function Slider() {
  return (
    <div className="slider">
      <div className="images">
        <input type="radio" name="slide" id="tag1" className="none" />
        <input type="radio" name="slide" id="tag2" className="none" />
        <input type="radio" name="slide" id="tag3" className="none" />
        <input type="radio" name="slide" id="tag4" className="none" />
        <img src={milo} alt="tag1" id="img1" className="m1" />
        <img src={vite} alt="tag2" id="img2" className="m2" />
        <img src={logbook} alt="tag3" id="img3" className="m3" />
        <img src={milo} alt="tag4" id="img4" className="m4" />
      </div>
      <div className="dots flex justify-center m-[5px]">
        <label htmlFor="tag1" className=""></label>
        <label htmlFor="tag2" className=""></label>
        <label htmlFor="tag3" className=""></label>
        <label htmlFor="tag4" className=""></label>
      </div>
    </div>
  );
}
