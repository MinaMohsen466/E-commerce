import { FaArrowCircleRight } from "react-icons/fa";
import freestocksImg from "../../images/freestocks.jpg";
import priscillaImg from "../../images/priscilla.jpg";
import sociImg from "../../images/soci.jpg";
const Slider = () => {
  return (
    <div>
      <div className="sliderContainer">
        <div className="slider-data">
          <span className="span-text">Shop Easily</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br />
            elit.Omnis, adipisicing elit. Omnis,minima.
          </p>
          <a href="#productList-container">
            <span>
              Shop-Now <FaArrowCircleRight />
            </span>
          </a>
        </div>
      </div>
      <div className="slider-img">
        <div>
          <img src={freestocksImg} alt="" />
        </div>
        <div>
          <img src={priscillaImg} alt="" />
        </div>
        <div>
          <img src={sociImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
