import Storage from "./Storage.js";
const addNewProductBTN = document.getElementById("add-new-product");
const searchInput = document.querySelector("#search-input");
const selectedSort = document.querySelector("#sort-products");
const closeModalBtn = document.querySelector(".close");
const saveEditBtn = document.getElementById("saveEdit");

// Close the modal if user clicks outside of it
window.onclick = function (event) {
  if (event.target === document.getElementById("editModal")) {
    document.getElementById("editModal").style.display = "none";
  }
};

class ProductView {
  constructor() {
    addNewProductBTN.addEventListener("click", (e) => this.addNewProduct(e));
    searchInput.addEventListener("input", (e) => this.searchProducts(e));
    selectedSort.addEventListener("change", (e) => this.selectedSort(e));
    closeModalBtn.addEventListener("click", (e) => this.closeModal(e));
    saveEditBtn.addEventListener("click", (e) => this.saveEdit(e));
    this.products = [];
  }

  setApp() {
    this.products = Storage.getAllProducts();
  }

  addNewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;

    if (!title || !quantity || !category) return;
    Storage.saveProducts({ title, category, quantity });
    this.products = Storage.getAllProducts();
    this.createProductsList(this.products);
    // console.log(this.products);
  }

  createProductsList(products) {
    const productDOM = document.getElementById("products-list");
    let result = "";
    products.forEach((item) => {
      const selectedCategory = Storage.getAllCategories().find(
        (c) => c.id == item.category
      );

      const categoryTitle = selectedCategory
        ? selectedCategory.title
        : "Unknown Category";

      result += `<div class="flex items-center justify-between mb-2 w-full min-w-[400px]">
      <span class="text-slate-400">${item.title}</span>
      <div class="flex items-center gap-x-3">
        <span class="text-slate-400">${new Date().toLocaleDateString(
          "fa-IR"
        )}</span>
        <span class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
        ${categoryTitle}</span>
        <span
          class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
          ${item.quantity}
          </span>
          <button class="edit-product border px-2 py-0.5 rounded-2xl border-green-400 text-green-400"
        data-product-id=${item.id}>Edit</button>
        <button class="delete-product border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product"
        data-product-id=${item.id}>Delete</button>
      </div>
    </div>`;
    });
    productDOM.innerHTML = result;

    const deleteBtns = [...document.querySelectorAll(".delete-product")];
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.deleteProduct(e));
    });

    const editBtns = [...document.querySelectorAll(".edit-product")];
    editBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => this.editProduct(e));
    });
  }

  searchProducts(e) {
    const value = e.target.value.trim().toLowerCase();
    // console.log(value);
    const filteredProducts = this.products.filter((p) =>
      p.title.toLowerCase().includes(value)
    );
    // this.products = filteredProducts;
    this.createProductsList(filteredProducts);
  }

  selectedSort(e) {
    const value = e.target.value;
    console.log(value);
    this.products = Storage.getAllProducts(value);
    this.createProductsList(this.products);
  }

  deleteProduct(e) {
    const productId = e.target.dataset.productId;
    Storage.deleteProduct(productId);
    this.products = Storage.getAllProducts();
    this.createProductsList(this.products);
  }

  editProduct(e) {
    const id = e.target.dataset.productId;
    const product = this.products.find((p) => p.id == id);

    document.getElementById("modalInput").value = product.title;
    document.getElementById("modalQuantity").value = product.quantity;

    const categories = Storage.getAllCategories();
    const modalCategory = document.getElementById("modalCategory");
    modalCategory.innerHTML = categories
      .map(
        (category) =>
          `<option value="${category.id}" ${
            category.id == product.category ? "selected" : ""
          }>
            ${category.title}
        </option>`
      )
      .join("");

    document.getElementById("saveEdit").dataset.productId = id;

    document.getElementById("editModal").style.display = "block";
  }

  saveEdit() {
    const productId = document.getElementById("saveEdit").dataset.productId;
    const newTitle = document.getElementById("modalInput").value.trim();
    const newQuantity = document.getElementById("modalQuantity").value.trim();
    const newCategory = document.getElementById("modalCategory").value;

    if (newTitle !== "" && newQuantity !== "" && newCategory !== "") {
      const product = this.products.find((p) => p.id == productId);
      if (product) {
        product.title = newTitle;
        product.quantity = newQuantity;
        product.category = newCategory;
        Storage.saveProducts(product);
        this.createProductsList(this.products);
        this.closeModal();
      }
    } else {
      alert("Please fill in all fields correctly.");
    }
  }

  closeModal() {
    document.getElementById("editModal").style.display = "none";
  }
}
export default new ProductView();
