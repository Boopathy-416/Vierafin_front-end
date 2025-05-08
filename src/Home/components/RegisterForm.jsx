import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PhoneInput from "./PhoneInput";
import Button from "./ui/Button";
import React,{useState} from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { registerUser } from "../api/register";
import { useNavigate } from "react-router-dom";


export default function RegisterForm() {
  const [loading, setLoading] = useState(false); // 👈 loading state
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
      setLoading(true); // 👈 Start loading
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
      setLoading(false); // 👈 End loading
    }
  };


  const products = [
    "Mutual Fund Investment",
    "Life Insurance",
    "Health Insurance",
    "Fixed Deposit",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Start your Wealth Creation Journey with Vierafin
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
          <label className="block mb-1">Email</label>
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
          <label className="block mb-1">Mobile Number</label>
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
        className="w-full bg-red-600 hover:bg-red-700 cursor-pointer"
        disabled={loading} // 👈 disable button while loading
      >
        {loading ? "Submitting..." : "Submit"} {/* 👈 Loading indicator */}
      </Button>

        <p className="text-xs text-center text-gray-600">
          By continuing, you agree to our Vierafin Company policy.
        </p>
      </form>
    </div>
  );
}
