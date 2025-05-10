import React, { useEffect, useRef } from "react";
import { X, ChevronRight, Phone, MapPin } from "lucide-react";
import gsap from "gsap";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const overlay = overlayRef.current;

    if (sidebar && overlay) {
      if (isOpen) {
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
          display: "block",
        });

        gsap.fromTo(
          sidebar,
          { x: "100%" },
          {
            x: "0%",
            duration: 0.5,
            ease: "power3.out",
            display: "flex",
          }
        );
      } else {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
          },
        });

        gsap.to(sidebar, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(sidebar, { display: "none" });
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 z-50 hidden"
        onClick={toggleSidebar}
      />

      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-xl flex-col hidden overflow-auto"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-start space-x-4">
            {/* VIERAFIN + description wrapper */}
            <div className="relative">
              <div
                className="text-3xl source-serif-4 text-[#636363]  leading-tight "
                style={{}}
              >
                <span className="ml-1 tracking-wide">VIERAFIN</span> <br />{" "}
                <p className="text-xs dosis flex tracking-wider justify-end leading-0 ml-1">
                  Financial Advisory Services
                </p>
              </div>
            </div>

            {/* Vertical Logo Element */}
            <div className="relative w-[20px] h-[40px] bg-[#FF7F26]  mt-1">
              <div className="absolute bottom-[10px] left-0 w-full h-[1px] bg-white" />
            </div>
          </div>

          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <Phone className="h-7 text-gray-600 rounded-full p-1  w-8" />
            <span className="font-medium text-gray-600 tracking-wider">+91 90877 33476</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-7 text-gray-600 rounded-full p-1  w-8" />
            <span className="font-medium  text-gray-600  tracking-wider">
              Coimbatore Branch
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <SidebarLink to="#">Invest in Mutual Fund</SidebarLink>
            <SidebarLink to="#">Get Insurance</SidebarLink>
            <SidebarLink to="#">Invest in Fixed Deposit</SidebarLink>
            <SidebarLink to="#">National Pension System</SidebarLink>
            <SidebarLink to="#">FINtastic Talks</SidebarLink>
            <SidebarLink to="#">About Us</SidebarLink>
            <SidebarLink to="#">Contact Us</SidebarLink>
          </ul>
        </nav>
          <p className="text-xs text-center py-4 opacity-90">
            © {year} VIERAFIN. All rights reserved.
          </p>
      </div>
    </>
  );
}

function SidebarLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center justify-between py-2 text-gray-700 hover:text-red-600 transition-colors"
      >
        <span>{children}</span>
        <ChevronRight className="h-4 w-4" />
      </Link>
    </li>
  );
}
