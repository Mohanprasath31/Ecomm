import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public amount:number=0;
public cartitemlist:any=[];
public productlist = new BehaviorSubject<any>([])
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  getproduct(){
    return this.http.get<product[]>("https://dummyjson.com/products");
  }
  getproductbyId(id:string){
    return this.http.get("https://dummyjson.com/products/"+id);

  }
  addtocart(data:product){
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    this.toastr.success('Successfully added to Cart');
  }
  products(){
    return this.productlist.asObservable();
  }
  removecartItem(data:product){
    this.cartitemlist.map((a:product,index:product)=>{
      if(data.id === a.id){
        this.cartitemlist.splice(index,1)
        this.toastr.warning('Successfully remove to Cart');
      }
    })
    this.productlist.next(this.cartitemlist)
  }
  totalamount(){
    let total=0;
    this.cartitemlist.map((a:any)=>{
      total+=a.price;
    
    })
    return total;
  }
  removeAllcartItem(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist);
  }
  //passing data from one component to another
  sendfinalAmount(data:number){
    this.amount=data;
  }
  receivefinalamount(){
    return this.amount;
  }
}
