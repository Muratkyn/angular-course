import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  getMessage() {
    return "This is a message from child component"
  }

  @Input() msgParent: string;

}
