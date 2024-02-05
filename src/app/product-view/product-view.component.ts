import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { product } from '../datatype';
import { faCartShopping,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  cart=faCartShopping;
  rcart=faTimesCircle;
  datas!:any|product[]
constructor(private api:ApiService){}
ngOnInit():void{
this.displayproduct();
localStorage.removeItem('ecomm')
}
displayproduct(){
  this.api.getproduct().subscribe(res=>{
    this.datas=res;
    console.log(res);
  })
}
addtocart(item:product){
  this.api.addtocart(item);
}
removeItem(item:product){
this.api.removecartItem(item);
}
}
