import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./AdminPanel.module.css";
import {
  deleteProductThunk,
  getProductsThunk,
  postProductThunk,
  updateProductThunk,
} from "../../redux/reducers/productSlice";
import { useFormik } from "formik";
import AdminCard from "../cards/admin/AdminCard";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const [editItemId, setEditItemId] = useState();
  

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: (data) => {
      if (editItemId) {
        dispatch(updateProductThunk({ id: editItemId, updatedData: data }));
        setEditItemId();
      } else {
        dispatch(postProductThunk(data));
      }
      formik.resetForm(); 
    },
  });

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const handleDelete = (productId) => {
    dispatch(deleteProductThunk(productId));
  };

  const handleEdit = (item) => {
    setEditItemId(item.id);
    formik.setValues({
      name: item.name,
      description: item.description,
    });
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
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Açıqlama"
          />
        </div>
        <button type="submit" className={styles.button}>Əlavə Et</button>
      </form>

      <div className={styles.all}>
        {items && items.map((item) => (
          <AdminCard
            key={item.id}
            item={item}
            onDelete={() => handleDelete(item.id)}
            onEdit={() => handleEdit(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
