import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Order } from "./components/Order";

export const OrderPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(
    Header({ showMenu: false }),
    Order({ items: 'loading' }),
    Footer(),
  );

  return element;
}
