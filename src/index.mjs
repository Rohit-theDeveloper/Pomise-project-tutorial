const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async promise task 1");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promises Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 called");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 resolved");
});

// pasaing parameter like thing if we fetch data from server or api and they retutn something then how i return this ... so this is the example of that

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async three created");
    resolve({ username: "rohit kumar", password: 123 });
  }, 1000);
});

promiseThree.then((result) => {
  console.log(result);
});

// There is another promise that is come with error and to handle error with catch in js lets we understand;

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javaScript", password: 1234 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (result) {
    console.log(result);
    return result.username;
  })
  .then((username) => console.log(username))
  .catch((e) => {
    console.log(e);
  })
  .finally(() => console.log("The Promise is Eigther resolve or Rejected"));

//  here we are going to depth and using async /await to do the same thing that promises does with fetch okh

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "usingasync/await", password: 11111 });
    } else {
      reject("Error in Async/Await");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    let result = await promiseFive;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();
