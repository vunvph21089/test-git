import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client/client.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { ProductsListComponent } from './component/products-list/products-list.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminComponent } from './pages/admin/admin.component';

import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { ProductsdetailComponent } from './pages/productsdetail/productsdetail.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';


const routes: Routes = [
  {
    path: "", component: ClientComponent, children: [
      { path: "", component: HomePageComponent },    
      {path:"product" , component:ProductsListComponent},
      { path: "product/:id", component: ProductsdetailComponent },
      { path: "add", component: AddProductComponent },
      { path: "product/:id/edit", component: EditProductComponent},
      { path: "about", component: AboutComponent },
    ]
  },
  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component:DashboardComponent},
      { path: "product", component: AdminProductsComponent  }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
