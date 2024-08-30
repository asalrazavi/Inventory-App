const products = () => {
  return `<!-- add product -->
          <div>
            <h2 class="text-xl text-slate-300 font-bold mb-1">
              Add New Product
            </h2>
            <form class="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
              <div>
                <label for="product-title" class="block mb-1 text-slate-400"
                  >Product title</label
                >
                <input
                  type="text"
                  name="product-title"
                  id="product-title"
                  class="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                  placeholder="Product title..."
                />
              </div>
              <div>
                <label for="product-quantity" class="block mb-1 text-slate-400">
                  Quantity
                </label>
                <input
                  type="number"
                  name="product-quantity"
                  id="product-quantity"
                  class="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                  placeholder="quantity..."
                />
              </div>
              <div>
                <label for="product-category" class="block mb-1 text-slate-400">Category</label>
                <select name="product-category" id="product-category" class="bg-transparent text-slate-400 rounded-xl w-full">

                </select>
              </div>
              <div class="flex items-center justify-between gap-x-4">
                <button
                  id="add-new-product"
                  class="flex-1 bg-slate-400 text-slate-800 rounded-xl py-2">
                  Add new Product
                </button>
              </div>
            </form>
          </div>`;
};

export default products;
