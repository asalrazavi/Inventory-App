const products = [
  {
    id: 1,
    title: "html pack",
    category: "front",
    createdAt: "2022-08-21T12:30:54.519Z",
  },
];
const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend is a good programing language",
    createAt: "2024-08-21T12:30:54.519Z",
  },
  {
    id: 2,
    title: "backend",
    description: "backend is a good programing language",
    createAt: "2024-08-21T12:32:02.309Z",
  },
  {
    id: 3,
    title: "database",
    description: "database is a good programing language",
    createAt: "2024-08-21T12:32:31.765Z",
  },
];

export default class Storage {
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }

  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    const isExisted = savedCategories.find((c) => c.id === categoryToSave.id);
    if (isExisted) {
      //edit category
      isExisted.title = categoryToSave.title;
      isExisted.description = categoryToSave.description;
    } else {
      //new category
      categoryToSave.id = new Date().getTime();
      categoryToSave.createAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }

  static getAllProducts(sort = "newest") {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return savedProducts.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createAt) > new Date(b.createAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createAt) > new Date(b.createAt) ? 1 : -1;
      }
    });
  }

  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    const existedProductIndex = savedProducts.findIndex(
      (p) => p.id === productToSave.id
    );

    if (existedProductIndex !== -1) {
      // Edit product
      savedProducts[existedProductIndex] = {
        ...savedProducts[existedProductIndex],
        title: productToSave.title,
        category: productToSave.category,
        quantity: productToSave.quantity,
      };
    } else {
      // New product
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }

    localStorage.setItem("products", JSON.stringify(savedProducts));
  }

  static deleteProduct(id) {
    const savedProdocuts = Storage.getAllProducts();
    const filteredProducts = savedProdocuts.filter(
      (p) => p.id !== parseInt(id)
    );
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  }
}
