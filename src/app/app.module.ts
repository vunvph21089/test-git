import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './component/products-list/products-list.component';

import { ClientComponent } from './layout/client/client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsdetailComponent } from './pages/productsdetail/productsdetail.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ClientComponent,
    HomePageComponent,
    PageNotFoundComponent,
    AboutComponent,
    AdminlayoutComponent,
    AdminProductsComponent,
    DashboardComponent,
    ProductsdetailComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
