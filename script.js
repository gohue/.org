    var toggleBtn = document.querySelector(".toggleBtn");
    var menu = document.querySelector (".menu");




    //MENU ANIMATION
    var tl = new TimelineMax({paused: true});

    tl.to(".menu.icon", 1.6, {
        opacity: 0,
        rotation: 180
    })


    tl.reverse();

    toggleBtn.onclick = function(){
        tl.reversed(!tl.reversed());
    }





