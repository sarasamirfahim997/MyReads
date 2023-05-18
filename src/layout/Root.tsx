import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../redux/store/store";

const Root = (props: any) => {
  return (
    <Provider store={store}>
      <Header />
      <main>{props.errPage ? props.errPage : <Outlet />}</main>
    </Provider>
  );
};

export default Root;
