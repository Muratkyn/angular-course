import { Component, ViewChild } from '@angular/core';
import { from, of } from 'rxjs';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
  @ViewChild(ShoppingListComponent) childComp: ShoppingListComponent 

  newMessage:string;
  msg: string = 'hi there';
  isVisible = false
  parentMessage = "Message From parent"
  nativeElement: any;
  msgColor = 'black'
  helloAng:string;
  subtitle: string;
 
  onEnter(userName) {
    this.helloAng = userName
  }

  msgFn() {
    this.msgColor =  'red'
    this.isVisible= !this.isVisible
    console.log(this.msg)
  }

  getMessage($event:string) {

  this.newMessage = $event
  }
  
  constructor () {
    
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved!')
      }, 4000)
    })
    
    const message$ = from(promise1)
    
    message$.subscribe((message) => {
      console.log('message:', message)
    })
    
    const numbers$ = of([1,2,3,4,5])
    
    numbers$.subscribe((data) => {
      console.log(data, '...')
    })
    
  }
  
}
