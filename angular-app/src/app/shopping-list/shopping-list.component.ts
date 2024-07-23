import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {

  message = "hello world!"
 
@Output() eventMessage = new EventEmitter()

sendMessage() {
  this.eventMessage.emit(this.message)
}
  

}
