import CategoryView from "./CategoryView.js";
import ProductView from "./productView.js";

document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setApp();
  ProductView.setApp();

  CategoryView.createCategoriesList();
  ProductView.createProductsList(ProductView.products);
});
