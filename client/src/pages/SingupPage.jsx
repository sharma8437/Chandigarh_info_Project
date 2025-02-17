import "./loginPage.css"; // Ensure correct file path
import image from "../assets/hill.jpg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner"; // Loading spinner

const SignupPage = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const onSubmitHandler = async (values, { setSubmitting }) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(`${backendUrl}/api/auth/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      if (data.success) {
        setIsLoggedin(true);
        getUserData();
        navigate("/login");
        toast.success("Registration successful!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Authentication failed. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="registration-container">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-text">Welcome to Chandigarh info Service</span>
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
            <h1 className="form-heading">Create an Account</h1>

            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {({ isSubmitting }) => (
                <Form className="form">
                  {/* Username Input */}
                  <div className="input-group">
                    <label className="label" htmlFor="username">
                      Username*
                    </label>
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your username"
                      className="input-field"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="input-group">
                    <label className="label" htmlFor="email">
                      Email Address*
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="input-field"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="input-group">
                    <label className="label" htmlFor="password">
                      Password*
                    </label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className="input-field password-field"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                    <p className="forgot-password-link">
                      <Link to="/reset-password" className="forgot-password-text">
                        Forgot Password?
                      </Link>
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <ThreeDots color="#fff" height={25} width={25} />
                    ) : (
                      "Register"
                    )}
                  </button>

                  {/* Redirect to Login */}
                  <p className="login-link">
                    Already have an account?{" "}
                    <Link to="/login" className="login-text">
                      Login
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
