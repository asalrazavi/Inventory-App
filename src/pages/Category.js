const Category = () => {
  return `<!-- add category -->
          <div>
            <h2 class="text-xl text-slate-300 font-bold mb-1">
              Add New Category
            </h2>
            <form class="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
              <div>
                <label for="category-title" class="block mb-1 text-slate-400"
                  >title</label
                >
                <input
                  type="text"
                  name="category-title"
                  id="category-title"
                  class="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                />
              </div>
              <div>
                <label
                  for="category-description"
                  class="block mb-1 text-slate-400"
                  >description</label
                >
                <textarea
                  type="description"
                  name="category-description"
                  id="category-description"
                  class="w-full bg-transparent rounded-xl border border-slate-500 text-slate-400"
                ></textarea>
              </div>
              <div class="flex items-center justify-between gap-x-4">
                <button
                  class="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
                >
                  Cancel
                </button>
                <button
                  id="add-new-category"
                  class="flex-1 bg-slate-400 text-slate-200 rounded-xl py-2"
                >
                  Add new Category
                </button>
              </div>
            </form>
          </div>`;
};

export default Category;
