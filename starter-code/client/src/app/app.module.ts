import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { FoodService } from './food.service';
import { DetailsComponent } from './details/details.component';
import { IngredientService } from './ingredient.service';

@NgModule({
  declarations: [
    AppComponent,
    FoodDisplayComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [FoodService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
