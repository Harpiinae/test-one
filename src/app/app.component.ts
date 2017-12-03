import { Component } from '@angular/core';

export class Item {
    name: string;
    price: number;
    done: boolean;
    
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
        this.done = false;
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    items: Item[] = [
        { name: "Хлеб", price: 15, done: false },
        { name: "Сыр", price: 25, done: true },
        { name: "Гречка", price: 45, done: true },
        { name: "Колбаса", price: 65, done: false }
    ];
    
    addItem(name: string, price: number): void {
        if(name == null || price == null || name == undefined || price == undefined)
            return;
        this.items.push(new Item(name, price));
    }
}