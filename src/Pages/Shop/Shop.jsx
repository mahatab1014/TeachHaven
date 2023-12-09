import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductsGrid/ProductCard";
import { AiOutlineSearch } from "react-icons/ai";
import queryString from "query-string";
import Slider from "../../Components/Slider/Slider";

const Shop = () => {
  const data = useLoaderData();
  const [brandData, setBrandData] = useState();
  const [filterData, setFilterData] = useState();

  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const brandName = queryParams.brand_name;
  useEffect(() => {
    fetch("https://tech-haven-server.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => setBrandData(data));
  }, []);

  const handleFilterProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brand_name.value;
    const filter = { brandName };

    fetch("https://tech-haven-server.vercel.app/products/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filter), // Send your filter criteria here
    })
      .then((response) => response.json())
      .then((data) => setFilterData(data));
  };

  const filterProductsByBrand = (brandName) => {
    const filtered = data.filter((product) => product.brand === brandName);
    setFilterData(filtered);
  };

  useEffect(() => {
    if (brandName) {
      filterProductsByBrand(brandName);
    } else {
      setFilterData(data);
    }
  }, [brandName, data]);
  const navigate = useNavigate();

  return (
    <>
      <Slider />
      <section>
        <div className="container mx-auto py-10 px-5">
          <div className="sections-title text-center pt-10 md:max-w-3xl m-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Our <span className="text-red-color">Latest</span> Devices
            </h2>
            <p className="text-xl font-medium text-gray-500">
              Discover the newest arrivals in the world of electronics. Our
              Latest Devices section features cutting-edge products that embrace
              the latest technology trends. Stay ahead of the curve and explore
              innovative smartphones, laptops, and more. It's where technology
              and style meet the future. Don't miss out on what's next.
            </p>
          </div>

          <div className="bg-base-200 shadow-xl py-3 my-10 rounded-xl flex justify-center">
            <form
              onSubmit={handleFilterProduct}
              className="flex flex-col md:flex-row md:items-center gap-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label htmlFor="product_name" className="lg:text-lg font-medium">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Phone..."
                  className="block px-4 py-2 text-gray-700 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  name="product_name"
                  id="product_name"
                  disabled
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label htmlFor="brand_name" className="lg:text-lg font-medium">
                  Brand :
                </label>
                <select
                  className="block px-4 py-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  name="brand_name"
                  id="brand_name"
                  required
                >
                  {brandData?.map((brandName) => (
                    <option key={brandName._id} value={brandName.brand_name}>
                      {brandName.brand_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="btn bg-red-color hover:bg-red-color border-none text-white"
                >
                  <AiOutlineSearch className="text-xl" />
                  Search
                </button>
                <button
                  onClick={() => {
                    setFilterData("");
                    navigate("/shop"); // Navigate back to the shop page
                  }}
                  type="reset"
                  className="btn bg-red-color hover:bg-red-color border-none text-white"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          {filterData?.length === 0 && (
            <h3 className="text-3xl font-medium text-center py-10">
              No Data Found
            </h3>
          )}
          {filterData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filterData?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {data?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;
