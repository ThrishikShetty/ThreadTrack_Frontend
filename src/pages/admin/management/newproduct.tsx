import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { userReducer } from "../../../redux/reducer/userReducer";
import { UserReducerInitialState } from "../../../types/reducer-types";
import { useNewProductMutation } from "../../../redux/api/productAPI";
import { responseToast } from "../../../utils/features";
import { Navigate, useNavigate } from "react-router-dom";

const NewProduct = () => {
  
  const {user,loading} = useSelector((state:{userReducer:UserReducerInitialState})=>state.userReducer)
  const navigate = useNavigate();



  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(1);
  const [photoPrev, setPhotoPrev] = useState<string>("");
  const [photo, setPhoto] = useState<File>();

  // const { user } = useSelector((state: RootState) => state.userReducer);
  const [newProduct] = useNewProductMutation();

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoPrev(reader.result);
          setPhoto(file);
        }
      };
    }
  };
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !price || stock < 0 || !category ||!color ||!brand ||!style ||!size || !photo) return;

    const formData = new FormData();

    formData.set("name", name);
    formData.set("price", price.toString());
    formData.set("stock", stock.toString());
    formData.set("photo", photo);
    formData.set("category", category);
    formData.set("color", color);
    formData.set("brand", brand);
    formData.set("style", style);
    formData.set("size", size);

    const res = await newProduct({ id: user?._id!, formData });

    responseToast(res, navigate, "/admin/product");
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <form onSubmit={submitHandler}>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
              required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
              required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
              required
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Category</label>
              <input
              required
                type="text"
                placeholder="eg. Men , Women etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label>Color</label>
              <input
              required
                type="text"
                placeholder="eg. Red, Blue etc"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div>
              <label>Brand</label>
              <input
              required
                type="text"
                placeholder="eg. Puma,Nike etc"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div>
              <label>Style</label>
              <input
              required
                type="text"
                placeholder="eg. Shirt , Jeans ,  etc"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>
            <div>
              <label>Size</label>
              <input
              required
                type="text"
                placeholder="eg.S,L etc"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>

            <div>
              <label>Photo</label>
              <input type="file" required onChange={changeImageHandler} />
            </div>

            {photoPrev && <img src={photoPrev} alt="New Image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
