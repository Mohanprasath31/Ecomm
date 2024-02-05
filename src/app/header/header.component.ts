import { Component } from '@angular/core';
import { faBars,faXmark,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public cartitems:number=0;
  menuvar:boolean =false;
  close=faXmark;
  bar=faBars;
  cart=faCartShopping;
constructor(private api:ApiService){}
ngOnInit():void{
  this.api.products().subscribe(res=>{
    this.cartitems=res.length;
  })
}
toggleNav() {
  this.menuvar = !this.menuvar;
}
get currentIcon() {
  return this.menuvar ? this.close : this.bar;
}
}
