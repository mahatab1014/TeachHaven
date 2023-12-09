import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ViewProductsList = () => {
  const data = useLoaderData();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tech-haven-server.vercel.app/product/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-slate-200 dark:bg-slate-900 dark:bg-opacity-50">
            <tr className="dark:text-gray-200">
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr className="even:bg-base-300" key={product._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask p-1 w-12 h-12">
                        <img src={product.product_img} alt={product?.name} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold hover:underline">
                        <Link to={`/shop/${product._id}`}>{product?.name}</Link>
                      </h3>
                      <span className="text-sm opacity-50">
                        {product?.brand}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{product?.category}</td>
                <td>${product?.price}</td>
                <th className="space-x-1">
                  <Link to={`/dashboard/view-product/${product?._id}`}>
                    <button className="btn btn-sm btn-circle text-lg">
                      <AiOutlineEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm btn-circle text-lg bg-red-color text-white"
                  >
                    <AiOutlineDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ViewProductsList;
