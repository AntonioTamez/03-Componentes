import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

data: any[] = Array(20);

@ViewChild(IonInfiniteScroll)  infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {

    console.log(event);



    setTimeout(() => {

      if( this.data.length > 50 ){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();
      //event.target.complete();
    }, 1000);

    // setTimeout(() => {
    //   if (this.data.length > 50) {
    //     event.target.complete();
    //     return;
    //   }
    //   const n = Math.floor(Math.random() * 20);
    //   for (let i = 0; i < n; i++) {
    //     this.data.push(this.data.length);
    //   }
    //   event.target.complete();
    // }, 500);
  }
}
