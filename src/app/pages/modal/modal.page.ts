import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  nombre: string;
  pais: string;

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){

    const modal = await this.modal.create({
      component: ModalInfoPage, 
      componentProps: {
        nombre:'Antonio',
        pais:'Mexico'
      }
    });
    
    await modal.present();

    const resp = await modal.onDidDismiss();

   
 

    

    // const { data } = await modal.onDidDismiss();
    // const { role } = await modal.onDidDismiss();
    console.log(resp);
    console.log(resp.data.nombre);
    console.log(resp.data.pais);
    // console.log(data);
    // console.log(role); 
  }

}
