var mainimg3d_set = "Yes";
var mainimg_web_set = "Yes";
//3D Section
function change_3d_1(){
    document.getElementById('largework-3d').style.background = img_3d_1;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
    mainimg1 = img1;
    mainimg1_set = "Yes";
    largeworklink_3d = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-3d').innerText = "Neon Corner";
    maintext_3d = "Neon Corner";
}
function change_3d_2(){
    document.getElementById('largework-3d').style.background = img_3d_2;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
    mainimg1 = img2;
    mainimg1_set = "No";
    largeworklink_3d = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-3d').innerText = "Dubuque Soccer Club";
    maintext_3d = "Dubuque Soccer Club";
}
function change_3d_3(){
    document.getElementById('largework-3d').style.background = img_3d_3;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
    mainimg = img3;
    mainimg1 = "No";
    largeworklink_3d = "https://www.matthewstevens.me/photography/";
    document.getElementById('largeworktitle-3d').innerText = "Merge Performance";
    maintext_3d = "Merge Performance";
}
function change_3d_1_hover(){
    document.getElementById('largework-3d').style.background = img_3d_1;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largeworktitle-3d').innerText = "Neon Corner";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
}
function change_3d_2_hover(){
    document.getElementById('largework-3d').style.background = img_3d_2;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-3d').innerText = "Dubuque Soccer Club";
    document.getElementById('largework-3d').style.width = "90%";
}
function change_3d_3_hover(){
    document.getElementById('largework-3d').style.background = img_3d_3;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-3d').innerText = "Merge Performance";
    document.getElementById('largework-3d').style.width = "90%";
}
function changeout_3d(){
    if(mainimg_3d == "Yes"){
    document.getElementById('largework-3d').style.background = mainimg_3d;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-3d').innerText = maintext_3d;
    document.getElementById('largework-3d').style.width = "90%";
    }else{
        document.getElementById('largework-3d').style.background = mainimg_3d;
        document.getElementById('largework-3d').style.backgroundSize = "cover";
        document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
        document.getElementById('largeworktitle-3d').innerText = maintext_3d;
        document.getElementById('largework-3d').style.width = "90%";
    }
}

//Web Design
function change_web_1(){
    document.getElementById('largework-web').style.background = img_2eb_1;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
    mainimg_web = img_web_1;
    mainimg_web_set = "Yes";
    largeworklink_web = "https://www.matthewstevens.me/web/";
    document.getElementById('largeworktitle-web').innerText = "Inspiration Stables";
    maintext_web = "Inspiration Stables";
}
function change_web_2(){
    document.getElementById('largework-web').style.background = img2;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
    mainimg1 = img2;
    mainimg1_set = "No";
    largeworklink = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-web').innerText = "Easier Games";
    maintext_web = "Easier Games";
}
function change_web_3(){
    document.getElementById('largework-web').style.background = img3;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
    mainimg = img3;
    mainimg1 = "No";
    largeworklink = "https://www.matthewstevens.me/photography/";
    document.getElementById('largeworktitle-web').innerText = "Merge Performance";
    maintext_web = "Merge Performance";
}
function change_web_1_hover(){
    document.getElementById('largework-web').style.background = img1;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largeworktitle-web').innerText = "Neon Corner";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
}
function change_web_2_hover(){
    document.getElementById('largework-web').style.background = img2;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-web').innerText = "Dubuque Soccer Club";
    document.getElementById('largework-web').style.width = "90%";
}
function change_web_3_hover(){
    document.getElementById('largework-web').style.background = img3;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-web').innerText = "Merge Performance";
    document.getElementById('largework-web').style.width = "90%";
}
function changeout_web(){
    if(mainimg1 == "Yes"){
    document.getElementById('largework-web').style.background = mainimg1;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-web').innerText = maintext_3d;
    document.getElementById('largework-web').style.width = "90%";
    }else{
        document.getElementById('largework-web').style.background = mainimg1;
        document.getElementById('largework-web').style.backgroundSize = "cover";
        document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
        document.getElementById('largeworktitle-web').innerText = maintext_3d;
        document.getElementById('largework-web').style.width = "90%";
    }
}

//Photography