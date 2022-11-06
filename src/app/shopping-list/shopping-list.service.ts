import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient.model";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("Tomatoes", 5),
    ];

    addIngredient(ingredient: Ingredient): void {
        console.log("addIngredient called");
        console.log("ingredient", ingredient)
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients(): any {
        return this.ingredients.slice();
    }
}