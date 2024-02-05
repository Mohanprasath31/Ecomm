import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { product } from '../datatype';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  icon=faTrash;
  productList:any=[];
  public taxAmount:number=0;
  public Discount:number=0;
  public totalAmount:number=0;
  public finalAmount:number=0;
  public sendAmount:number=0;
  public addressform=false;
constructor(private api:ApiService,private route:Router){}
ngOnInit():void{ 
  this.api.products().subscribe(res=>{
    this.productList=res;
    this.totalAmount=this.api.totalamount();
    this.taxAmount=this.totalAmount/100*15;
    this.Discount=this.totalAmount/100*10;
this.finalAmount=this.totalAmount+this.taxAmount-this.Discount;
this.sendAmount=this.finalAmount;
this.api.sendfinalAmount(this.sendAmount);
  })
}
deleteitem(item:product){
  this.api.removecartItem(item);
}
emptycart(){
  this.api.removeAllcartItem();
}
cancel(){
  this.addressform=false;
}
checkOut(data:any){
  localStorage.setItem('ecomm',JSON.stringify(data.name));
  this.route.navigate(["/order-page"]);

}
}
