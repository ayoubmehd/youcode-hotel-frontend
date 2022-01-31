import AppButton from "../AppButton";
import plus from "../../assets/icons/plus.svg";
import close from "../../assets/icons/close.svg";
import { useContext, useReducer, useRef } from "react";
import ReservationContext, { init, reducer } from "../../reducers/reservation";
import { Input } from "../AppForm";
import { useEffect } from "react/cjs/react.development";

function Form() {
  const [{ customer }, dispatch] = useContext(ReservationContext);

  const newChild = useRef(null);

  function setProp(e) {
    dispatch({
      type: "setCustomerProp",
      name: e.target.name,
      value: e.target.value,
    });
  }

  function addChild() {
    dispatch({
      type: "setCustomerProp",
      name: "childs",
      value: [...customer.childs, { age: +newChild.current.value }],
    });
  }
  function removeChild(index) {
    customer.childs.splice(index, 1);

    dispatch({
      type: "setCustomerProp",
      name: "childs",
      value: [...customer.childs],
    });
  }

  return (
    <>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>

          <Input
            value={customer.email}
            onChange={(e) => setProp(e)}
            type="email"
            id="email"
            name="email"
          />
        </div>
      </div>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label
            htmlFor="firstName"
            className="leading-7 text-sm text-gray-600"
          >
            First Name
          </label>
          <Input
            value={customer.firstName}
            onChange={(e) => setProp(e)}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
            Last Name
          </label>
          <Input
            value={customer.lastName}
            onChange={(e) => setProp(e)}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="Childs" className="leading-7 text-sm text-gray-600">
            Child Age
          </label>
          <div className="flex">
            <div className="pr-2 w-full">
              <Input
                ref={newChild}
                type="number"
                placeholder="Age..."
                id="age"
                name="age"
              />
            </div>
            <AppButton attr={{ type: "button", onClick: (e) => addChild() }}>
              <img src={plus} alt="Add new Child" />
            </AppButton>
          </div>
        </div>
        <div className="relative my-2">
          <label htmlFor="Childs" className="leading-7 text-sm text-gray-600">
            Childs:
          </label>
          {customer.childs.map((item, i) => (
            <span
              className="inline-block mx-1 py-1 bg-gray-200 rounded"
              key={(Math.random() * item.age).toString()}
            >
              <span className="ml-2 mr-1">Age: {item.age}</span>
              <button
                type="button"
                onClick={() => removeChild(i)}
                className="ml-1 mr-2 bg-gray-500 text-white rounded-full p-1 w-6 h-6 leading-3"
              >
                <img className="w-full" src={close} alt="" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Form;
