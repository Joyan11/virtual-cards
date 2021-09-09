/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainContext } from "./context/MainContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainContext>
        <App />
      </MainContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// const apiData = {
//   data: [
//     {
//       name: "Mixmax",

//       budget_name: "Software subscription",

//       owner_id: 1,

//       spent: {
//         value: 100,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 1000,

//         currency: "SGD",
//       },

//       card_type: "burner",

//       expiry: "9 feb",

//       limit: null,

//       status: "active",
//     },
//     {
//       name: "Quickbooks",

//       budget_name: "Software subscription",

//       owner_id: 2,

//       spent: {
//         value: 20,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 100,

//         currency: "SGD",
//       },

//       card_type: "subscription",

//       expiry: "",

//       limit: 100,

//       status: "active",
//     },
//     {
//       name: "Motion",

//       budget_name: "Software subscription",

//       owner_id: 3,

//       spent: {
//         value: 30,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 500,

//         currency: "SGD",
//       },

//       card_type: "subscription",

//       expiry: "",

//       limit: 50,

//       status: "active",
//     },
//     {
//       name: "Pandadoc",

//       budget_name: "Software subscription",

//       owner_id: 3,

//       spent: {
//         value: 500,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 2000,

//         currency: "SGD",
//       },

//       card_type: "burner",

//       expiry: "9 feb",

//       limit: 700,

//       status: "active",
//     },
//     {
//       name: "Xero",

//       budget_name: "Software subscription",

//       owner_id: 4,

//       spent: {
//         value: 5,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 100,

//         currency: "SGD",
//       },

//       card_type: "subscription",

//       expiry: "9 feb",

//       limit: 20,

//       status: "active",
//     },
//     {
//       name: "Mookambika",

//       budget_name: "Software subscription",

//       owner_id: 5,

//       spent: {
//         value: 100,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 1000,

//         currency: "SGD",
//       },

//       card_type: "burner",

//       expiry: "9 feb",

//       limit: null,

//       status: "active",
//     },
//     {
//       name: "Apple Dev License",

//       budget_name: "Sales Singapore",

//       owner_id: 6,

//       spent: {
//         value: 100,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 1000,

//         currency: "SGD",
//       },

//       card_type: "burner",

//       expiry: "9 feb",

//       limit: null,

//       status: "active",
//     },
//     {
//       name: "Discord Nitro",

//       budget_name: "Software subscription",

//       owner_id: 7,

//       spent: {
//         value: 200,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 1500,

//         currency: "SGD",
//       },

//       card_type: "burner",

//       expiry: "9 feb",

//       limit: 300,

//       status: "active",
//     },
//     {
//       name: "Browerstack",

//       budget_name: "Software subscription",

//       owner_id: 8,

//       spent: {
//         value: 100,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 1000,

//         currency: "SGD",
//       },

//       card_type: "subscription",

//       expiry: "9 feb",

//       limit: 100,

//       status: "active",
//     },
//     {
//       name: "Deepscan",

//       budget_name: "Software subscription",

//       owner_id: 9,

//       spent: {
//         value: 10,

//         currency: "SGD",
//       },

//       available_to_spend: {
//         value: 50,

//         currency: "SGD",
//       },

//       card_type: "subscription",

//       expiry: "9 feb",

//       limit: 20,

//       status: "active",
//     },
//   ],
//   page: 1,
//   per_page: 10,
//   total: 100,
// };
