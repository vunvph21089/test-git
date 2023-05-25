import { Component } from '@angular/core';
import { IProduct } from './interface/producst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  myName: string = 'Derek';
  myAge: number = 30;
  myStatus: boolean = true;
  myInfo: { name: string, age: number } = {
    name: "Derek",
    age: 30

  };
  showInfo (){
  }
//   products: IProduct[] = [
//     { _id: 1, name: "Sản phẩm ", price: 1000, img: "https://picsum.photos/200/200" },
//     { _id: 2, name: "Sản phẩm B", price: 2000, img: "https://picsum.photos/200/200" },
//     { _id: 3, name: "Sản phẩm C", price: 3000, img: "https://picsum.photos/200/200" },
// ]
// onHandleRemove(id: any) {
//   this.products = this.products.filter((item) => item._id !== id);
//}
}

