import { Injectable } from '@angular/core';
import { ProductList } from './product-list'
@Injectable({
  providedIn: 'root'
})
export class ItemListService {

getItems(): ProductList[]{
  return this.productList;
}

  productList: ProductList[] = [
	{
	  name: 'Racoon',
	  price: 150,
	  description: 'Nice and warm animal, loves to cuddle and of course food! Eats everything!',
	  danger: 'moderate'
	},
	{
	  name: 'Fox',
	  price: 200,
	  description: 'Shy little ball of fur. But once he learns he can trust you, his going to be your best friend! As long as you give it food.',
	  danger: 'low-moderate'
	},
	{
	  name: 'Cobra',
	  price: 60,
	  description: 'Evil, long, slimy animal. Loves to eat rabitts, monkeis or even... you in your sleep.',
	  danger: 'high'
	},
	{
	  name: 'Rat',
	  price: 10,
	  description: 'small furry thing, likes to shit everywhere, Snakes worst enemy.',
	  danger: 'low'
	},
	{
	  name: 'Dog',
	  price: 150,
	  description: 'This is your best friend! He will wake you upp every day at 5AM by licking on your face and always love you',
	  danger: 'very low'
	},
	{
	  name: 'Human baby',
	  price: 500,
	  description: 'Annoying thing, comes with a 18 years of missfortune and misery. Will take your wallet. No returns!',
	  danger: 'high'
	},
	{
	  name: 'Human girlfriend',
	  price: 550,
	  description: "Your own personal demon! Will indeed take your wallet, everything that's yours is now... also hers! Her money is hers, your money is also hers. Will remember exactly what you did that second feb 23e at 8:23:22PM or even how you smelled! Will get angry without warning, without any apparent reason. Buy with caution! You've been warned.",
	  danger: 'Extremely'
	}
  ]

constructor() { }

}
