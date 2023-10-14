import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CoffeeType } from './models/coffee-type.model';
import { AddOn } from './models/add-on.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  coffee: CoffeeType[] = [];
  selectedCoffeeType: CoffeeType | undefined;
  availableAddOns: AddOn[] = [];
  selectedAddOns: CoffeeType | undefined;
  price: number = 0;
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.apiService.getCoffee().subscribe((res: any) => {
      this.coffee = res;
      console.log("coffee", this.coffee)
    })

    this.apiService.getAddon().subscribe((res: any) => {
      this.availableAddOns = res;
      console.log("availableAddOns", this.availableAddOns)
    })
  }

  onCoffeeTypeSelected(coffeeType: CoffeeType) {
    this.selectedCoffeeType = coffeeType;
  }

  onAddOnSelected(addOn: AddOn) {
    this.selectedAddOns  = addOn;
  }

  calculate() {
    const order = {
      coffeeId: this.selectedCoffeeType?.id ,
      addons: [this.selectedAddOns?.id]
    };

    this.apiService.calTotalPrice(order).subscribe((res: any) => {
      this.price = res.total;
    })
  }
}
