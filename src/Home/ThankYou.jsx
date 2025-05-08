import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  const containerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-white to-red-50"
    >
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank you for registering with Vierafin</h1>
      <p className="text-gray-600 text-lg max-w-md">
      Stay tuned! We're excited to help you on your journey to financial growth.
      </p>
    </div>
  );
}
