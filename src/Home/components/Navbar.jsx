import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import '../../App.css'

export default function Navbar({ toggleSidebar }) {
  const phoneRef = useRef(null);

  useEffect(() => {
    const phoneElement = phoneRef.current;

    const handleClick = () => {
      gsap.to(phoneElement, {
        x: 10,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
      window.location.href = "tel:90877 33476";
    };

    phoneElement?.addEventListener("click", handleClick);

    return () => {
      phoneElement?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Coimbatore  Branch</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>REQUEST CALLBACK</span>
            </div>
          </div>
          <div
            ref={phoneRef}
            className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium text-xs ">+91 90877 33476</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="font-medium  ">support@virafin.in</span>
          </div>
          <button className="md:hidden " onClick={toggleSidebar}>
            <Menu className="h-5 w-5     text-center inline-flex " />
            <span className="ml-2">MENU</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <div className="flex items-start space-x-4">
              {/* VIERAFIN + description wrapper */}
              <div className="relative">
                <div className="text-3xl source-serif-4 text-[#636363ee]  leading-tight "  style={{
                   
                    
                  }}>
                  <span className="ml-1 tracking-wide">VIERAFIN</span> <br />{" "}
                  <p className="text-xs dosis flex tracking-wider justify-end leading-0 ml-1"
                 >Financial Advisory Services</p>
                </div>
              </div>

              {/* Vertical Logo Element */}
              <div className="relative w-[20px] h-[40px] bg-[#FF7F26]  mt-1">
                <div className="absolute bottom-[10px] left-0 w-full h-[1px] bg-white" />
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="#">Invest in Mutual Fund</NavLink>
            <NavLink to="#">Get Insurance</NavLink>
            <NavLink to="#">Invest in Fixed Deposit</NavLink>
            <NavLink to="#">National Pension System</NavLink>
            <NavLink to="#">FINtastic Talks</NavLink>
          </nav>

          <button
            className="hidden md:flex cursor-pointer "
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-5" />
            <span className=" pl-1  ">MENU</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
    >
      {children}
    </Link>
  );
}
