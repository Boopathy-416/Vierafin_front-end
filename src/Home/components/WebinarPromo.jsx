// export default function WebinarPromo() {
//   return (
//     <div className="lg:pr-8">
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
//         <div className="md:col-span-3">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Exclusive Webinar</h1>
//           <p className="text-gray-600 mb-6">
//             Learn how to maintain Physical, Mental & Financial well-being to make Retirement the best phase of life.
//           </p>
//           <a href="#" className="inline-flex items-center text-red-600 font-medium hover:underline">
//             Register Now &rarr;
//           </a>
//         </div>
//         <div className="md:col-span-2 shadow-red-600 rounded-lg shadow-sm">
//           <div className="bg-red-600  text-white p-6 rounded-lg">
//             <h2 className="text-2xl font-bold mb-2">Financial Freedom</h2>
//             <h3 className="text-xl font-bold mb-4">Post Retirement</h3>
//             <p className="text-sm">Continue being Awesome during your Golden Years</p>
//           </div>
//         </div>
//       </div>

//       {/* Responsive image added below the grid */}
//       <div className="mt-6 flex lg:justify-end md:justify-center ">
//         <img
//           src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746687199/Admin_pic_y1spiy.jpg"
//           alt="Webinar Visual"
//           className="w-90 h-90 shadow-gray-600 shadow-sm object-cover rounded-xs"
//         />
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const locations = [
  "Bangalore",
  "Coimbatore",
  "Tirupur",
  "Salem",
  "Erode",
];
export default function WebinarPromo () {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const year = new Date().getFullYear();


  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set([headingRef.current, subheadingRef.current, ctaRef.current], {
      opacity: 0,
      y: 20,
    });

    gsap.set(badgeRef.current, {
      opacity: 0,
      scale: 0.8,
      rotation: -5,
    });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
    })
      .to(subheadingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.4")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.4")
      .to(badgeRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
      }, "-=0.6");

    return () => tl.kill();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full min-h-[500px] md:min-h-[600px] border-t-0  shadow-lg shadow-blue-950 bg-[#0a1a3a] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746687199/Admin_l9hs8z.png"
          alt="Financial graph background"
          className="w-50 h-full  object-cover"
        />
      </div>

      {/* Services badge */}
      <div
        ref={badgeRef}
        className="absolute top-2 right-4 md:top-0 rounded-t-none md:right-6 bg-[#ff9800] text-white   p-2 border-2 border-t-0 rounded-lg z-10"
      >
        <div className="text-xs font-bold text-center">FINANCIAL SERVICES</div>
        <div className="text-xs text-center">TAILORED FOR YOU</div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12 md:py-0">
        {/* Text content */}
        <div style={{
        fontFamily:"Roboto Flex"
      }} className="w-full md:w-1/2 text-white space-y-6 md:space-y-8 text-center md:text-left">
          <h1 ref={headingRef} className="tracking-normal text-xl py-5 md:text-3xl md:py-16 font-bold leading-tight">
            Build a <span className="italic text-[#4a90e2]">Secure Future</span> <br />
            with Expert Financial Guidance
          </h1>

          <p  ref={subheadingRef} className="text-sm tracking-wide md:text-base font-semibold">
            Trusted advisors helping individuals and businesses create smart, personalized financial plans to achieve long-term success.
          </p>

          <div ref={ctaRef}>
            <button className="bg-[#ff9800]  hover:bg-[#f57c00] text-white rounded-md px-6 py-2 font-semibold">
              Schedule a Free Consultation
            </button>
            <p className="text-xs mt-2 opacity-80">Over 1k + Clients Guided Successfully</p>
          </div>
        </div>

        {/* Image content */}
        <div className="w-full md:w-1/2  mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[350px] md:w-[250px] md:h-[250px]">
            <img
              src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1746687199/Admin_pic_y1spiy.jpg"
              alt="Professional financial advisor"
              className="md:w-50 w-full h-90 object-cover"
            />
          </div>
        </div>
      </div>
         <footer className="bg-[#0a1a3a] text-gray-600 md:py-10 py-4 text-center px-4">
      {/* Locations */}
      <div className="flex flex-wrap justify-center md:gap-6 gap-2 mb-4 text-sm">
        {locations.map((loc, i) => (
          <span className=" tracking-wide   " key={i}>{loc}</span>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs opacity-70">
        © {year} VIERAFIN. All rights reserved.
      </p>
    </footer>
    </div>
  );
}
