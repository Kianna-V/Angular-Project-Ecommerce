import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shoppingcart.service';

@Component({
  selector: 'app-sc',
  templateUrl: './sc.component.html',
  styleUrls: ['./sc.component.css']
})
export class ScComponent {
  mcList = []
  totalPrice = 0

  constructor(private sService: ShoppingCartService){}

  ngOnInit(){
    this.sService.getMcList().subscribe((data:[])=>{
      this.mcList = data
      let total = 0
      this.mcList.forEach(j=>{
        total+=j.price
      })
      this.totalPrice = total

    })
  }

}
