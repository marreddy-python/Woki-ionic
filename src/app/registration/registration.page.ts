import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {  NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  items:any
  
  constructor(private ServicesService: ServicesService,private navCntrl: NavController) { }

  ngOnInit() {
  }


  register(form) {

    console.log(form.value["name"])
    console.log(form.value["password"])
    console.log(form.value["confirm"])

    if (form.value["password"] == form.value["confirm"]){

      console.log('both matched')
      this.ServicesService.userRegistration(form.value).subscribe(result => {
      this.items = result['response']
      console.log(this.items)

      if(result['status'] == 200){
        this.navCntrl.navigateForward(['login']);
      }
    

      });
    }
    
  }


}
