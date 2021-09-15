const phoneMask = () => {
  const elems = document.querySelectorAll('input[name="phone"]');

  function mask(event) {
    if (event.data === null) {
      this.value = this.value.slice(0, this.value.length);
      return;
    }
    const template = '+7 (___) ___-__-__',
      val = this.value.replace(/\D/g, '');

    let i = 0,
      newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) : a));
    i = newValue.indexOf('_');

    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
      a => '\\d{1,' + a.length + '}').replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$');
    if (!reg.test(this.value) || this.value.length < 18) {
      this.value = newValue;
    }
    if (event.type === 'blur' && this.value.length < 18) {
      this.value = '';
    }
  }

  for (const elem of elems) {
    elem.addEventListener('input', mask);
    elem.addEventListener('focus', mask);
    elem.addEventListener('blur', mask);
  }
};

export default phoneMask;
