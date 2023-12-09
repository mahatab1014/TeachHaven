import { RevolvingDot } from "react-loader-spinner";
const Spinner = () => {
  return (
    <section>
      <div className="container mx-auto py-10 px-5">
        <div className="flex justify-center">
          <RevolvingDot
            radius="45"
            strokeWidth="5"
            color="red"
            secondaryColor="green"
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Spinner;
