import { Pipe, PipeTransform } from '@angular/core';
import { McService } from '../motorcycles/mc.service';
import { MotorcyclesComponent } from '../motorcycles/motorcycles.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  Mcservice:any[];


  transform(value: McService[],filterString:string, model:string  ): McService[] {
    const resultArray =[];
    if(value.length===0|| filterString==='' || model === '') {
      return value;
    }

    for(const item of value) {
      if (item[model].includes(filterString) ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }


}
