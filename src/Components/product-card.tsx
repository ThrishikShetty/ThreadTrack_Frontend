import {FaPlus} from "react-icons/fa"
import { server } from "../redux/store";
import { CartItem } from "../types/types";
type ProductsProps = {
  productId : string;
  photo : string;
  name : string;
  price : number;
  stock : number;
  brand: string;
  style: string;
  color: string;
  size: string;
  handler:(cartItem: CartItem) => string | undefined;
};


const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  brand,
  style,
  color,
  size,
  handler,
}:ProductsProps) => {
  return (
  <div className="product-card">

  <img src={`${server}/${photo}`} alt={name}/>
  <p>{name}</p>
  <span>₹{price}</span>

  <div>
    <button onClick={()=>handler({ productId,
  price,
  name,
  photo,
  stock,
  quantity:1,
 })}>
      <FaPlus/>
  </button>
  </div>

  </div>
  );
};

export default ProductCard;