import { HomePage } from "./pages/HomePage";
import { OrderPage } from "./pages/OrderPage";
import "./style.css";

const { pathname } = window.location;

if (pathname === BASE_PATH + "/") {
  document.querySelector("#app").append(HomePage());
} else if (pathname === BASE_PATH + "/objednavka") {
  document.querySelector("#app").append(OrderPage());
}
