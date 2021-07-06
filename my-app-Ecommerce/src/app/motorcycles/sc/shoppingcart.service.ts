import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  mcList = new Subject()
  temp=[]

  add(motorcycle) {
    this.temp.push(motorcycle)
    this.mcList.next(this.temp)
  }

  getMcList(){
    return this.mcList
  }

}
