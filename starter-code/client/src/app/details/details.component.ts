import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService, Dish } from '../food.service';
import { Ingredient, IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dishId : string;
  dish : Dish;
  ingredients: Ingredient[] = [];
  value : string;


  constructor(
    private reqTruc : ActivatedRoute,
    public apiTruc : FoodService, 
    public apiIng : IngredientService,
    private resTruc : Router
  ) { }

  ngOnInit() {
    this.reqTruc.paramMap
    .subscribe((myParams)=>{
     this.dishId=myParams.get("blahId");

     this.fetchPhoneData();
    });

    this.apiIng.getList()
    .then((result : Ingredient[])=>{
      this.ingredients = result
      console.log(result)
    })
    .catch((err)=>{
      console.log("ingredients list error")
      console.log(err)
    })
  }
  fetchPhoneData(){
    // component connect to the service 
    this.apiTruc.getDetails(this.dishId)
    .then((result: Dish)=>{
     this.dish=result
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}
