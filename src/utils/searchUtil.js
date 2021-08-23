import store from "../store/store";

export const searchUtil = (param, category = "all", filters = "all") => {
  const { productItems } = store.getState().products;
  const tempArray = [];
  filters = helper2(filters);

  productItems.forEach((el) => {
    if (category.toLowerCase() === "all" || category === el.category) {
      if (filters !== "all") {
        let tempFlag = true;
        for (let i in filters) {
          if (filters[i] === "all" || filters[i][el[i]]) continue;
          else tempFlag = false;
        }
        if (
          tempFlag &&
          (param = "all" || el.title.toLowerCase().includes(param))
        ) {
          tempArray.push(el);
        }
      } else if (param === "all" && filters === "all") {
        tempArray.push(el);
      } else {
        const temp = el[helper(el)].toLowerCase();
        if (temp.includes(param)) {
          tempArray.push(el);
        } else if (el.title.toLowerCase().includes(param)) {
          tempArray.push(el);
        } else if (el.category.toLowerCase().includes(param)) {
          tempArray.push(el);
        }
      }
    }
  });
  return tempArray;
};
function helper2(filters) {
  let count = 0,
    total = 0;
  for (let i in filters) {
    total += Object.keys(filters[i]).length;
    let temp = 0;
    for (let j in filters[i]) {
      if (!filters[i][j]) {
        count++;
        temp++;
      }
    }
    if (Object.keys(filters[i]).length == temp) {
      filters[i] = "all";
    }
  }
  if (total === count) return "all";
  else return filters;
}
function helper(el) {
  if (el.Brand) return "Brand";
  if (el.For) return "For";
  if (el.Language) return "Language";
  if (el.Type) return "Type";
}
