import React, { useEffect, useRef } from "react";
import { X, ChevronRight, Phone, MapPin } from "lucide-react";
import gsap from "gsap";
import Button from "./ui/Button";
import { Link } from "react-router-dom";




export default function Sidebar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

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
      <div ref={overlayRef} className="fixed inset-0 bg-black/50 z-50 hidden" onClick={toggleSidebar} />

      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-xl flex-col hidden overflow-auto"
      >
        <div className="flex items-center justify-between p-4 border-b">
        <img className="w-40 h-12" src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746687518/Logo_eiwqip.png" alt="VIERAFIN insurance & investments  " />
          <Button  variant="ghost" size="icon" onClick={toggleSidebar}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-3 text-sm">
            <Phone className="h-6 text-green-900 rounded-full bg-gray-200 border-2 p-1 w-6" />
            <span className="font-medium">1800-313-123123</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-6 text-red-900 rounded-full bg-gray-200 border-2 p-1 w-6" />
            <span>TIRUPUR BRANCH</span>
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

