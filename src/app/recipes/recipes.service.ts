import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            "Biryani",
            "This is test biryani recipe",
            "https://i.pinimg.com/736x/98/e1/5b/98e15b76983bdef58f3c507515cd1969.jpg",
            [
                new Ingredient('Meat', 1),
                new Ingredient('french Fries', 20)
            ]
        ),
        new Recipe("Nihari", "This is test biryani recipe", "https://i.pinimg.com/736x/98/e1/5b/98e15b76983bdef58f3c507515cd1969.jpg", [
            new Ingredient('Mirch', 1),
            new Ingredient('Masala', 2)
        ]),
    ];

    selectedRecipe = new EventEmitter<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}