import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const brandName = form.brand_name.value;
    const category = form.category_name.value;
    const description = form.short_description.value;
    const price = form.product_price.value;
    const rating = form.product_rating.value;
    const productImage = form.product_image.value;

    const product = {
      price: price,
      name: productName,
      brand: brandName,
      category: category,
      description: description,
      rating: rating,
      product_img: productImage,
    };

    fetch("https://tech-haven-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    fetch("https://tech-haven-server.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => setBrandData(data));
  }, []);

  return (
    <form onSubmit={handleAddProduct}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="" htmlFor="product_name">
            Name
          </label>
          <input
            id="product_name"
            name="product_name"
            type="text"
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className="" htmlFor="brand_name">
            Brand Name
          </label>
          <select
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            name="brand_name"
            id="brand_name"
            required
          >
            {brandData.map((brand) => (
              <option value={brand.brand_name} key={brand._id}>
                {brand.brand_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="" htmlFor="category_name">
            Category
          </label>
          <select
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            name="category_name"
            id="category_name"
            required
          >
            <option value="Laptop">Laptop</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
        <div>
          <label className="" htmlFor="product_price">
            Price
          </label>
          <input
            id="product_price"
            name="product_price"
            type="number"
            min={0}
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div>
          <label className="" htmlFor="short_description">
            Short Description
          </label>
          <textarea
            name="short_description"
            id="short_description"
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            required
          ></textarea>
        </div>
        <div>
          <label className="" htmlFor="product_rating">
            Product Rating
          </label>
          <input
            id="product_rating"
            name="product_rating"
            type="number"
            max={5}
            min={0}
            defaultValue={0}
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="" htmlFor="product_image">
            Photo URL
          </label>
          <input
            id="product_image"
            name="product_image"
            type="url"
            placeholder="https://"
            className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            required
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
