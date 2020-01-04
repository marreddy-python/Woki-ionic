import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  response:any
  status:any
  constructor(private navCntrl: NavController,private ServicesService: ServicesService,) { }

  ngOnInit() {
  }

  login(form){
    console.log(form.value)
    const email = form.value["email"]
    const password = form.value["password"]

    /*this.ServicesService.userLogin(email,password).subscribe(result => {
      this.response = result['response']
      console.log(this.response)
      console.log(result['status'])
      this.status = result['status']

    if(this.status == 200){
      console.log('calling status')
      this.navCntrl.navigateForward(['tabs']);
    }
    else{
      this.navCntrl.navigateForward(['tabs']);
      console.log('Someting went wrong ')
    }
     
    });*/
    this.navCntrl.navigateForward(['tabs']);

   
  
   
  }

}
