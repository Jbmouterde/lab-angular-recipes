import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path : '', component : FoodDisplayComponent},
  { path : 'dish/:blahId', component : DetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }