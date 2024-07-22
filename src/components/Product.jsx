/** @format */

import Perfume from "./Perfume";
import image from "../images/image-product-desktop.jpg";
import image2 from "../images/image-product-mobile.jpg";
import "../style.css";

export default function Product() {
  return (
    <div className='container'>
      <div className='image'>
        <img className='img' src={image} />
        <img className='img2' src={image2} />
      </div>
      <div className='Perfume'>
        <Perfume />
      </div>
    </div>
  );
}
