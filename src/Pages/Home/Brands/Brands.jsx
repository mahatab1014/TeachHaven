import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brand, setBrand] = useState();

  useEffect(() => {
    fetch("https://tech-haven-server.vercel.app/brands")
      .then((response) => response.json())
      .then((data) => setBrand(data));
  }, []);

  return (
    <section>
      <div className="container mx-auto px-5 py-10">
        <div className="sections-title text-center py-10 md:max-w-3xl m-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Our <span className="text-red-color">Top</span> Brand
          </h2>
          <p className="text-xl font-medium text-gray-500">
            Explore our carefully selected top brands for the finest in
            electronics. From smartphones to laptops and more, experience
            excellence with trusted industry leaders.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {brand?.map((brandInfo) => (
            <Link
              key={brandInfo._id}
              to={`/shop?brand_name=${brandInfo.brand_name}`}
            >
              <div className="card p-3 cursor-pointer bg-stone-100 dark:bg-gray-900 dark:bg-opacity-50 transition-transform scale-95 hover:scale-100 active:scale-95">
                <figure>
                  <img className="h-32" src={brandInfo.brand_logo} alt="" />
                </figure>
                <div className="card-body items-center">
                  <h3 className="card-title">{brandInfo.brand_name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
