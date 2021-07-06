import { Component, OnInit } from '@angular/core';
import { McService } from './mc.service';
import { ShoppingCartService } from './sc/shoppingcart.service';


@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.component.html',
  styleUrls: ['./motorcycles.component.css']
})
export class MotorcyclesComponent {

  motorcycles = [];
  model = '';
  searchModel = '';

  constructor(private McService:McService, private sService:ShoppingCartService){

  }





ngOnInit() {
  this.motorcycles = this.McService.getMotorcycles()
}

onModelFilter() {
  this.searchModel = this.model
}

onModelClear() {
  this.searchModel = ''
  this.model = ''
}

filterItems(m){
  console.log(m.target.value)
  this.motorcycles = this.McService.filter(m.target.value)
}
setFavorite(m){
  this.McService.updateFav(m.name)
}

addToSc(m){
  this.sService.add(m)
}

}
