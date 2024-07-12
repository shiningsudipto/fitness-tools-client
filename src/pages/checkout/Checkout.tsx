import InitialForm from "@/components/formik/InitialForm";
import Input from "@/components/formik/Input";
import RadioButtons from "@/components/formik/RadioButtons";
import { useNavigate } from "react-router-dom";

const initialValues = {};
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
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/success");
  };
  return (
    <div className="section-gap">
      <p className="heading mb-6">Please fill up your details for order!</p>
      <InitialForm initialValues={initialValues} onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <Input name="name" label="Name" />
          <Input name="email" label="Email" />
          <Input name="phone" label="Phone" />
          <Input name="address" label="Address" />
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
