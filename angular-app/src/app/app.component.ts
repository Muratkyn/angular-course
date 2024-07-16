import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
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
