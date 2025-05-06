import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "./PhoneInput";
import Button  from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";

const schema = yup.object().shape({
  product: yup.string().required("Please select a product"),
  fullName: yup.string().min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Enter a valid email").required(),
  phone: yup.string().min(10, "Phone must be 10 digits").required(),
});

export default function RegisterForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      product: "",
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const products = [
    "Mutual Fund Investment",
    "Life Insurance",
    "Health Insurance",
    "Fixed Deposit",
  ];

  const submitHandler = (data) => {
    console.log(data);
    onSubmit(); // trigger success toast
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Start your Wealth Creation Journey with Vierafin
      </h2>

      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
        <div>
          <label className="block mb-1">Select a Product</label>
          <Select  options={products} {...register("product")} />
          {errors.product && (
            <p className="text-red-500 text-sm ">{errors.product.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Full Name</label>
          <Input placeholder="Your full name" {...register("fullName")} />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <Input
            placeholder="Your email address"
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Mobile Number</label>
          <PhoneInput {...register("phone")} />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
          Submit
        </Button>
        <p className="text-xs text-center text-gray-600">By Continue you provide consent and agree to our Vierafin Company</p>
      </form>
    </div>
  );
}
