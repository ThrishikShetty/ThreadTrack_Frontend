import {Link} from 'react-router-dom'
import ProductCard from '../Components/product-card';

const Home = () => {
  const addToCartHandler = () => {};
 return ( 
 <div className="home">
    <section></section>

    <h1>Latest Products


      <Link to="/search" className="findmore">
        More
      </Link>
    </h1>

    <main>
    <ProductCard
      productId="ashlesh"
      name="shirt"
      price={421}
      stock={3213}
      handler={addToCartHandler}
      photo="https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg"/>


<ProductCard
      productId="ashlesh"
      name="shirt"
      price={421}
      stock={3213}
      handler={addToCartHandler}
      photo="https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg"/>

<ProductCard
      productId="ashlesh"
      name="shirt"
      price={421}
      stock={3213}
      handler={addToCartHandler}
      photo="https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg"/>

<ProductCard
      productId="ashlesh"
      name="shirt"
      price={421}
      stock={3213}
      handler={addToCartHandler}
      photo="https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg"/>

      
    </main>

 </div>
 );
};
export default Home;
