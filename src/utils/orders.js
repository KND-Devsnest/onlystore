export const loadOrder = (userEmail = null) => {
  if (!userEmail) return null;
  const temp = JSON.parse(localStorage.getItem("orders"));
  if (!temp) return null;
  if (temp[userEmail]) return temp[userEmail];
  else return null;
};

export const saveOrders = (
  orders = null,
  userEmail = null,
  deletexd = false
) => {
  if (!orders) return null;
  else {
    let temp = JSON.parse(localStorage.getItem("orders"));
    if (!temp) temp = {};
    if (!temp[userEmail]) temp[userEmail] = { orders: [] };
    if (deletexd) temp[userEmail].orders = orders;
    else {
      temp[userEmail].orders = [...temp[userEmail].orders, orders];
    }
    localStorage.setItem("orders", JSON.stringify(temp));
  }
};

export const OrderGenerator = (cartItems, totalPrice, address) => {
  const temp = {};
  temp["products"] = cartItems;
  temp["totalPrice"] = totalPrice;
  let countQuantity = 0;
  for (let i in temp["products"]) {
    countQuantity += temp["products"][i].quantity;
  }
  temp["totalQuantity"] = countQuantity;
  temp["deliveryTime"] = timeHelper(cartItems);
  temp["address"] = address;
  temp["orderTime"] = Date.now();
  return temp;
};
function timeHelper(cartItems) {
  let temp = 0;
  Object.keys(cartItems).map((el) => {
    temp += cartItems[el].eta;
  });
  return temp;
}

export const remainingTimeCalc = (deliveryTime, orderTime) => {
  const currentTime = Math.floor(Date.now() / 1000);
  orderTime = Math.floor(orderTime / 1000);
  orderTime += deliveryTime * 60;
  return Math.floor((orderTime - currentTime) / 60);
};

export const deleteOrder = (orders, orderIdToDelete) => {
  return orders.filter((el) => el.orderTime !== orderIdToDelete);
};
