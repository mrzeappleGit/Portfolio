var mainimg1 = "Yes";

function change1(){
    document.getElementById('largework').style.background = img1;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
    mainimg = img1;
    mainimg1 = "Yes";
    largeworklink = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle').innerText = "3D Design";
    maintext = "3D Design";
}
function change2(){
    document.getElementById('largework').style.background = img2;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
    mainimg = img2;
    mainimg1 = "No";
    largeworklink = "https://www.matthewstevens.me/web-design/";
    document.getElementById('largeworktitle').innerText = "Web Design";
    maintext = "Web Design";
}
function change3(){
    document.getElementById('largework').style.background = img3;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
    mainimg = img3;
    mainimg1 = "No";
    largeworklink = "https://www.matthewstevens.me/photography/";
    document.getElementById('largeworktitle').innerText = "Photography";
    maintext = "Photography";
}
function change1hover(){
    document.getElementById('largework').style.background = img1;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largeworktitle').innerText = "3D Design";
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework').style.width = "90%";
}
function change2hover(){
    document.getElementById('largework').style.background = img2;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle').innerText = "Web Design";
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
}
function change3hover(){
    document.getElementById('largework').style.background = img3;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle').innerText = "Photography";
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
}
function changeout(){
    if(mainimg1 == "Yes"){
    document.getElementById('largework').style.background = mainimg;
    document.getElementById('largework').style.backgroundSize = "cover";
    document.getElementById('largework').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle').innerText = maintext;
    document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
    }else{
        document.getElementById('largework').style.background = mainimg;
        document.getElementById('largework').style.backgroundSize = "cover";
        document.getElementById('largework').style.backgroundRepeat = "no-repeat";
        document.getElementById('largeworktitle').innerText = maintext;
        document.getElementById('largework').style.borderRadius = "36px";
    document.getElementById('largework').style.width = "90%";
    }
}