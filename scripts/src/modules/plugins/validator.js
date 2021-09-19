class Validator {
  constructor({ selector, pattern = {}, method }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item =>
      item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
    this.error = new Set();
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.chekIt.bind(this)));
    this.form.addEventListener('submit', event => {
      this.elementsForm.forEach(elem => this.chekIt({ target: elem }));
      if (this.error.size) {
        event.preventDefault();
      } else {
        this.elementsForm.forEach(elem => elem.classList.remove('success'));
      }
    });
  }

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      },
    };

    if (this.method) {
      const method = this.method[elem.id];
      if (method) {
        const result = method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
        return result;
      }
    }

    return true;
  }

  chekIt(event) {
    const target = event.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
      input.success {
        border-bottom: 2px solid green !important
      }
      input.error {
        border-bottom: 2px solid red !important
      }
      .validator-error {
        position: absolute;
        bottom: -15px;
        font-size: 14px;
        color: red;
        margin-top: -20px;
      }
    `;
    document.head.appendChild(style);
  }

  setPattern() {
    if (!this.pattern.phone) {
      this.pattern.phone = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    }
    if (!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }
    if (!this.pattern.name) {
      this.pattern.name = /^[а-я ]{2,}$/i;
    }
    if (!this.pattern.message) {
      this.pattern.message = /[а-я0-9 ]/i;
    }
  }
}

const validate = () => {
  const valid1 = new Validator({
    selector: "#feedback1",
    pattern: {},
    method: {
      "feedback-input1": [["notEmpty"], ["pattern", "phone"]],
    },
  });
  valid1.init();

  const valid2 = new Validator({
    selector: "#feedback2",
    pattern: {},
    method: {
      "name2": [["notEmpty"], ["pattern", "name"]],
      "feedback-input2": [["notEmpty"], ["pattern", "phone"]],
    },
  });
  valid2.init();

  const valid3 = new Validator({
    selector: "#feedback3",
    pattern: {},
    method: {
      "feedback-input3": [["notEmpty"], ["pattern", "phone"]],
    },
  });
  valid3.init();

  const valid4 = new Validator({
    selector: "#feedback4",
    pattern: {},
    method: {
      "name4": [["notEmpty"], ["pattern", "name"]],
      "feedback-input4": [["notEmpty"], ["pattern", "phone"]],
    },
  });
  valid4.init();

  const valid5 = new Validator({
    selector: "#feedback5",
    pattern: {},
    method: {
      "name5": [["notEmpty"], ["pattern", "name"]],
      "feedback-input5": [["notEmpty"], ["pattern", "phone"]],
    },
  });
  valid5.init();

  const valid6 = new Validator({
    selector: "#feedback6",
    pattern: {},
    method: {
      "feedback-input6": [["notEmpty"], ["pattern", "phone"]],
    },
  });
  valid6.init();
};

export default validate;
