import { Component,OnInit  } from '@angular/core';
import { ServicesService } from '../services.service';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {  NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  
  items:null
  // items: Observable<any>;
  // API_URL:any;
  API_URL: SafeResourceUrl;
  menu_items : String[];

  
  constructor(private ServicesService: ServicesService,private sanitizer: DomSanitizer,private navCntrl: NavController ) {}
 
  ngOnInit(){

  this.API_URL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0kmYSfQEIH8");
  
    // console.log('APP INITALIZED')

    /*this.items = [
      "link 1",
      "link 2",
      "link 3","link 4","link 5","link 6","link 7","link 8","link 9","link 10"
    ];*/

    /*this.ServicesService.getLinks().subscribe(result => {
      this.items= result['urls'];
    });*/

    this.menu_items =[
      'FITNESS INSPIRATION','POSITIVE LIVING','MENTAL HEALTH','DEPRESSION HEALING','CAREER MOTIVATION','GOAL MOTIVATION','ANXIETY CONTROL'
    ]
}

itemSelected(menu_item){

  // console.log(menu_item)

  let navigationExtras: NavigationExtras = {
    queryParams: {
      Menu_item_name: menu_item
    }
};
  this.navCntrl.navigateForward(['item-details'],navigationExtras);

}


}

