                    var i = 0;
                    var video = [];
                    var vidsource = document.createElement('source');
                    var image = [];

                    video[0] = "videos/cyberpunk_2077.mp4";
                    video[1] = "videos/borderlands3.mp4";
                    video[2] = "videos/callofdutymw.mp4";
                    video[3] = "videos/watch_dogs_legion.mp4";
                    video[4] = "videos/last_of_us_2.mp4";


                    image[0] = "url('images/carousel/cyberpunk_2077.jpg')";
                    image[1] = "url('images/carousel/borderlands3.jpg')";
                    image[2] = "url('images/carousel/callofdutymw.jpg')";
                    image[3] = "url('images/carousel/watch_dogs_legion.jpg')";
                    image[4] = "url('images/carousel/last_of_us_2.jpg')";

                        function carouselvideo(e) {
                            runvid();
                        }
                        function runvid(){
                            vidsource.setAttribute('src', video[i]);
                            document.getElementById('carouselvid').setAttribute('src', video[i]);
                            document.getElementById('carouselleft').style.background = image[i];
                            document.getElementById('carouselright').style.background = image[i];
                            img();
                            document.getElementById('carouselvid').load();
                            document.getElementById('carouselvid').play();
                            if(i < video.length - 1){
                                i++
                            }else{
                                i = 0;
                            }
                        }
                        function img(){
                            document.getElementById('carouselleft').style.backgroundSize = "cover";
                            document.getElementById('carouselright').style.backgroundSize = "cover";
                            document.getElementById('carouselleft').style.backgroundPosition = "center";
                            document.getElementById('carouselright').style.backgroundPosition = "center";
                        }
                        window.onload = function(){
                        document.getElementById('carouselvid').addEventListener('ended',carouselvideo,false);
                        runvid();
                    }