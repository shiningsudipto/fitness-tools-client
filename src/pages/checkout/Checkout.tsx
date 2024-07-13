import InitialForm from "@/components/formik/InitialForm";
import Input from "@/components/formik/Input";
import RadioButtons from "@/components/formik/RadioButtons";
import { useCreateCustomerMutation } from "@/redux/features/customer";
import { useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  paymentMethod: "",
};

const paymentOptions = [
  {
    label: "Cash on delivery",
    value: "cash",
  },
  {
    label: "Stripe",
    value: "stripe",
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [customerData] = useCreateCustomerMutation();
  // console.log("res-create-customer:", data, error);

  const cart = useAppSelector((state) => state.cart);

  const handleSubmit = async (values: FormValues) => {
    // console.log(values);
    const productOrderState = toast.loading("Order placing");
    try {
      await customerData({
        name: values?.name,
        email: values?.email,
        phone: values?.phone,
        address: values?.address,
        cartItems: cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      });
      toast.dismiss(productOrderState);
      toast.success("Order placed successfully");
    } catch (error) {
      console.log("error:", error);
      toast.error("Failed to placed order");
    }
    navigate("/success");
  };
  return (
    <div className="section-gap">
      <p className="heading mb-6">Please fill up your details for order!</p>
      <InitialForm initialValues={initialValues} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <Input name="name" label="Name" required />
          <Input name="email" label="Email" required />
          <Input name="phone" label="Phone" required />
          <Input name="address" label="Address" required />
        </div>
        <RadioButtons
          options={paymentOptions}
          name="paymentMethod"
          type="radio"
          label="Choice payment method"
        />
        <button type="submit" className="primary-btn w-1/2">
          Place Order
        </button>
      </InitialForm>
    </div>
  );
};

export default Checkout;
