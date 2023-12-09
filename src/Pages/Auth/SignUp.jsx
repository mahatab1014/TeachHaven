import { useContext, useState } from "react";
import Logo from "/assets/TechHaven_LOGO.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import ContinueWithSocialAccount from "./ContinueWithSocialAccount";

const SignUp = () => {
  const { signUpWithEmailAndPassword, userInformation } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [confirmPass, setConfirmPass] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const name = e.target.name.value;
    const profile_pic = e.target.profile_pic.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfimation = password === confirmPass;
    if (!passwordConfimation) {
      return setErrorMessage("Password doesn't match");
    }
    if (!/^(.{6,})$/.test(password)) {
      return setErrorMessage("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one capital letter"
      );
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one special character"
      );
    }

    try {
      await signUpWithEmailAndPassword(email, password);
      await userInformation(name, profile_pic);
      Swal.fire({
        icon: "success",
        title: "Your account created successfully",
        showConfirmButton: false,
        timer: 2500,
      }).then(() => {
        // Navigate to the desired location
        if (location?.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="bg-slate-100 ">
      <div className="container flex py-10 justify-center min-h-screen px-6 mx-auto">
        <div data-aos="fade-in" className="w-full max-w-md">
          <form onSubmit={handleSignUp} className="">
            <div className="flex items-center justify-center mx-auto">
              <img className="w-2/3" src={Logo} alt="" />
            </div>

            <div className="flex items-center justify-center mt-6">
              <Link
                to="/auth/signin"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b-4"
              >
                sign in
              </Link>

              <Link
                to="/auth/signup"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-4 border-blue-500"
              >
                sign up
              </Link>
            </div>

            {errorMessage && (
              <div className="mt-8 bg-error p-2 text-black">
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3  bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="url"
                className="block w-full py-3  bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Photo URL"
                name="profile_pic"
              />
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3  bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full py-3  bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full py-3  bg-white border rounded-lg px-11 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <ContinueWithSocialAccount />
            <div className="mt-6 text-center">
              <span className="text-sm">
                Already have an account?
                <Link
                  className="hover:underline text-blue-500 ml-2"
                  to="/auth/signin"
                >
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
