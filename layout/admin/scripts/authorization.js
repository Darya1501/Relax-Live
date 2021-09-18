const login = "i'm_admin",
  password = 'dorado';

const setCookie = (key, value, del) => {
  const expires = new Date();
  let month = expires.getMonth();
  del ? month -= 5 :  month += 2;
  expires.setMonth(month);
  document.cookie = key + '=' + value + '; expires=' + expires;
};

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

const form = document.querySelector('form'),
  loginInput = document.getElementById('name'),
  passwordInput = document.getElementById('type'),
  warning = document.querySelectorAll('.text-warning');

const cookie = getAllCookie();
if (cookie.has('username') && cookie.has('password')) {
  loginInput.value = cookie.get('username');
  passwordInput.value = cookie.get('password');
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (loginInput.value !== login) {
    warning[0].style.display = 'block';
    loginInput.value = '';
  }
  if (passwordInput.value !== password) {
    warning[1].style.display = 'block';
    passwordInput.value = '';
  }
  if (loginInput.value === login && passwordInput.value === password) {
    window.location.href = './table.html';
    setCookie('username', loginInput.value);
    setCookie('password', passwordInput.value);
  }
});
