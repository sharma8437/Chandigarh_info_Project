import "./loginPage.css";
import image from "../assets/hill.jpg";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

//  Spinner
const Spinner = () => (
  <div className="spinner">
    <div className="loader"></div>
  </div>
);

const LoginPage = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });



  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        axios.defaults.withCredentials = true;
        const { data } = await axios.post(
          backendUrl + "/api/auth/login",
          values
        );

        if (data.success) {
          setIsLoggedin(true);
          getUserData();
          toast.success(data.message);

          navigate("/");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Authentication failed.");
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="registration-container">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-text text-4xl">Welcome to Chandigarh info Service</span>
        </div>
      </div>

      <div className="main-container">
        <div className="w-2xl rounded-none">
          <div className="max-w-6xl h-[600px] rounded-none">
            <img
              src={image}
              alt="Dashboard Preview"
              className="dashboard-image w-full h-full object-cover rounded-none"
            />
          </div>
        </div>

        <div className="right-section">
          <div className="form-container">
            <h1 className="form-heading">Welcome Back</h1>

            {/* Form with Formik */}
            <form className="form" onSubmit={formik.handleSubmit}>
              {/* Email Input */}
              <div className="input-group">
                <label className="label" htmlFor="email">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className={`input-field ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="error-text">{formik.errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label className="label" htmlFor="password">
                  Password*
                </label>
                <div className="password-input-container">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className={`input-field ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-500"
                        : ""
                    }`}
                    {...formik.getFieldProps("password")}
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="error-text">{formik.errors.password}</p>
                )}

                <p className="forgot-password-link">
                  <Link to="/reset-password" className="forgot-password-text">
                    Forgot Password?
                  </Link>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? <Spinner /> : "Login"}
              </button>

              <p className="login-link">
                Don't have an account?{" "}
                <Link to="/Register" className="login-text">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
