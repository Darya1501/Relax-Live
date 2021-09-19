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

// Поиск
const searchInput = document.getElementById('search'),
  clearBtn = document.getElementById('clear');
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter')
    window.location.href = `table.html${searchInput.value ? "?search=" + searchInput.value : ''}`;
});
clearBtn.addEventListener('click', () => {
  window.location.href = `table.html`;
});


// Заполнение таблицы и фильтра
const
  filterInput = document.getElementById("typeItem"),
  tableBody = document.getElementById("tbody");

const fillTable = data => {
  const query = decodeURI((new URL(document.location)).searchParams.get("search")).toLowerCase();
  tableBody.textContent = '';
  let stringHTML = '';

  data.forEach(product => {
    const prodHTML = `
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

    if (query && query !== 'null') {
      console.log('query: ', query);
      let productString = product['id'] + product['type'] + product['name'] + product['units'] + product['cost'];
      productString = productString.toLowerCase();
      if (productString.indexOf(query) !== -1) {
        const queryExp = new RegExp(query, 'gi');
        stringHTML += prodHTML.replace(queryExp, `<mark>$&</mark>`);
      } else { stringHTML += ''; }
    } else { stringHTML += prodHTML; }
  });
  tableBody.insertAdjacentHTML('afterbegin', stringHTML ? stringHTML : '<tr class="table__row">ничего не найдено</tr>');
};
const fillFilter = types => {
  types.forEach(type => {
    const newOption = new Option(type, type);
    filterInput.append(newOption);
  });
};


// Фильтрация
const filter = () => {
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
};
filterInput.addEventListener("change", filter);


// Сортировка при клике на заголовок
const sort = data => {
  const header = document.querySelector('thead');
  header.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.table-th') && !target.matches('.th-handler')) {
      let reverce = false;

      if (target.closest('.table-th').classList.contains('active')) {
        const svg = target.closest('.table-th').querySelector('.svg_ui');
        if (svg.classList.contains('reverce')) {
          svg.classList.remove('reverce');
          reverce = false;
        } else {
          svg.classList.add('reverce');
          reverce = true;
        }
      } else {
        header.querySelectorAll('.table-th').forEach(title => {
          title.classList.remove('active');
          const svg = title.querySelector('.svg_ui');
          if (svg) svg.style.display = 'none';
        });
        target.closest('.table-th').classList.add('active');
        target.closest('.table-th').querySelector('.svg_ui').style.display = 'inline';
        reverce = false;
      }

      const param = target.closest('.table-th').classList[1].slice(3);

      if (param === 'id' || param === 'cost') {
        reverce ? data.sort((a, b) => (b[param] - a[param])) : data.sort((a, b) => (a[param] - b[param]));
      } else {
        data.sort((a, b) => {
          const nameA = a[param].toLowerCase(), nameB = b[param].toLowerCase();
          if (nameA < nameB)
            return reverce ? 1 : -1;
          if (nameA > nameB)
            return reverce ? -1 : 1;
          return 0;
        });
      }
      fillTable(data);
    }
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
    .then(data => {
      filter();
      return data;
    })
    .then(data => {
      sort(data);
      return data;
    })
    .catch(error => console.error(error));
};
getAllInfo();


// Удаление товара из БД
const deleteData = id => fetch(`http://localhost:3000/api/items/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
});
//  Добавление элемета в БД
const postData = body => fetch('http://localhost:3000/api/items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});
// Изменение элемента в БД
const changeData = (id, body) => fetch(`http://localhost:3000/api/items/${id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});


// Модальное окно
const
  modal = document.getElementById('modal'),
  addBtn = document.querySelector('.btn-addItem'),
  closeBtn = document.querySelector('.button__close'),
  canselBtn = document.querySelector('.cancel-button'),
  form = modal.querySelector('form'),
  inputs = Array.from(modal.querySelectorAll('input'));

const openModal = (target, data) => {
  modal.querySelector('.modal__header').textContent = `${target} услуги`;
  modal.style.display = 'flex';
  if (data) {
    form.dataset.type = 'change';
    form.dataset.id = data.id;
    inputs.forEach(input => {
      input.value = data[input.id];
    });
  } else { form.dataset.type = 'add'; }
};

addBtn.addEventListener('click', () => openModal('Добавление новой'));
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  form.dataset.type = '';
  form.reset();
});
canselBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  form.dataset.type = '';
  form.reset();
});

tableBody.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.action-change')) {
    const row = target.closest('.table__row');
    const product = {
      id: row.querySelector('.table__id').textContent,
      name: row.querySelector('.table-name').textContent,
      type: row.querySelector('.table-type').textContent,
      units: row.querySelector('.table-units').textContent,
      cost: row.querySelector('.table-cost').textContent,
    };
    openModal('Изменение', product);
  } else if (target.closest('.action-remove')) {
    const id = target.closest('.table__row').querySelector('.table__id').textContent;
    const name = target.closest('.table__row').querySelector('.table-name').textContent;
    const result = confirm('Подтвердите удаление товара: \n id:' + id + ', название: ' + name);
    if (result) { deleteData(id); getAllInfo(); }
    return;
  }
});


// Форма в модальном окне
const sendBtn = document.querySelector('.button-ui_firm');

const checkInputs = () => {
  let flag = true;
  inputs.forEach(item => {
    if (item.value.trim() === '') {
      flag = false;
      item.classList.add('error');
    } else {
      item.classList.remove('error');
    }
  });
  return flag;
};

sendBtn.addEventListener('click', event => {
  event.preventDefault();
  if (checkInputs()) {
    const body = {};
    inputs.forEach(input => {
      body[input.id] = input.value;
    });

    if (form.dataset.type === "add") {
      postData(body)
        .then(() => {
          getAllInfo();
          modal.style.display = 'none';
          form.dataset.type = '';
          form.reset();
        });
    } else if (form.dataset.type === "change") {
      changeData(form.dataset.id, body)
        .then(() => {
          getAllInfo();
          modal.style.display = 'none';
          form.dataset.type = '';
          form.reset();
        });
    }
  }
});
