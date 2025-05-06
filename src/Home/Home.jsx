import React, { useState } from "react";
import { toast } from "sonner";
import RegisterForm from "./components/RegisterForm";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import WebinarPromo from "./components/WebinarPromo";
import { Toaster } from "./components/Toaster";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleFormSubmit = () => {
    toast.success("Successfully registered!", {
      description: "We will get in touch with you soon.",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <WebinarPromo />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <RegisterForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </main>

      <Toaster />
    </div>
  )
}
