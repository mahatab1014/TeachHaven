import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { product_img, name, price, _id } = product;
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto [&>div]:hover:-translate-y-2">
      <figure
        className="w-full h-80 bg-center bg-contain bg-no-repeat rounded-lg shadow-2xl "
        style={{
          backgroundImage: `url(${product_img})`,
        }}
      ></figure>

      <div className="transition-transform w-56 -mt-10 overflow-hidden bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg md:w-64">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase bg-slate-100 dark:bg-gray-800 dark:text-white">
          {name}
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-state-200">
          <span className="font-bold">${price}</span>
          <Link to={`/shop/${_id}`}>
            <button className="btn btn-sm bg-red-color hover:bg-red-color border-none text-white normal-case">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes={
    product: PropTypes.object.isRequired,
}
export default ProductCard;
