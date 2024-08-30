import Dashboard from "../pages/Dashboard.js";
import Products from "../pages/Products.js";
import Category from "../pages/Category.js";
import ProductsList from "../pages/ProductsList.js";
import NotFound from "../pages/Notfound.js";

const app = document.querySelector(".app");

function router(param) {
  const basePath = "/public";
  const routes = [
    { path: `${basePath}/`, view: Dashboard },
    { path: `${basePath}/dashboard`, view: Dashboard },
    { path: `${basePath}/products`, view: Products },
    { path: `${basePath}/category`, view: Category },
    { path: `${basePath}/ProductsList`, view: ProductsList },
  ];

  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });

  const pathname = location.pathname.replace(/\/$/, "");
  console.log("Current Pathname:", pathname);

  let match = potentialRoutes.find((route) => route.isMatch);
  if (!match) {
    match = {
      route: { path: "/404", view: NotFound },
      isMatch: true,
    };
  }
  app.innerHTML = match.route.view();
  // console.log(match.route.view());
}

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
