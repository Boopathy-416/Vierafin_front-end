import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PhoneInput from "./PhoneInput";
import Button from "./ui/Button";
import React, { useState } from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { registerUser } from "../api/register";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false); 
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true); 
      await registerUser(data);

      toast.success(
        "Thanks for registering! We’ll get in touch with you if selected to work. We will shortly call back.",
        { duration: 10000 }
      );

      setTimeout(() => {
        navigate("/thank-you");
      }, 10000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const products = [
    "Mutual Fund Investment",
    "Life Insurance",
    "Health Insurance",
    "StockMarket Advisory",
  ];

  return (
    <div className=" " style={{
        fontFamily:"Roboto Flex"
      }}>
      <h2 className="md:text-2xl text-xl font-medium tracking-wide text-center text-gray-800 mb-6">
        <b className=" md:text-3xl text-2xl font-light">B</b>egin Your Financial Growth with <b className=" md:text-4xl text-3xl font-black source-serif-4 bg-gray-50 text-gray-500">V</b>
         <b className=" text-gray-500  font-semibold uppercase source-serif-4 -ml-1">ierafin</b>   
           {/* <span className="relative ml-2  inline-block w-[10px] h-[22px] md:w-[20px] md:h-[40px] bg-[#FF7F26]  mt-1">
                <div className="absolute bottom-[4px] left-0 w-full h-[1px] bg-white" />
              </span> */}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-1">Select a Product</label>
          <Select options={products} {...register("product")} />
          {errors.product && (
            <p className="text-red-500 text-sm ">{errors.product.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1">Full Name</label>
          <Input
            placeholder="Your full name"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 ">Email</label>
          <Input
            placeholder="Your email address"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 ">Mobile Number</label>
          <PhoneInput
            value={watch("phone")}
            onChange={(val) => setValue("phone", val)}
          />
          {!watch("phone") && (
            <p className="text-red-500 text-sm">Phone is required</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#0a1a3a] text-white font-medium tracking-wide shadow-[#0a1a3a91] shadow-sm hover:bg-[#202335] cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"} 
        </Button>

        <p className="text-xs text-center text-gray-600">
          By continuing, you agree to our Vierafin policy.
        </p>
      </form>
    </div>
  );
}
