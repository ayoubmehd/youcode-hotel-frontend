import { Input, Select } from "../AppForm";
import { useContext, useEffect, useReducer, useState } from "react";
import ReservationContext, { init, reducer } from "../../reducers/reservation";
import getAllGoods from "../../APIs/goods/getAll";

function Form() {
  const [form, dispatch] = useContext(ReservationContext);

  const [allGoods, setAllGoods] = useState([]);

  const [nextPage, setNextPage] = useState({});

  function setStartDate(val) {
    dispatch({
      type: "setStartDate",
      payload: val,
    });
  }

  function setEndDate(val) {
    dispatch({
      type: "setEndDate",
      payload: val,
    });
  }

  async function loadGoods(page = 1) {
    const [err, data] = await getAllGoods(page);
    setNextPage(data.nextPage);
    if (!page) {
      return;
    }
    if (err) {
      console.log(err);
      return;
    }
    setAllGoods([...allGoods, ...data.data]);
  }

  function addGood(newGood) {
    dispatch({
      type: "addGood",
      newGood,
    });
  }

  // Events
  function goodSelectChange(e) {
    if (e.target.value === "more") {
      return loadGoods(nextPage);
    }

    const good = allGoods.find((good) => good._id === e.target.value);

    addGood({
      _id: e.target.value,
      title: good.title,
      quantity: 1,
      totalQuantity: good.quantity,
    });
  }

  function updateQuantity(good, val) {
    dispatch({
      type: "editGood",
      _id: good._id,
      newGood: { ...good, quantity: +val },
    });
  }

  useEffect(() => {
    loadGoods();
  }, []);

  // useEffect(() => {
  //   console.log(form);
  // }, [form]);
  // useEffect(() => {
  //   console.log(allGoods);
  // }, [allGoods]);

  return (
    <>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label
            htmlFor="startDate"
            className="leading-7 text-sm text-gray-600"
          >
            Start Date
          </label>
          <Input
            value={form.startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            id="startDate"
          />
        </div>
      </div>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label htmlFor="endDate" className="leading-7 text-sm text-gray-600">
            End Date
          </label>
          <Input
            value={form.endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            id="endDate"
          />
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Goods
          </label>

          <Select value={-1} onChange={goodSelectChange}>
            <option value="-1">Open this select menu</option>
            {allGoods.map((good) => (
              <option value={good._id} key={`allGood-${good._id}`}>
                Good: {good.title} - Price: {good.price.$numberDecimal} -
                Quantity: {good.quantity}
              </option>
            ))}
            <option className="bg-gray-400" value="more">
              More...
            </option>
          </Select>
          {form.goods.map((good) => (
            <div
              className="flex justify-between items-center my-2"
              key={good._id}
            >
              <div className="w-1/3">{good.title}</div>

              <Input
                type="number"
                value={good.quantity}
                onChange={(e) => updateQuantity(good, e.target.value)}
                id="endDate"
                max={good.totalQuantity}
                min={1}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <input type="checkbox" className="inline-block" />
          <label
            htmlFor="message"
            className="mx-2 leading-7 text-sm text-gray-600"
          >
            Confirmed?
          </label>
        </div>
      </div>
    </>
  );
}

export default Form;
