import { Injectable } from '@angular/core';
import { MotorcyclesComponent } from './motorcycles.component';

@Injectable({
  providedIn: 'root'
})
export class McService {
  id: number;
  brand: string;
  model:string;
  name:string;
  price: number;
  fav: boolean;
  Motorcycles: any[];

 selectedValue: string;

  motorcycles = [
    {id: 1, brand:'Ducati', model: 'super sport', name:'Ducati SuperSport 950', price: 13495,fav:false},
    {id: 2, brand:'BMW', model: 'super sport', name:'BMW S1000rr', price: 16999,fav:false},
    {id: 3,brand:'Kawasaki', model: 'sport bike', name:'Kawasaki Zx6r', price: 9999,fav:false},
    {id: 4,brand:'Honda', model: 'sport bike', name:'CBR600RR', price: 11799,fav:false},
    {id: 5,brand:'Honda', model: 'naked bike', name:'CB650R', price: 9699,fav:false},
    {id: 6,brand:'Kawasaki', model: 'naked bike', name:'Z400', price: 4999,fav:false}
  ]


getMotorcycles(){
  return this.motorcycles
}



filter(model) {
  return this.motorcycles.filter(m=>m.model === model)
}

updateFav(name) {
  this.motorcycles.forEach(m => {
    if(m.name === name){
      m.fav = !m.fav
    }

  });
}
}


