import { Routes } from "@angular/router";
import { ProductDetailsComponent } from "./app/components/product-details/product-details.component";
import { ProductListComponent } from "./app/components/product-list/product-list.component";
import { ProvidersListComponent } from "./app/components/providers-list/providers-list.component";
import { ProvidersDetailsComponent } from "./app/components/providers-details/providers-details.component";

const routeConfig: Routes = [
  {
    path: "",
    component: ProductListComponent,
    title: "Home page",
  },
  {
    path: "products/:productId",
    component: ProductDetailsComponent,
    title: "Product details",
  },
  {
    path: "providers",
    component: ProvidersListComponent,
    title: "Providers",
  },
  {
    path: "providers/:providerId",
    component: ProvidersDetailsComponent,
    title: "Providers details",
  },
];

export default routeConfig;
