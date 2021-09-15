const sendForm = () => {
  const popup = document.querySelector('.popup-thank'),
    closeButtons = popup.querySelectorAll('.close');

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const formHandler = form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const errorElementsForm = [...form.elements].filter(item => item.classList.contains('error'));
      const checkbox = [...form.elements].filter(item => item.type === 'checkbox');
      if (!checkbox[0].checked) {
        const label = checkbox[0].closest('.checkbox').querySelector('label');
        label.style.borderColor = 'red';
        label.style.borderWidth = '2px';
        return;
      } else {
        const label = checkbox[0].closest('.checkbox').querySelector('label');
        label.style.border = '1px solid #322823';
      }
      if (errorElementsForm.length) return;

      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then(response => {
          if (response.status !== 200) throw new Error('Status network not 200');
          popup.style.visibility = 'visible';
          closeButtons.forEach(button => {
            button.addEventListener('click', () => {
              popup.style.visibility = 'hidden';
            });
          });
          form.reset();
        })
        .catch(
          error => {
            console.log('error: ', error);
          }
        );

    });
  };

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    formHandler(form);
  });
};

export default sendForm;
