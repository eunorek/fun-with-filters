const canvasDefault= document.getElementById("img-original");
const ctxDefault = myCanvas.getContext("2d");
const canvasModified= document.getElementById("img-modified");
const ctxModified = myCanvas.getContext("2d");
const imgOriginal = new Image();
imgOriginal.src = "img/default.png";
imgOriginal.onload = () => {
  ctxDefalut.drawImage(imgOriginal, 0, 0);
  ctxModified.drawImage(imgOriginal, 0, 0);
}
