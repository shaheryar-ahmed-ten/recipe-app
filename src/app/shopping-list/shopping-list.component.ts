import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../shared/models/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"]
})

export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [];
    constructor(private shoppingListService: ShoppingListService) {
        // console.log("constructor called")
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => this.ingredients = ingredients
        )

    }

    ngOnInit(): void {
        // console.log("ngOnInit called");
        this.ingredients = this.shoppingListService.getIngredients();
    }

}