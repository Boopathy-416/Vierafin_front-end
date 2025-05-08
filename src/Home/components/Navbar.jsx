import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Menu, MapPin, Phone } from "lucide-react"
import gsap from "gsap"


export default function Navbar({ toggleSidebar }) {
  const phoneRef = useRef(null)

  useEffect(() => {
    const phoneElement = phoneRef.current

    const handleClick = () => {
      gsap.to(phoneElement, {
        x: 10,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
      })
      window.location.href = "tel:1800-313-123123"
    }

    phoneElement?.addEventListener("click", handleClick)

    return () => {
      phoneElement?.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Tirupur BRANCH</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>REQUEST CALLBACK</span>
            </div>
          </div>
          <div ref={phoneRef} className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-medium text-xs ">1800-313-123123</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="font-medium  ">7678123123</span>
          </div>
          <button  className="md:hidden " onClick={toggleSidebar}>
            <Menu className="h-5 w-5     text-center inline-flex " />
            <span className="ml-2">MENU</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            {/* <div className="text-2xl font-bold text-[#3a2a5e]">
              VIERAFIN 
              <span className="bg-red-600 w-4 h-8 inline-block ml-1"></span>
            </div>
            <div className="text-xs ml-1 text-gray-600">
              <div>insurance &</div>
              <div>investments</div>
            </div> */}
            <img className="w-40 h-12" src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746687518/Logo_eiwqip.png" alt="VIERAFIN insurance & investments  " />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="#">Invest in Mutual Fund</NavLink>
            <NavLink to="#">Get Insurance</NavLink>
            <NavLink to="#">Invest in Fixed Deposit</NavLink>
            <NavLink to="#">National Pension System</NavLink>
            <NavLink to="#">FINtastic Talks</NavLink>
          </nav>

          <button  className="hidden md:flex cursor-pointer " onClick={toggleSidebar}>
            <Menu className="h-6 w-5" />
            <span className=" pl-1  ">MENU</span>
          </button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
      {children}
    </Link>
  )
}
