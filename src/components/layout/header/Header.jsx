import React from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import styles from "./Header.module.css";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.dealers}>
        <h1>DEALERS</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Collection</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/catalogs">Catalogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.icons}>
        <FaSearch />
        <FaRegHeart />
        <IoBagHandleSharp />
        <GiHamburgerMenu className={styles.hamburger} />
      </div>
    </div>
  );
};

export default Header;
