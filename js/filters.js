var canvasOrig = document.getElementById("img-original");
var canvasMod = document.getElementById("img-modified");
var imgOrig = null;
var imgMod = null;
var fileinput = null;

// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
//   }

function drawOnCanvas(img, init){ 
    img.drawTo(canvasMod);
    if(init == true){
        img.drawTo(canvasOrig);
    }
}

function uploadImg(){
    fileinput = document.getElementById("uploader");
    imgOrig = new SimpleImage(fileinput);
    imgMod = new SimpleImage(fileinput);
    drawOnCanvas(imgOrig, true);
}

function resetImg() {
    imgMod = new SimpleImage(fileinput);
    drawOnCanvas(imgOrig, false);
}

function downloadImg() {
    let download = document.getElementById("downloader");
    let img = canvasMod.toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", img);
}

function redFilter(){
    for(let pix of imgMod.values()){
      let avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      if(avg < 128){
        pix.setRed(avg*2);
        pix.setGreen(0);
        pix.setBlue(0);
      }
      else{
        pix.setRed(255);
        pix.setGreen(avg*2 - 255);
        pix.setBlue(avg*2 - 255);
      }
    }
    drawOnCanvas(imgMod, false);
  }
  
  function greenFilter(){
    for(let pix of imgMod.values()){
      let avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      if(avg < 128){
        pix.setRed(0);
        pix.setGreen(avg*2);
        pix.setBlue(0);
      }
      else{
        pix.setRed(avg*2 - 255);
        pix.setGreen(255);
        pix.setBlue(avg*2 - 255);
      }
    }
    drawOnCanvas(imgMod, false);  
  }
  
  function blueFilter(){
    for(let pix of imgMod.values()){
      let avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      if(avg < 128){
        pix.setRed(0);
        pix.setGreen(0);
        pix.setBlue(avg*2);
      }
      else{
        pix.setRed(avg*2 - 255);
        pix.setGreen(avg*2 - 255);
        pix.setBlue(255);
      }
    }
    drawOnCanvas(imgMod, false);  
  }
  
  function grayscaleFilter(){
    for(let pix of imgMod.values()){
      let avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);
    }
    drawOnCanvas(imgMod, false);
  }
  
  function brighterFilter(){
    for(let pix of imgMod.values()){
      pix.setRed(pix.getRed()*1.5);
      pix.setGreen(pix.getGreen()*1.5);
      pix.setBlue(pix.getBlue()*1.5);
    }
    drawOnCanvas(imgMod, false);
  }
  
  function dimmerFilter(){
    for(let pix of imgMod.values()){
      pix.setRed(pix.getRed()*0.5);
      pix.setGreen(pix.getGreen()*0.5);
      pix.setBlue(pix.getBlue()*0.5);
    }
    drawOnCanvas(imgMod, false);
  }

  function rainbowFilter(){
    let y_div = Math.floor(imgMod.getHeight()/7);
    for(let pix of imgMod.values()){
      let pix_div = pix.getY() / y_div;
      let avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      if(pix_div < 1){
        //Red
        if(avg < 128){
          pix.setRed(2*avg);
          pix.setGreen(0);
          pix.setBlue(0);
        }
        else{
          pix.setRed(255);
          pix.setGreen(2*avg - 255);
          pix.setBlue(2*avg - 255);
        }
      }
      else if(pix_div < 2){
        //Orange
        if(avg < 128){
          pix.setRed(2*avg);
          pix.setGreen(0.8*avg);
          pix.setBlue(0);
        }
        else{
          pix.setRed(255);
          pix.setGreen(1.2*avg - 51);
          pix.setBlue(2*avg - 255);
        }
      }
      else if(pix_div < 3){
        //Yellow
        if(avg < 128){
          pix.setRed(2*avg);
          pix.setGreen(2*avg);
          pix.setBlue(0);
        }
        else{
          pix.setRed(255);
          pix.setGreen(255);
          pix.setBlue(2*avg - 255);
        }
      }
      else if(pix_div < 4){
        //Green
        if(avg < 128){
          pix.setRed(0);
          pix.setGreen(2*avg);
          pix.setBlue(0);
        }
        else{
          pix.setRed(2*avg - 255);
          pix.setGreen(255);
          pix.setBlue(2*avg - 255);
        }
      }
      else if(pix_div < 5){
        //Blue
        if(avg < 128){
          pix.setRed(0);
          pix.setGreen(0);
          pix.setBlue(2*avg);
        }
        else{
          pix.setRed(2*avg - 255);
          pix.setGreen(2*avg - 255);
          pix.setBlue(255);
        }
      }
      else if(pix_div < 6){
        //indigo
        if(avg < 128){
          pix.setRed(0.8*avg);
          pix.setGreen(0);
          pix.setBlue(2*avg);
        }
        else{
          pix.setRed(1.2*avg - 51);
          pix.setGreen(2*avg - 255);
          pix.setBlue(255);
        }
      }
      else{
        //Violet
        if(avg < 128){
          pix.setRed(1.6*avg);
          pix.setGreen(0);
          pix.setBlue(1.6*avg);
        }
        else{
          pix.setRed(0.4*avg + 153);
          pix.setGreen(2*avg - 255);
          pix.setBlue(0.4*avg + 153);
        }
      }
    }
    drawOnCanvas(imgMod, false);
  }

  function ruskiFilter(){
    let y_div = Math.floor(imgMod.getHeight()/3);
    for(let pix of imgMod.values()){
      let pix_div = pix.getY() / y_div;
      let avg = (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
      if(pix_div < 1){
        //White
        if(avg*3 < 255){
          pix.setRed(Math.min(2.5*pix.getRed(), 255));
          pix.setGreen(Math.min(2.5*pix.getGreen(), 255));
          pix.setBlue(Math.min(2.5*pix.getBlue(), 255)); 
        }
        else{
          pix.setRed(Math.min(1.2*pix.getRed(), 255));
          pix.setGreen(Math.min(1.2*pix.getGreen(), 255));
          pix.setBlue(Math.min(1.2*pix.getBlue(), 255)); 
        }
      }
      else if(pix_div < 2){
        //Blue
        if(avg < 128){
          pix.setRed(0);
          pix.setGreen(0);
          pix.setBlue(2*avg);
        }
        else{
          pix.setRed(2*avg - 255);
          pix.setGreen(2*avg - 255);
          pix.setBlue(255);
        }
      }
      else{
        if(avg < 128){
          pix.setRed(2*avg);
          pix.setGreen(0);
          pix.setBlue(0);
        }
        else{
          pix.setRed(255);
          pix.setGreen(2*avg - 255);
          pix.setBlue(2*avg - 255);
        }
      }
    }
    drawOnCanvas(imgMod, false); 
  }



// function scaleToFit(img, canvas, ctx){
//     // get the scale
//     let scale = Math.min(canvas.width / img.width, canvas.height / img.height);
//     // get the top left position of the image
//     let x = (canvas.width / 2) - (img.width / 2) * scale;
//     let y = (canvas.height / 2) - (img.height / 2) * scale;
//     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
// }


