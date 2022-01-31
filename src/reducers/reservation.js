import React from "react";

export const init = {
  startDate: "",
  endDate: "",
  customer: {
    email: "",
    firstName: "",
    lastName: "",
    childs: [],
  },
  goods: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "setCustomerProp": {
      const { name, value } = action;
      return { ...state, customer: { ...state.customer, [name]: value } };
    }
    case "setStartDate": {
      // const newState = { ...state };
      // newState.startDate = action.payload;
      // console.log(action.payload);
      const { payload } = action;
      return { ...state, startDate: payload };
    }
    case "setEndDate": {
      // const newState = { ...state };
      // newState.endDate = action.payload;
      // console.log(newState);
      const { payload } = action;
      return { ...state, endDate: payload };
    }
    case "addGood": {
      const { newGood } = action;
      if (state.goods.find((el) => el._id === newGood._id)) {
        return state;
      }
      return { ...state, goods: [...state.goods, newGood] };
    }
    case "editGood": {
      const { _id, newGood } = action;

      const goodIndex = state.goods.findIndex((item) => item._id === _id);

      state.goods[goodIndex] = newGood;

      return { ...state, goods: [...state.goods] };
    }
    case "reset": {
      return init;
    }
    default:
      throw new Error("Action Dosn't exists");
  }
}

export default React.createContext(init);
