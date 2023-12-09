import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineRollback } from "react-icons/ai";

const UpdateProductsInfo = () => {
  const currentData = useLoaderData();

  const {
    _id,
    price,
    name,
    brand,
    category,
    description,
    rating,
    product_img,
  } = currentData;
  const navigate = useNavigate();
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

    fetch(`https://tech-haven-server.vercel.app/product/${_id}`, {
      method: "PUT",
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
          title: "Product Info Update successfully",
          showConfirmButton: false,
          timer: 1500,
        });
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
    <section>
      <div className="px-5 py-10">
        <div className="max-w-3xl p-6 mx-auto  rounded-md shadow-md ">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-sm bg-red-color hover:bg-red-color text-white border-none"
          >
            <AiOutlineRollback />
            Go Back
          </button>
          <h2 className="text-2xl font-semibold  capitalize text-center">
            Update Product Info
          </h2>
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
                  defaultValue={name}
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
                  defaultValue={brand}
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
                  defaultValue={category}
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
                  defaultValue={price}
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
                  defaultValue={description}
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
                  defaultValue={rating}
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
                  defaultValue={product_img}
                  className="block w-full px-4 py-2 mt-2  border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProductsInfo;
