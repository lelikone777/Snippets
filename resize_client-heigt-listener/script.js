

     window.addEventListener("resize", function() {
         document.querySelector('body').style.height = window.screen.height + 'px';

        document.querySelector('html').style.height = window.screen.height + 'px';

        console.log(document.querySelector('body'));
        console.log(document.querySelector('html'));
}, false);

     let mql = window.matchMedia("(orientation: portrait)");
     if(mql.matches) {
    }

     mql.addListener(function(m) {
        if(m.matches) {
         }
        else {
         }
     });


