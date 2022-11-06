import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<any>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onSubmit(name: any, amount: any): void {
    console.log("onSubmit called")
    console.log("name: " + name, "amount: " + amount);
    this.shoppingListService.addIngredient({ name: name.value, amount: amount.value });
  }

  onNewIngredient(ingredient: Ingredient): void {
  }

}
