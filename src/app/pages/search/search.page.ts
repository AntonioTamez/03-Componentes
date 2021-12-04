import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any;
  textoBuscar: string = ''; 
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getAlbums().subscribe( albumes => {
      this.albums = albumes;
    });
  }

  onSearchChange( event ){
    //console.log(event.detail.value);
    this.textoBuscar = event.detail.value;
  }

}
