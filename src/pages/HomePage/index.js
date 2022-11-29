import { Header } from "../../components/Header";
import { Banner } from "./components/Banner";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  
  const main = document.createElement('main');
  main.append(
    Banner(),
    Menu(),
    Gallery(),
    Contact(),
  );
  
  element.append(
    Header(),
    main,
    Footer(),
  );

  return element;
}
