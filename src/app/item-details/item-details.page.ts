import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})

export class ItemDetailsPage implements OnInit {
  items:[]
  links : string[] = [];
  trustedVideoUrl: SafeResourceUrl;
  Selected_Name: null;
  

  constructor(private activatedRoute: ActivatedRoute,private ServicesService: ServicesService,private sanitizer: DomSanitizer,) { 
  this.activatedRoute.queryParams.subscribe(params => {
    this.Selected_Name = params["Menu_item_name"];

    console.log( this.Selected_Name )
  
});
  
}


  ngOnInit() {
    this.ServicesService.getDetails(this.Selected_Name).subscribe(result => {
      this.items= result['urls'];
      console.log(this.items)
      console.log((this.items).length);

      for(let i=0;i<((this.items).length);i++){
        this.links.push('https://www.youtube.com/embed/'+this.items[i])
      }
    
      console.log(this.links)
     

     
      this.trustedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0kmYSfQEIH8");
  
    })
  }

  videoURL(link) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.links[link]);
  }

}
