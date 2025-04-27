import React, { useEffect, useState } from "react";
import styles from "./Collection.module.css";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../../../../components/cards/product/ProductCard";
import { getProductsThunk } from "../../../../redux/reducers/productSlice";

const Collection = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <div className={styles.all}>
      
      {items && items.length > 0 ? (
        items.slice(0,3).map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <p>Heç bir məhsul tapılmadı.</p>
      )}
    </div>
  );
};

export default Collection;
