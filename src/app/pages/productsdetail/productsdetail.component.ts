import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/producst';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent {
product?:IProduct
constructor(
  private productService: ProductService,
  private route: ActivatedRoute
) {
  this.route.paramMap.subscribe(param => {
    const id = Number(param.get('id'));
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    }, error => console.log(error.message))
  })
}
}
