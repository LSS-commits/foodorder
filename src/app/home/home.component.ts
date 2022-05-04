import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // add food property to home component
  foods:string[]= [];
  // private fs = variable created to inject food service in home component
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    // getAll method created in food.service.ts
    this.foods = this.fs.getAll();
  }

}
