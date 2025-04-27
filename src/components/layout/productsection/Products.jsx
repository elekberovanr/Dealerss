import React, { useEffect, useState } from "react";
import ProductCard from "../../cards/product/ProductCard";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import {getProductThunk } from "../../../redux/reducers/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
    console.log(items);
    
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Yuklemede problem oldu</p>;

  return (
    <div className={styles.all}>
      {items && items.length > 0 ? (
        items.slice(0,6).map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <p>Heç bir məhsul tapılmadı.</p>
      )}
    </div>
  );
};

export default Products;
