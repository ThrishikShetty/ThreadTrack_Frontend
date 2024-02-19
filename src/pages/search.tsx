import { useState } from "react"
import ProductCard from "../Components/product-card";


const Search = () => {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [style, setStyle] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {}

  const isPrevPage = page > 1;
  const isNextPage = page < 4;
  

  return (
    <div className="product-search-page">
        <aside>
          <h2>Filters</h2>
          <div>
            <h4>Sort</h4>
            <select value={sort} onChange={(e)=>setSort(e.target.value)}>
              <option value="">None</option>
              <option value="asc">Price (Low to High)</option>
              <option value="dsc">Price (High to Low)</option>
            </select>
          </div>  

          <div>
            <h4>MaxPrice: {maxPrice || ""}</h4>
            <input
             type = "range"
              min={100} 
              max={100000} 
              value={maxPrice}
               onChange={(e)=>setMaxPrice(Number(e.target.value))}/>
          </div>

          <div>
            <h4>Category</h4>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option value="">All</option>
              <option value="">Sample 1</option>
              <option value="">Sample 2</option>
            </select>
          </div>

          <div>
            <h4>Size</h4>
            
              <button>28</button>
              <button>30</button>
              <button>32</button>
              <button>34</button>
              <button>36</button>

          </div>

          <div>
            <h4>Colors</h4>
            <select value={color} onChange={(e)=>setColor(e.target.value)}>
              <option value="">All</option>
              <option value="">Red </option>
              <option value="">Green</option>
              <option value="">Blue</option>
              <option value="">Voilet</option>
              <option value="">Pink</option>

            </select>
          </div>

          <div>
            <h4>Brand</h4>
            <select value={brand} onChange={(e)=>setBrand(e.target.value)}>
              <option value="">All</option>
              <option value="">Adibas </option>
              <option value="">puna </option>
              <option value="">nyka </option>

            </select>
          </div>

          <div>
            <h4>Style</h4>
            <select value={style} onChange={(e)=>setStyle(e.target.value)}>
              <option value="">All</option>
              <option value="">style 1</option>
              <option value="">style 2</option>
            </select>
          </div>

          
          
        </aside> 
        

        <main>
          <h1>Products</h1>
          <input type="text" placeholder="Search by name..." value={search} onChange={e=>setSearch(e.target.value)}/>

          <div className="search-product-list">
            <ProductCard
            productId="ashlesh"
            name="shirt"
            price={421}
            stock={3213}
            handler={addToCartHandler}
            photo="https://m.media-amazon.com/images/I/71xZY5-a1oL._SY879_.jpg"/>

            <ProductCard
            productId="ashlesh"
            name="Tshirt"
            price={241}
            stock={3213}
            handler={addToCartHandler}
            photo="https://m.media-amazon.com/images/I/51byp5tQ86L._SX679_.jpg"/>


          </div>

          <article>
            <button disabled={!isPrevPage} onClick={()=>setPage((prev)=>prev-1)}>Prev</button>
            <span>
              {page} of {4}
            </span>
            <button disabled={!isNextPage} onClick={()=>setPage((prev)=>prev+1)}>Next</button>


          </article>

        </main>



    </div>
  )
}

export default Search
