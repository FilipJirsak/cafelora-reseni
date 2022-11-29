import { Layer } from '../Layer';
import './style.css'

export const Drink = (props) => {
  const { id, name, image, ordered, layers } = props;

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="${image}" />
      </div>
      <div class="drink__info">
        <h3>${name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn${ordered ? ' order-btn--ordered' : ''}">
        ${ordered ? 'Zrušit' : 'Objednat'}
      </button>
    </div>
  `;

  element.querySelector('.drink__info').append(
    ...layers.map((layer) => Layer(layer))
  );
  
  element.querySelector('.order-btn').addEventListener('click', () => {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Email podlouckymartin@gmail.com',
      },
      body: JSON.stringify({ ordered: !ordered }),
    })
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(Drink(data.results));
      });
  });

  return element;
}
