import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../redux/store/store";
interface ErrorOutlet {
  outlet?: any;
}
const Root = (props: ErrorOutlet) => {
  return (
    <Provider store={store}>
      <Header />
      <main>{props.outlet ? props.outlet : <Outlet />}</main>
    </Provider>
  );
};

export default Root;
