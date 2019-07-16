import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import MainForm from "./components/main-form/main-form";
import SimpleForm from "./SimpleForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      {/* <SimpleForm /> */}
      <MainForm />
    </div>
  </Provider>,
  rootEl
);
