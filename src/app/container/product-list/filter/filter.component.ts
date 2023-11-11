import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
@Input()
allCount:number = 0;

@Input()
inStockCount:number = 0;

@Input()
outOfStockCount:number = 0;

selectedFilter: string = 'all';

@Output()
selectedFilterChanged:EventEmitter<string> = new EventEmitter<string>();
onSelectedFilterChanged(){
  console.log(this.selectedFilter);
  this.selectedFilterChanged.emit(this.selectedFilter);
}
}
