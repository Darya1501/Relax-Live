import ArrowSlider from './plugins/arrowSlider.js';

const fillRepairTypes = () => {
  const buttons = document.querySelector('.nav-list-popup-repair'),
    table = document.querySelector('.popup-repair-types-content-table');

  const goSlider = () => {
    const buttonSlider = new ArrowSlider({
      slides: '.popup-repair-types-content-table__list',
      dotsWrapper: '.nav-list-popup-repair', dots: '.popup-repair-types-nav__item',
      dotActiveClass: 'active',
    });
    buttonSlider.init();

    if (document.documentElement.clientWidth < 1025) {
      const arrowSlider = new ArrowSlider({
        slides: '.popup-repair-types-nav__item',
        prev: '#nav-arrow-popup-repair_left', next: '#nav-arrow-popup-repair_right',
      });
      arrowSlider.init();
      const tableSlider = new ArrowSlider({
        slides: '.popup-repair-types-content-table__list',
        prev: '#nav-arrow-popup-repair_left', next: '#nav-arrow-popup-repair_right',
      });
      tableSlider.init();
    }
  };

  const fillSlides = (data, typeSet) => {
    const sortData = {};
    typeSet.forEach(type => sortData[type] = []);
    data.forEach(obj => sortData[obj.type].push(obj));

    let stringHTML = '';

    for (const key in sortData) {
      stringHTML += `<table class="popup-repair-types-content-table__list">`;
      // eslint-disable-next-line no-loop-func
      sortData[key].forEach(obj => {
        stringHTML += `
          <tr class="mobile-row showHide">
            <td class="repair-types-name">${obj["name"]}</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
            <td class="repair-types-value">${obj["units"]}</sup></td>
            <td class="repair-types-value">${obj["cost"]}</td>
          </tr>
        `;
      });
      stringHTML += `</table>`;
    }
    table.insertAdjacentHTML('afterbegin', stringHTML);
    goSlider();
  };

  const fillButtons = types => {
    let stringHTML = '';
    types.forEach(type => {
      stringHTML += `<button class="button_o popup-repair-types-nav__item">${type}</button>`;
    });
    buttons.insertAdjacentHTML('beforeend', stringHTML);
    buttons.querySelector('button').classList.add('active');
  };

  const getAllInfo = () => {
    fetch("../crm-backend/db.json")
      .then(response => {
        if (response.status !== 200) throw new Error("Status network not 200");
        return response.json();
      })
      .then(data => {
        const typesArray = [];
        data.forEach(elem => {
          if (elem["type"]) typesArray.push(elem["type"]);
        });
        const typeSet = new Set(typesArray);
        fillButtons(typeSet);
        fillSlides(data, typeSet);
        return data;
      })
      .catch(error => console.error(error));
  };
  getAllInfo();

};

export default fillRepairTypes;
