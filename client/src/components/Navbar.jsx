// import { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // React Icons
// import PlaceModelList from "../models/PlaceModelList";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Places dropdown

//   return (
//     <>
//       {/* Fixed Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-600 to-blue-600 text-white shadow-md z-50">
//         <div className="flex justify-between items-center px-6 md:px-9 py-4">
//           {/* Logo */}
//           <div className="flex items-center gap-3 ">
//             <img
//               src="https://img.freepik.com/premium-vector/chandigarh-%E2%80%A6-hindi-text-chandigarh-typography_302321-2230.jpg"
//               alt="Logo"
//               className="w-10 h-10 md:w-12 md:h-12 rounded-full"
//             />
//             <h1 className="text-lg md:text-xl font-semibold">Chandigarh</h1>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? (
//                 <AiOutlineClose className="w-8 h-8" />
//               ) : (
//                 <AiOutlineMenu className="w-8 h-8" />
//               )}
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-6 text-lg font-medium">
//             <li className="hover:text-gray-300 cursor-pointer">Home</li>
//             <li className="hover:text-gray-300 cursor-pointer">About</li>
//             <li className="hover:text-gray-300 cursor-pointer">Contact</li>

//             {/* Places Dropdown */}
//             <div className="relative group">
//               <li className="hover:text-gray-300 cursor-pointer">Places</li>
//               <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-50">
//                 <PlaceModelList />
//               </div>
//             </div>
//           </ul>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex gap-4">
//             <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
//               Sign-up
//             </button>
//             <button className="bg-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden flex flex-col items-center bg-blue-700 py-4 space-y-4 transition-all duration-300 ${
//             isOpen
//               ? "max-h-screen opacity-100"
//               : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//         >
//           <a className="hover:text-gray-300 cursor-pointer" href="#">
//             Home
//           </a>
//           <a className="hover:text-gray-300 cursor-pointer" href="#">
//             About
//           </a>
//           <a className="hover:text-gray-300 cursor-pointer" href="#">
//             Contact
//           </a>

//           {/* Places Dropdown for Mobile */}
//           <button
//             className="hover:text-gray-300 cursor-pointer flex items-center gap-2"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             Places {isDropdownOpen ? "▲" : "▼"}
//           </button>

//           {isDropdownOpen && (
//             <div className="bg-white text-black w-64 p-3 rounded-lg shadow-lg">
//               <PlaceModelList />
//             </div>
//           )}

//           <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
//             Sign-up
//           </button>
//           <button className="bg-blue-500 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
//             Login
//           </button>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
