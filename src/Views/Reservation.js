import { useContext, useReducer } from "react";
import { Outlet } from "react-router-dom";
import ReservationContext, { reducer, init } from "../reducers/reservation";
import create from "../APIs/orders/create";

function Reservation() {
  const [form, dispatch] = useReducer(reducer, init);
  // const reseration = useContext(form);

  function submit(e) {
    e.preventDefault();
    create(form).then(([err, res]) => {
      if (err) {
        console.log(err);
      }

      dispatch({
        type: "reset",
      });

      console.log(res);
    });
  }

  return (
    <section className="w-full text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">
            New Reservation
          </h1>
        </div>
        <form onSubmit={(e) => submit(e)}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div id="parent" className="flex flex-wrap -m-2">
              <ReservationContext.Provider value={[form, dispatch]}>
                <Outlet />
              </ReservationContext.Provider>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
