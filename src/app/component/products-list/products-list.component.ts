import { Component,Input,EventEmitter ,Output} from '@angular/core';
import { IProduct} from 'src/app/interface/producst';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  title = 'Quản lý sản phẩm';
  status: boolean =  false;
  valueInput: string = "";
  product! : IProduct
  @Input() products: IProduct[] =[]
  @Output() onRemove= new EventEmitter<number>();
  setValue(e:any){
    this.valueInput = e.target.value;
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ){
      this.productService.getAll().subscribe(product =>{
        this.product= product     
      },error => console.log(error.message))
   
  }
  nutbam(){
    this.status= !this.status;
  }
  removeItem(id:any){
    // this.products = this.products.filter((item) => item._id !== id);
    this.onRemove.emit(id)
  }
}
