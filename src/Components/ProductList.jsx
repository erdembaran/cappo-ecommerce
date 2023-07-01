import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { getProducts } from "./Api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("men");

  useEffect(() => {
    fetchProductData();
    handleCategoryClick("electronics");
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <div className="container productHeader d-flex justify-content-center mb-5">
        <p className="h3 fw-bold text-center">DAILY DEALS!</p>
      </div>
      <div className="container categoryContainer text-center d-flex justify-content-between">
        <p
          onClick={() => handleCategoryClick("men's clothing")}
          className={category === "men's clothing" ? "selected" : ""}
        >
          Men
        </p>
        <p
          onClick={() => handleCategoryClick("women's clothing")}
          className={category === "women's clothing" ? "selected" : ""}
        >
          Women
        </p>
        <p
          onClick={() => handleCategoryClick("electronics")}
          className={category === "electronics" ? "selected" : ""}
        >
          Electronics
        </p>
      </div>

      <div className="container productContainer my-4">
        <div className="row">
          {filteredProducts &&
            filteredProducts.map((product, index) => {
              return (
                <div key={index} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                  <ProductItem product={product} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
