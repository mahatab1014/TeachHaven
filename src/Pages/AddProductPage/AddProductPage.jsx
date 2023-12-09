import AddProduct from "../../Components/AddProduct/AddProduct";

const AddProductPage = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-10">
        <div className="max-w-4xl p-6 mx-auto  rounded-md shadow-md ">
          <h2 className="text-2xl font-semibold dark:text-white capitalize text-center">
            Add Products
          </h2>
          <AddProduct />
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;
