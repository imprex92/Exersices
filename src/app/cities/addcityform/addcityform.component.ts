import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
	selector: 'app-addcityform',
	templateUrl: './addcityform.component.html',
	styleUrls: ['./addcityform.component.css']
})
export class AddcityformComponent implements OnInit {
	inputValue: string = '';
	onKeyUp(event) {
		this.inputValue = event.target.value;
		// console.log('Blir det rätt? ' + this.inputValue);
	}
	saveCity() {
		console.log('About to send an event with data: ' + this.inputValue);
		this.onSaveCity.emit(this.inputValue);
	}
	@Output() onSaveCity = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}


}
