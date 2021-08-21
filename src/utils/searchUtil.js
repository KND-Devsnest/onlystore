import store from "../store/store";
export const searchUtil = (param) => {
  const { productItems } = store.getState().products;
  const tempArray = [];
  productItems.forEach((el, index) => {
    const temp = el[helper(el)].toLowerCase();
    if (temp.includes(param)) {
      tempArray.push(el);
    } else if (el.title.toLowerCase().includes(param)) {
      tempArray.push(el);
    } else if (el.category.toLowerCase().includes(param)) {
      tempArray.push(el);
    }
  });
  return tempArray;
};

function helper(el) {
  if (el.Brand) return "Brand";
  if (el.For) return "For";
  if (el.Language) return "Language";
  if (el.Type) return "Type";
}
