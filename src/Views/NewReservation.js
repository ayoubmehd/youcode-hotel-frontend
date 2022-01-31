import AppForm from "../Components/Reservation/Form";
import { Outlet } from "react-router-dom";
import AppButton from "../Components/AppButton";

function NewReservation() {
  return (
    <>
      <AppForm />
      <div className="p-2 w-full">
        <AppButton attr={{ to: "/reservations/new/customers" }} type="link">
          Next
        </AppButton>
      </div>
    </>
  );
}

export default NewReservation;
