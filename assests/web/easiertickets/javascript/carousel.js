var i = 0;
var image = [];

image[0] = "url('images/concert1.jpg')";
image[1] = "url('images/concert2.jpg')";
image[2] = "url('images/concert3.jpg')";

    function runvid(){
        document.getElementById('carosel').style.background = image[i];
        img();
        if(i <= image.length - 1){
            i++;
        }else if(i == image.length){
            i = 0;
        }
        setTimeout("runvid()", 5000);
    }
    function img(){
        document.getElementById('carosel').style.backgroundSize = "cover";
        document.getElementById('carosel').style.backgroundPosition = "center";
    }
    window.onload = runvid();