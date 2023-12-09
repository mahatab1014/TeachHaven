import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    fetch("https://tech-haven-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const shuffledProducts = shuffleProducts(products);
      setRandomProducts(shuffledProducts.slice(0, 6));
    }
  }, [products]);

  const shuffleProducts = (array) => {
    const newProduct = [...array];
    for (let i = newProduct.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newProduct[i], newProduct[j]] = [newProduct[j], newProduct[i]];
    }
    return newProduct;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {randomProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsGrid;
