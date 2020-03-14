var mainimg3d_set = "Yes";
var mainimg_web_set = "Yes";
var mainimg_photo_set = "Yes";
//3D Section
function change_3d_1(){
    document.getElementById('largework-3d').style.background = img_3d_1;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
    mainimg_3d = img_3d_1;
    mainimg3d_set = "Yes";
    largeworklink_3d = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-3d').innerText = "Neon Corner";
    maintext_3d = "Neon Corner";
}
function change_3d_2(){
    document.getElementById('largework-3d').style.background = img_3d_2;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
    mainimg_3d = img_3d_2;
    mainimg3d_set = "No";
    largeworklink_3d = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-3d').innerText = "Dubuque Soccer Club";
    maintext_3d = "Dubuque Soccer Club";
}
function change_3d_3(){
    document.getElementById('largework-3d').style.background = img_3d_3;
    document.getElementById('largework-3d').style.backgroundSize = "cover";
    document.getElementById('largework-3d').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-3d').style.width = "90%";
    mainimg_3d = img_3d_3;
    mainimg3d_set = "No";
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
    document.getElementById('largework-web').style.background = img_web_1;
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
    document.getElementById('largework-web').style.background = img_web_2;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
    mainimg_web_1 = img_web_2;
    mainimg_web_set = "No";
    largeworklink = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-web').innerText = "Easier Games";
    maintext_web = "Easier Games";
}
function change_web_3(){
    document.getElementById('largework-web').style.background = img_web_3;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
    mainimg_web = img_web_3;
    mainimg_web_set = "No";
    largeworklink = "https://www.matthewstevens.me/photography/";
    document.getElementById('largeworktitle-web').innerText = "Merge Performance";
    maintext_web = "Merge Performance";
}
function change_web_1_hover(){
    document.getElementById('largework-web').style.background = img_web_1;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largeworktitle-web').innerText = "Inspiration Stables";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-web').style.width = "90%";
}
function change_web_2_hover(){
    document.getElementById('largework-web').style.background = img_web_2;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-web').innerText = "Easier Games";
    document.getElementById('largework-web').style.width = "90%";
}
function change_web_3_hover(){
    document.getElementById('largework-web').style.background = img_web_3;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-web').innerText = "Easier Tickets";
    document.getElementById('largework-web').style.width = "90%";
}
function changeout_web(){
    if(mainimg_web == "Yes"){
    document.getElementById('largework-web').style.background = mainimg_web;
    document.getElementById('largework-web').style.backgroundSize = "cover";
    document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-web').innerText = maintext_web;
    document.getElementById('largework-web').style.width = "90%";
    }else{
        document.getElementById('largework-web').style.background = mainimg_web;
        document.getElementById('largework-web').style.backgroundSize = "cover";
        document.getElementById('largework-web').style.backgroundRepeat = "no-repeat";
        document.getElementById('largeworktitle-web').innerText = maintext_web;
        document.getElementById('largework-web').style.width = "90%";
    }
}

//Photography
function change_photo_1(){
    document.getElementById('largework-photo').style.background = img_photo_1;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-photo').style.width = "90%";
    mainimg_photo = img_photo_1;
    mainimg_photo_set = "Yes";
    largeworklink_photo = "https://www.matthewstevens.me/photo/";
    document.getElementById('largeworktitle-photo').innerText = "Inspiration Stables";
    maintext_photo = "Inspiration Stables";
}
function change_photo_2(){
    document.getElementById('largework-photo').style.background = img_photo_2;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-photo').style.width = "90%";
    mainimg_photo_1 = img_photo_2;
    mainimg_photo_set = "No";
    largeworklink = "https://www.matthewstevens.me/3d-design/";
    document.getElementById('largeworktitle-photo').innerText = "Easier Games";
    maintext_photo = "Easier Games";
}
function change_photo_3(){
    document.getElementById('largework-photo').style.background = img_photo_3;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-photo').style.width = "90%";
    mainimg_photo = img_photo_3;
    mainimg_photo_set = "No";
    largeworklink = "https://www.matthewstevens.me/photography/";
    document.getElementById('largeworktitle-photo').innerText = "Merge Performance";
    maintext_photo = "Merge Performance";
}
function change_photo_1_hover(){
    document.getElementById('largework-photo').style.background = img_photo_1;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largeworktitle-photo').innerText = "Inspiration Stables";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largework-photo').style.width = "90%";
}
function change_photo_2_hover(){
    document.getElementById('largework-photo').style.background = img_photo_2;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-photo').innerText = "Easier Games";
    document.getElementById('largework-photo').style.width = "90%";
}
function change_photo_3_hover(){
    document.getElementById('largework-photo').style.background = img_photo_3;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-photo').innerText = "Easier Tickets";
    document.getElementById('largework-photo').style.width = "90%";
}
function changeout_photo(){
    if(mainimg_photo == "Yes"){
    document.getElementById('largework-photo').style.background = mainimg_photo;
    document.getElementById('largework-photo').style.backgroundSize = "cover";
    document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
    document.getElementById('largeworktitle-photo').innerText = maintext_photo;
    document.getElementById('largework-photo').style.width = "90%";
    }else{
        document.getElementById('largework-photo').style.background = mainimg_photo;
        document.getElementById('largework-photo').style.backgroundSize = "cover";
        document.getElementById('largework-photo').style.backgroundRepeat = "no-repeat";
        document.getElementById('largeworktitle-photo').innerText = maintext_photo;
        document.getElementById('largework-photo').style.width = "90%";
    }
}