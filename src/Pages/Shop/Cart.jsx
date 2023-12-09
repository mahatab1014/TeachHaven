import { useContext } from "react";

import { CartContext } from "../../Provider/CartProvider";
import Swal from "sweetalert2";
const Cart = () => {
  const { cart, cartTotalPrice, purchaseCartItems } = useContext(CartContext);

  const handleCart = () => {
    Swal.fire({
      title: "Confirm Your Order",
      text: "You won't be able to revert this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, placed order",
    }).then((result) => {
      if (result.isConfirmed) {
        purchaseCartItems();
        Swal.fire("Confirm", "Your Order has been placed", "success");
      }
    });
  };

  return (
    <section>
      <div className="container mx-auto py-10 px-5">
        <div className="md:max-w-2xl mx-auto">
          {cart.length > 0 ? (
            <div>
              <div className="section-titles text-center">
                <h2 className="text-3xl md:text-4xl uppercase">
                  Your Cart Items : {cart.length}
                </h2>
              </div>

              <div className="overflow-x-auto pt-10 rounded-2xl">
                <table className="table">
                  <thead>
                    <tr className="bg-base-200">
                      <th></th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>${product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="divider my-0"></div>

              <div className="text-center py-5 space-y-4">
                <h4 className=" font-medium">Total Price: ${cartTotalPrice}</h4>
                <button
                  onClick={handleCart}
                  className="capitalize btn border-none bg-red-color hover:bg-red-color text-white"
                >
                  process to pay
                </button>
              </div>
            </div>
          ) : (
            <div className="section-titles text-center">
              <h2 className="text-3xl md:text-4xl capitalize">Cart is empty</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
