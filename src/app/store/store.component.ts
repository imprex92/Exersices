import { Component, OnInit } from '@angular/core';
import { ItemListService } from './itemList.service'
import { ProductList } from './product-list';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  greeting:string = 'Welcome to my new store!';
  cartSum:number = 0;
  showAddMessage: boolean = false;
  productList: ProductList[];
  
  constructor(public itemListService:ItemListService) { }


  ngOnInit() {
	  console.log('Up and running!')
	  this.productList = this.itemListService.getItems();
  }

	addToCart(){
		// window.alert('The product has bees added to your cart');
		this.cartSum += 1;
		this.showAddMessage = true;
	}




}
