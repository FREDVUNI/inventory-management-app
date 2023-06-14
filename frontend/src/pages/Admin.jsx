import React from "react";
import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "../admin/components/layout/Layout";
import "../assets/css/grid.css";
import "../assets/css/index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../redux/reducers";
import Dashboard from "./admin/Dashboard";

const store = createStore(rootReducer);

document.title = "Inventory";
const Admin = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </Provider>
  );
};

export default Admin;
