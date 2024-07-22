/** @format */

import svg from "../images/icon-cart.svg";
import Svg from "./Svg";
import "../style.css";

export default function Perfume() {
  return (
    <div className='container2'>
      <div className='perfume'>
        <span> Perfume</span>
      </div>
      <div className='essence'>
        <h2> Gabrielle Essence Eau De Parfum</h2>
      </div>
      <div className='floral'>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
      <div className='label'>
        <label className='num1'> $149.99</label>
        <label className='num2'>$169.99</label>
      </div>
      <div className='button'>
        <button className='button2'>
          <Svg />
          <span className='cart'> Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
