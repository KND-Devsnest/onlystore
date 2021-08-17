let currentUsers = JSON.parse(localStorage.getItem("users")) || [];
export function startBackend() {
  window.fakeFetch = function (url, method = "GET", headers) {
    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, 500);
      function handleRoute() {
        if (url === "/products" && method === "GET") {
          return giveBackProducts();
        } else if (url === "/register" && method === "POST") {
          return registerUser();
        } else if (url === "/login" && method === "POST") {
          return loginUser();
        } else {
          reject("Unkown Route");
        }
      }
      function giveBackProducts() {
        fetch("../src/assets/data/products.json").then((result) =>
          result.json().then((data) => resolve(data))
        );
      }
      function registerUser() {
        let x = Object.keys(headers.body)[0];
        if (x in currentUsers) {
          reject("user already registered");
          return;
        } else {
          currentUsers = { ...currentUsers, ...headers.body };
          localStorage.setItem("users", JSON.stringify(currentUsers));
          resolve("Registeration successful");
        }
      }
      function loginUser() {
        let x = Object.keys(headers.body)[0];
        if (x in currentUsers) {
          if (headers.body[x] === currentUsers[x]) resolve("Logged In");
          else reject("Wrong Password");
        } else {
          reject("User Doesn't exist");
        }
      }
    });
  };
}
