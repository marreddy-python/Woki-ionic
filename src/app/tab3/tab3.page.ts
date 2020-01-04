import { Component,OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private navCntrl: NavController,public alertController: AlertController ) {}
  username : String;
  gmail:String;
  dob:String;
  password:String;


  ngOnInit(){
  this.username = "Marreddy Thumma";
  this.gmail = "marreddy@becknf.com";
  this.dob= "09/11/1997";
  this.password= "password";
  }

  logout(){
    this.navCntrl.navigateBack(['login']);
  }

  deleteMyAccount(){
    console.log('delete account clicked')
  }
  
  
  async presentAlert() {
    console.log('Alert button clicked')
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Are you sure want to change your settings',
      buttons: ['Ok','Cancel']
    });

    await alert.present();
  }


}
