
import { Pipe, PipeTransform } from '@angular/core';

import { McService } from '../motorcycles/mc.service';
import { MotorcyclesComponent } from '../motorcycles/motorcycles.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  Motorcycles: any[];
  transform(value: Array<string>, args: McService[]): McService {
    const sortField = McService[0]

    value.sort((a:any, b:any ) => {
      if(a[sortField] < b[sortField]){
        return -1
      } else if (a[sortField] > b[sortField]) {
        return 1
      } else{
        return 0
      }


    })




    return null;
  }

}
