import { Ingridient } from '../shared/ingridients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[] = [
    new Ingridient('Mandarini', 20),
    new Ingridient('Portokali', 30),
    new Ingridient('Yabalki', 40)
  ];

  constructor() { }

  ngOnInit() {
  }

}
