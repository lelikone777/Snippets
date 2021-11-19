// fetch
  const forms = document.querySelectorAll("form");
  forms.forEach(f => {
    postData(f);
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
      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key){
        object[key] = value;
      });
      console.log(object);

      fetch('server.php', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(object)
      })
          .then(data => data.text())
          .then(data => {
            console.log(data);
            console.log(message.success);

      }).catch(() => {
        console.log(message.failure);
      }).finally(() => {
        console.log('Thus is the end');
      });
    });
  }
