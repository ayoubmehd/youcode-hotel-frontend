import "../assets/css/customer.css";
import AppButton from "../Components/AppButton";
import Form from "../Components/Customer/Form";

function Customers() {
  return (
    <>
      <Form />
      <div className="px-2">
        <AppButton>Submit</AppButton>
      </div>
    </>
  );
}

export default Customers;
