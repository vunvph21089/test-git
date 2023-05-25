import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/producst';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  product!: IProduct
  productForm = this.formBuilder.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    price:[0,[]]
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe(param =>{
      const id = Number(param.get('id'))
      this.productService.getProductById(id).subscribe(product =>{
        this.product= product
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        })
      },error => console.log(error.message))
    })
  }
  onHandleUpdate(){
    if(this.productForm.valid){
      const newProduct : IProduct = {
        id:this.product.id,
        name:this.productForm.value.name || "",
        price:this.productForm.value.price || 0
      }
      this.productService.updateProduct(newProduct).subscribe(product =>{
        console.log(product);
        
      })
    }
  }
}
