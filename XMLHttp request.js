 //Отправка форм
  const forms = document.querySelectorAll("form");

  forms.forEach(item => {
    postData(item);
  });

  const message = {
    loading: 'loading',
    success: 'success',
    failure: 'failure'
  };

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      console.log(message.loading);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');

      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      const object = {};

      formData.forEach(function (value, key){
        object[key] = value;
      });
      console.log(object);

      const json = JSON.stringify(object);

      console.log(json);

      request.send(formData);

      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(message.success);
        } else {
          console.log(message.failure);
        }
      });
    });
  }
});
