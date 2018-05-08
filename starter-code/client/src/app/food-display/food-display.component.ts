import { Component, OnInit } from '@angular/core';
import { FoodService, Dish } from '../food.service';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {

dish: Dish[] = []

  constructor(
    public apiTruc : FoodService
  ) { }

  ngOnInit() {
    this.apiTruc.getList()
    .then((result : Dish[])=>{
      this.dish = result
      console.log(result)
    })
    .catch((err)=>{
      console.log("Dish list error")
      console.log(err)
    })
  }

}
