const AddBrand = () => {
  const handleAddBrand = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand_name = form.brand_name.value;
    const short_description = form.short_description.value;
    const brand_logo = form.brand_image.value;

    const brandInfo = { brand_name, short_description, brand_logo };

    fetch("https://tech-haven-server.vercel.app/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brandInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <>
      <h2 className="text-3xl text-center underline">Add Brand</h2>
      <form onSubmit={handleAddBrand}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 dark:text-white">
          <div>
            <label className="" htmlFor="brand_name">
              Brand Name
            </label>
            <input
              id="brand_name"
              name="brand_name"
              type="text"
              className="block w-full px-4 py-2 mt-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
              className="block w-full px-4 py-2 mt-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div className="col-span-2">
            <label className="" htmlFor="brand_image">
              Photo URL (for better results use .png image)
            </label>
            <input
              id="brand_image"
              name="brand_image"
              type="url"
              placeholder="https://"
              className="block w-full px-4 py-2 mt-2 border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Add Brand
          </button>
        </div>
      </form>
    </>
  );
};

export default AddBrand;
