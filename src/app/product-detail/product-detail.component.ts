import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../datatype';
import { faCartShopping,faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  showadd:boolean=true;
  showremove:boolean=false;
  cart=faCartShopping;
  rcart=faTimesCircle;
constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
productdata:any|product;
ngOnInit():void{
  let id = this.activatedroute.snapshot.paramMap.get('id');
  id && this.api.getproductbyId(id).subscribe((res)=>{
    this.productdata=res;
  })
}
addtocart(productdata:product){
this.showadd=false;
this.showremove=true;
this.api.addtocart(productdata);

}
removefromcart(productdata:product){
this.showremove =false;
this.showadd=true;
this.api.removecartItem(productdata);
}
}
