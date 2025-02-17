import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );

      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed z-50 w-full" >
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">

          {/* for phone */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
              <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>

              <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>

              <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                  History
                </ScrollLink>
              </li>

              <li>
                <a href="#">Places</a>
                <ul className="p-2">
                  <li>
                    <Link to="#">Rose Garden</Link>
                  </li>
                  <li>
                    <Link to="#">Sector-17</Link>
                  </li>
                  <li>
                    <Link to="#">Bird Park</Link>
                  </li>

                  <li>
                    <Link to="#">Sukhna Lake</Link>
                  </li>

                  <li>
                    <Link to="#">Lake-42</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img
                src="https://img.freepik.com/premium-vector/chandigarh-%E2%80%A6-hindi-text-chandigarh-typography_302321-2230.jpg"
                alt=""
                className="w-16 h-16"
              />
              <span>Chandigarh</span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ScrollLink to="home" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>


      
        <li>

        {userData ? (
            <button onClick={()=>navigate('/about')}>About</button>
          ) : (
            <button onClick={() => alert("You need to login to see this page")}>
              About
            </button>
          )}
            
                
             
            </li>
        



            
            <li>
              <ScrollLink to="info" smooth={true} duration={500}>
                History
              </ScrollLink>
            </li>

            <li>
              <ScrollLink to="places" smooth={true} duration={500}>
                Most-visited
              </ScrollLink>
            </li>

            <li>
              <ScrollLink to="Contact" smooth={true} duration={500}>
               ContactUs
              </ScrollLink>
            </li>
            <li>
              <details>
                <summary>Places</summary>
                <ul className="p-2 w-48 relative z-50">
                  <li>
                    <Link to="#">Rose Garden</Link>
                  </li>
                  <li>
                    <Link to="#">Shukna Lake</Link>
                  </li>

                  <li>
                    <Link to="#">Sector-17</Link>
                  </li>
                  <li>
                    <Link to="#">Bird Park</Link>
                  </li>

                  <li>
                    <Link to="#">Sukhna Lake</Link>
                  </li>

                  <li>
                    <Link to="#">Lake-42</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* button */}
        <div className="navbar-end gap-2.5">
          {/* <Link to="/register">
            <button className="btn text-black border border-orange-700 rounded-sm">Sing-up</button>
          </Link>
          <Link to="/login">
            <button className="btn   text-black border border-orange-700 rounded-sm">Login</button>
          </Link>   */}

          {userData ? (
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative cursor-pointer group mr-6">
              {userData.username[0].toUpperCase()}

              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
                  {!userData.isAccountVerified && (
                    <li
                      onClick={sendVerificationOtp}
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Verify email
                    </li>
                  )}

                  <li
                    onClick={logout}
                    className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex w-[220px] justify-evenly">
              <button
                onClick={() => navigate("/register")}
                className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-200 transition-all cursor-pointer"
              >
                Sign-up
              </button>

              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-200 transition-all cursor-pointer"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
