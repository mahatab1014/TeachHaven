import { useLoaderData, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineRollback } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../Provider/CartProvider";
import Swal from "sweetalert2";

const ProductPage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { _id, product_img, name, description, price, brand, rating } = data;

  const { addItemToCart } = useContext(CartContext);

  const productAddToCart = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your product added to your cart",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      addItemToCart(_id);
    });
  };

  return (
    <section className="bg-red-color dark:bg-gray-800">
      <div className="container mx-auto py-10 px-5">
        <div className="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white dark:bg-gray-900 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-sm bg-red-color hover:bg-red-color text-white border-none"
            >
              <AiOutlineRollback />
              Go Back
            </button>
            <div className="md:flex items-center -mx-10 pt-10 dark:text-white">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="">
                  <img
                    src={product_img}
                    className="w-full relative z-10 drop-shadow-2xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl ">{name}</h1>
                  <strong>{brand}</strong>
                  {rating && (
                    <p className="text-yellow-500 text-2xl">
                      {Array.from({ length: Number(rating) }, (_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </p>
                  )}
                  <p className="text-sm pt-5">{description}</p>
                </div>
                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {price}
                    </span>
                  </div>
                  <div className="inline-block align-bottom">
                    <button
                      onClick={productAddToCart}
                      className="btn bg-red-color hover:bg-red-color border-none text-white normal-case"
                    >
                      <AiOutlineShoppingCart className="text-xl" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
