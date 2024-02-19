import { FaTrash } from 'react-icons/fa';
import {Link} from 'react-router-dom'

type CartItemProps = {

    cartItem : any;
};

const CartItem = ({cartItem} : CartItemProps) =>{
    // productID : "ashelsh",
    // photo:"https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg",
    // name : "shirt",
    // price : 3000,
    // quantity : 4, 
    // stock : 10,
  const {photo, productId,name,price,quantity} = cartItem;
  return (
    <div className="cart-item">
      
    <img src = {photo} alt={name}/>
    <article>
      <Link to={`/product/${productId}`}>{name}</Link>
      <span>₹{price}</span>
    </article>

    <div>
      <button>-</button>
      <p>{quantity}</p>
      <button>+</button>
    </div>

    <button>
      <FaTrash/>
    </button>


    </div>
  );
};

export default CartItem;
