import React, { useEffect, useState } from "react";
//Icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
//Context
import { useProducts } from "../contexts/produtsContext";
//Style
import styles from "./ProductsPage.module.css";
//Components
import Card from "../components/Card";
import Loader from "../components/Loader";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const searchHadler = () => {
    console.log(search);
  };
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    console.log(category);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHadler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
