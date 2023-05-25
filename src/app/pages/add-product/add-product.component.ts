import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/producst';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService){}
  onHandleAdd(){
    this.productService.addProduct(this.product).subscribe(product =>{
      console.log(product)
    })
  }
}
