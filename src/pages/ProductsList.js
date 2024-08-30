const ProductsList = () => {
  return `<!-- product list -->
          <div class="flex justify-between flex-col gap-x-6">
            <h2 class="text-xl text-slate-300 font-bold mb-1">Products List</h2>
            <div class="flex items-center justify-between mb-6">
              <label for="search-input" class="text-slate-500 text-lg"
                >search</label
              >
              <input
                type="text"
                name="search-input"
                id="search-input"
                class="bg-transparent rounded-xl border border-slate-500 text-slate-400"
              />
            </div>
            <div class="flex items-center justify-between mb-6">
              <label for="sort-products" class="text-slate-500 text-lg"
                >sort</label
              >
              <select
                name="sort-products"
                id="sort-products"
                class="bg-transparent rounded-xl text-slate-400"
              >
                <option value="" class="bg-slate-500 text-slate-300">
                  select a category
                </option>
                <option
                  value="newest"
                  selected
                  class="bg-slate-500 text-slate-300"
                >
                  newest
                </option>
                <option value="oldest" class="bg-slate-500 text-slate-300">
                  oldest
                </option>
              </select>
            </div>
            <ul id="products-list" class="overflow-x-auto"></ul>
            <div class="h-20"></div>
          </div>`;
};

export default ProductsList;
