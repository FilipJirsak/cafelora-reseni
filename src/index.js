import { HomePage } from "./pages/HomePage";
import { OrderPage } from "./pages/OrderPage";
import "./style.css";

const { pathname } = window.location;

console.log("process", process);
console.log("env", env);

if (pathname === "/") {
  document.querySelector("#app").append(HomePage());
} else if (pathname === "/objednavka") {
  document.querySelector("#app").append(OrderPage());
}
