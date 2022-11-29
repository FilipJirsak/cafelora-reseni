import './style.css';

export const Footer = () => {
  const element = document.createElement('footer');
  element.innerHTML = `
    <div class="container">
      <div class="footer__content">
        Café Lóra je tréningový projekt v rámci Czechitas Digitální Akademie Web
      </div>
    </div>
  `;

  return element;
}
