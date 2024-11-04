function delay(time, message) {
    // Tu código aquí 👈
    const promise = new Promise((resolve, reject) => {
      if (time >= 0) {
        //window.setTimeout
        setTimeout(() => {
          resolve(message);
        }, time);
      } else {
        reject('Time not valid');
      }
    });
     return promise;
  }

  delay(2000, "Hello! after 2s").then((result) => {
    console.log(result);
  });
  delay(3000, "Hello! after 3s").then((result) => {
    console.log(result);
  });