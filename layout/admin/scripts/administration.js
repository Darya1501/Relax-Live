// Проверка авторизации
const getAllCookie = () => {
  const cookieMap = new Map();
  if (document.cookie) {
    const cookieString = document.cookie.split(";");
    cookieString.forEach(cookie => {
      cookie = cookie.split('=');
      cookieMap.set(cookie[0].trim(), cookie[1].trim());
    });
  }
  return cookieMap;
};

const cookie = getAllCookie();
if (!cookie.has('username') || !cookie.has('password')) {
  window.location.href = './index.html';
}


// Заполнение таблицы
const
  filterInput = document.getElementById("typeItem"),
  tableBody = document.getElementById("tbody");

const fillTable = data => {
  let stringHTML = '';
  data.forEach(product => {
    stringHTML += `
      <tr class="table__row">
        <td class="table__id table__cell">${product['id']}</td>
        <td class="table-type table__cell">${product['type']}</td>
        <td class="table-name table__cell">${product['name']}</td>
        <td class="table-units table__cell">${product['units']}</td>
        <td class="table-cost table__cell">${product['cost']}</td>
        <td>
          <div class="table__actions table__cell">
            <button class="button action-change">
              <span class="svg_ui">
                <svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg>
              </span>
              <span>Изменить</span>
            </button>
            <button class="button action-remove">
              <span class="svg_ui">
                <svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg>
              </span>
              <span>Удалить</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  });
  tableBody.insertAdjacentHTML('afterbegin', stringHTML);
};

const fillFilter = types => {
  types.forEach(type => {
    const newOption = new Option(type, type);
    filterInput.append(newOption);
  });
};


// Получение данных
const getAllInfo = () => {
  fetch('http://localhost:3000/api/items')
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
      fillFilter(typeSet);
      fillTable(data, typeSet);
      return data;
    })
    .catch(error => console.error(error));
};
getAllInfo();


// Фильтрация
filterInput.addEventListener("change", () => {
  const type = filterInput.options[filterInput.selectedIndex].value;
  const products = document.querySelectorAll(".table__row");

  products.forEach(product => {
    product.classList.remove("hidden");
    const productType = product.querySelector(".table-type");
    if (productType && type !== "Все услуги") {
      if (productType.textContent.indexOf(type) === -1) {
        product.classList.add("hidden");
      }
    }
  });
});


