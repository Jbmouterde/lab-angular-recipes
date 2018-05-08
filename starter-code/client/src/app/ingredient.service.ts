import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class IngredientService {

  constructor(
    private ajaxTruc : HttpClient
  ) { }

  getList(){
    return this.ajaxTruc
    .get('http://localhost:3000/api/ingredients')
    .toPromise();
  }
}

export class Ingredient {
  _id : string; 
  image : string; 
  name : string; 
  description : string; 
}