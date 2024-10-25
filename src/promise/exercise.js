function delay(time, message) {
    // Tu código aquí 👈
    const promise = new Promise((resolve, reject) => {
      if (time >= 0) {
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