import { Component } from '@angular/core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
icon=faCircleCheck;
public userdata:any;
public totalAmount:number=0;
public grandTotal:number=0;
 public username: any;
constructor(private api:ApiService,private route:Router){}
ngOnInit():void{
  setTimeout(()=>{
this.route.navigate([""]);
this.api.removeAllcartItem();
  },4000);
  this.totalAmount=this.api.totalamount();
  this.grandTotal=this.api.receivefinalamount();
  //getting data from localstorage
  let localdata=localStorage.getItem('ecomm');
  this.userdata =localdata;
  this.username = JSON.parse(this.userdata);
}

}
