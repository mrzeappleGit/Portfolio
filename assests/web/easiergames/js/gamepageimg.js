var mainimg1 = "Yes";


function change1(){
    document.getElementById('gp-mainimg').style.background = img1;
    document.getElementById('gp-mainimg').style.backgroundSize = "contain";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
    mainimg = img1;
    mainimg1 = "Yes";
}
function change2(){
    document.getElementById('gp-mainimg').style.background = img2;
    document.getElementById('gp-mainimg').style.backgroundSize = "100%";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
    mainimg = img2;
    mainimg1 = "No";
}
function change3(){
    document.getElementById('gp-mainimg').style.background = img3;
    document.getElementById('gp-mainimg').style.backgroundSize = "100%";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
    mainimg = img3;
    mainimg1 = "No";
}
function change4(){
    document.getElementById('gp-mainimg').style.background = img4;
    document.getElementById('gp-mainimg').style.backgroundSize = "100%";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
    mainimg = img4;
    mainimg1 = "No";
}
function change1hover(){
    document.getElementById('gp-mainimg').style.background = img1;
    document.getElementById('gp-mainimg').style.backgroundSize = "contain";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
}
function change2hover(){
    document.getElementById('gp-mainimg').style.background = img2;
    document.getElementById('gp-mainimg').style.backgroundSize = "100%";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
}
function change3hover(){
    document.getElementById('gp-mainimg').style.background = img3;
    document.getElementById('gp-mainimg').style.backgroundSize = "100%";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
}
function change4hover(){
    document.getElementById('gp-mainimg').style.background = img4;
    document.getElementById('gp-mainimg').style.backgroundSize = "100%";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
}
function changeout(){
    if(mainimg1 == "Yes"){
    document.getElementById('gp-mainimg').style.background = mainimg;
    document.getElementById('gp-mainimg').style.backgroundSize = "contain";
    document.getElementById('gp-mainimg').style.backgroundPosition = "center";
    document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
    }else{
        document.getElementById('gp-mainimg').style.background = mainimg;
        document.getElementById('gp-mainimg').style.backgroundSize = "100%";
        document.getElementById('gp-mainimg').style.backgroundPosition = "center";
        document.getElementById('gp-mainimg').style.backgroundRepeat = "no-repeat";
    }
}