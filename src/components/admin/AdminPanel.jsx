import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./AdminPanel.module.css";
import ProductCard from "../cards/ProductCard";
import {
  deleteProduct,
  getProductsThunk,
  postProductThunk,
} from "../../redux/reducers/productSlice";
import { useFormik } from "formik";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  console.log(items);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (data) => {
      console.log(data);
      dispatch(postProductThunk(data));
    },
  });

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  if (loading) return <span>Yüklənir...</span>;
  if (error) return <span>Xəta: {error}</span>;

  return (
    <div className={styles.container}>
      <h2>Admin Panel</h2>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.group}>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Məhsul Adı"
          />
        </div>
        <div className={styles.group}>
          <input
            type="number"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Qiymət"
          />
        </div>
        <button type="submit">Əlavə Et</button>
      </form>

      <div>
        {items && items.length > 0 ? (
          items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        ) : (
          <p>Heç bir məhsul tapılmadı.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
