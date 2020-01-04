import { Component, AfterViewInit,ViewChild } from '@angular/core';
import {Platform} from '@ionic/angular'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page  implements AfterViewInit{
 
  
  @ViewChild('imageCanvas',{static:false})canvas:any;
  canvasElement:any;

  selectedColor = '#FF6347';
  colors=['#FF6347','#FF4500','#FFD700','#FFD700'];
  lineWidth = 12

  pixels:null
  selectedSymbol : string = "M";


  drawing= false;

  constructor(private plt: Platform) {}
  

  symbolChanged(a){
    console.log(a.detail.value)
    this.selectedSymbol =  a.detail.value
    this.ngAfterViewInit()
  }


  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 400;
    let ctx=this.canvasElement.getContext('2d')
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgb(0, 0, 50)';
    ctx.font = 'bold 350px helvetica';
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 5
  
    var centerx = (this.canvasElement.width - ctx.measureText(this.selectedSymbol).width) / 2;
    var centery = this.canvasElement.height / 2;
    
    ctx.fillText(this.selectedSymbol, centerx, centery);

        
    this.pixels = ctx.getImageData(0, 0,  this.canvasElement.width,  this.canvasElement.height);
    
    // var letterpixels = getpixelamount(255, 0, 0);

  
  }



  handleStart(ev){
    this.drawing = true;
    ev.preventDefault();
    }


  endDrawing(ev){
    this.drawing=false;
    ev.preventDefault();
  }
  

  handleMove(ev){

    var canvasPosition = this.canvasElement.getBoundingClientRect();

    var p = this.pixels
    // console.log(ev)

    let ctx=this.canvasElement.getContext('2d');

  
    let currentX =ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY -canvasPosition.y;


    // console.log(currentX,currentY)
      
    

    if (this.drawing) {
        paint(currentX,currentY,p);
    }

  //  var saveX
  //  var saveY
    function paint(x,y,p){
      var colour = getpixelcolour(x, y,p);
     
      if (colour.a === 0) {
        console.log('YOU WENT OUT')
        
      }

      else{
        ctx.beginPath();
        // ctx.moveTo(saveX, saveY);
        /*ctx.lineTo(x, y);
        ctx.globalCompositeOperation = "source-atop"
        ctx.strokeStyle = '#003300';
        // ctx.fill();
        ctx.stroke();
        ctx.closePath();*/
        // saveX = x
        // saveY = y
        // ctx.save();
        
        ctx.fillStyle = "black"; 
        ctx.globalCompositeOperation = "source-atop"

        ctx.arc(x, y, 40, 70, 30, 1);
      
        ctx.fill();
        ctx.stroke();


      }
    
    }

   

    function getpixelcolour(x, y,p) {
     
        x = Math.round(x);
        y = Math.round(y);
      
        var index = ((y * (p.width * 4)) + (x * 4));

        return {
          r: p.data[index],
          g: p.data[index + 1],
          b: p.data[index + 2],
          a: p.data[index + 3],
        };
    }
    

    
  }
   
  


  

}
