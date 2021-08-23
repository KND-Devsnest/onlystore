const fetchUsers = () => {
  return JSON.parse(localStorage.getItem("users"));
};

export const loadUser = () => {
  let users = fetchUsers();
  let currentUser = localStorage.getItem("currentUser");
  if (!users) {
    localStorage.setItem("users", JSON.stringify({}));
    return { isAuth: false, name: "", email: "", addr: "" };
  }
  if (!currentUser) return { isAuth: false, name: "", email: "", addr: "" };
  return { isAuth: true, email: currentUser, ...users[currentUser] };
};

export const updateUserDetailsAPI = (newData) => {
  let users = fetchUsers();
  let currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    return { statusMSG: "User not Logged In", status: 1 };
  }
  users[currentUser] = { ...users[currentUser], ...newData };
  localStorage.setItem("users", JSON.stringify(users));
  return { statusMSG: "User Details Updated!", status: 0 };
};

export const registerUserAPI = (email, userData) => {
  let users = fetchUsers();
  if (users[email] !== undefined)
    return { statusMSG: "Error: User Already Registered!", status: 1 };
  users[email] = { ...userData };
  localStorage.setItem("currentUser", email);
  localStorage.setItem("users", JSON.stringify(users));
  return { statusMSG: "User Registered!", status: 0 };
};

export const loginUserAPI = (email, userPass) => {
  let users = fetchUsers();
  if (users[email] === undefined) {
    return { status: 1, statusMSG: "Error : User Not Registered!" };
  }
  let { name, addr, pass } = users[email];
  if (pass === userPass) {
    localStorage.setItem("currentUser", email);
    return { status: 0, statusMSG: "Logged In!", user: { name, addr } };
  }
  return { status: 1, statusMSG: "Error: Password Not Matched!" };
};

export const logoutUserAPI = () => {
  localStorage.setItem("currentUser", "");
  return { status: 0, statusMSG: "Logged Out!" };
};
