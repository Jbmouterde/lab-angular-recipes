import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FoodService {

  constructor(
    private ajaxTruc : HttpClient
  ) { }

  getList(){
    return this.ajaxTruc
    .get('http://localhost:3000/api/dishes')
    .toPromise();
  }
  getDetails(dishId){
    return this.ajaxTruc
    .get(`http://localhost:3000/api/dishes/${dishId}`)
    .toPromise();
  }

}

export class Dish {
  _id : string; 
  image : string; 
  name : string; 
  description : string;
  ingredients : Array<{}>
}