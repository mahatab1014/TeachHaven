import { Outlet } from "react-router-dom";
import DashboardNav from "../../Components/Navbar/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto px-5 py-10">
          <div className="flex flex-col md:flex-row gap-5 md:gap-20">
            <div className="md:w-1/6">
              <DashboardNav />
            </div>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
