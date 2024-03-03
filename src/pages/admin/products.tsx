import { ReactElement, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import TableHOC from "../../Components/admin/TableHOC";
import { useAllProductsQuery } from "../../redux/api/productAPI";
import toast from "react-hot-toast";
import { CustomError } from "../../types/api-types";
import { useSelector } from "react-redux";
import { UserReducerInitialState } from "../../types/reducer-types";
import { server } from "../../redux/store";
import { Skeleton } from "../../Components/loader";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];




const Products = () => {

  const {user}=useSelector((state:{userReducer:UserReducerInitialState})=>state.userReducer)

  const { isLoading, isError, error, data } = useAllProductsQuery(user?._id!);

  const [rows, setRows] = useState<DataType[]>([]);

  if (isError) {
    toast.error((error as CustomError).data.message);
  }

useEffect(() => {
 
  if (data)
    setRows(
      data.products.map((i) => ({
        // productId:i._id
        name: i.name,
        price: i.price,
        stock: i.stock,
        brand: i.brand,
        color: i.color,
        size: i.size,
        style: i.style,
        photo: <img src={`${server}/${i.photo}`} />,
        action: <Link to={`/admin/product/${i._id}`}>Manage</Link>,
      }))
    );
  
}, [data]);



  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Products",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
    <AdminSidebar />
    <main>{isLoading ? <Skeleton length={20} /> : Table}</main>
    <Link to="/admin/product/new" className="create-product-btn">
      <FaPlus />
    </Link>
  </div>
  );
};

export default Products;
