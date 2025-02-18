// import { useState } from "react";
// import { Button } from "./components/ui/button";
// import { Menu, X } from "lucide-react";
// import logo from "../public/AstrowallasLogo-removebg-preview.png";

// export default function Navbar({ openPopup }: { openPopup: () => void }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-[#062031] shadow-lg font-poppins">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               {/* Replace with your actual logo */}
//               <div className=" w-[120px] p-2 rounded">
//                 <img src={logo} alt="logo" />
//               </div>
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             <Button
//               onClick={openPopup}
//               className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold px-4 py-2 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               Register Now
//             </Button>
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#FF6B2C] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="sm:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Button
//               onClick={() => {
//                 openPopup();
//                 setIsMenuOpen(false);
//               }}
//               className="w-full bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               Register Now
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../public/AstrowallasLogo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function Navbar({ openPopup }: { openPopup: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#062031] shadow-lg font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Replace with your actual logo */}
              <div className="w-[120px] p-2 rounded">
                <img src={logo} alt="logo" />
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Button
              onClick={openPopup}
              className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold px-4 py-2 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Register Now
            </Button>
            <Button
              onClick={() => navigate("/admin")}
              className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold px-4 py-2 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#FF6B2C] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button
              onClick={() => {
                openPopup();
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Register Now
            </Button>
            <Button
              onClick={() => {
                navigate("/admin");
                setIsMenuOpen(false);
              }}
              className="w-full bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
