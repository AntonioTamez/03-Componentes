import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
 
  publisher: string = ''; 

  constructor(private dataservice: DataService) { }

  ngOnInit() {

    this.superHeroes = this.dataservice.getHeroes();
  }

  segmentChanged(event){

    //console.log(event.detail.value);

    if(event.detail.value === 'todos'){
      return this.publisher = '';
    }

    this.publisher = event.detail.value;

  }

}
