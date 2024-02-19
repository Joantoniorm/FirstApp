import {Routes} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductProvidersComponent} from "./product-providers/product-providers.component";
import {ProviderDetailsComponent} from "./provider-details/provider-details.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";

export const routes: Routes = [
    { path: "products", component: ProductListComponent },
    { path: "providers", component: ProductProvidersComponent },
    { path: "providers/:providerId", component: ProviderDetailsComponent },
    { path: "products/:productId", component: ProductDetailsComponent },
    { path: "cart", component: CartComponent },
    { path: "shipping", component: ShippingComponent },
];