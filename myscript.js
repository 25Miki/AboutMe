

    var hi = document.getElementById("Hi");
    var tryC = document.getElementById("Try-click");

    hi.style.display = "none";
    tryC.style.display = "none";

    setTimeout(apareceHi, 2000);
    setTimeout(desapareceHi, 8000);
    setTimeout(apareceTry, 9000);


    function apareceHi(){
        hi.style.display = "block";  
    }

    function desapareceHi(){
        hi.style.display = "none"
    }

    function apareceTry(){
        tryC.style.display = "block";

    }

    var hi2 = document.getElementById("Hi2");
    var tryC2 = document.getElementById("Try-click2");

    hi2.style.display = "none";
    tryC2.style.display = "none";

    setTimeout(apareceHi2, 2000);
    setTimeout(desapareceHi2, 8000);
    setTimeout(apareceTry2, 9000);


    function apareceHi2(){
        hi2.style.display = "block";  
    }

    function desapareceHi2(){
        hi2.style.display = "none"
    }

    function apareceTry2(){
        tryC2.style.display = "block";

    }


     //Menu

     var ipad = document.getElementById("ipad");
     var ipad2 = document.getElementById("ipad2");


     ipad.addEventListener("load",function(){

        var modalmenu = document.getElementById("modalmenu");


        ipad.addEventListener("click",function(){
                modalmenu.style.display = "block";
        


        }, false);
    }, false);


     ipad2.addEventListener("load",function(){

        var modalmenu = document.getElementById("modalmenu");


        ipad2.addEventListener("click",function(){
                modalmenu.style.display = "block";

        }, false);
    }, false);

   
        
    var span0 = document.getElementsByClassName("close-1")[0];
    var modalmenu = document.getElementById("modalmenu");

    span0.onclick = function() {
    modalmenu.style.display = "none";
    }


    var botonBio = document.getElementById("botonBio");
    var bioM = document.getElementById("bioM");

    
    var botonPros = document.getElementById("botonPros");
    var prosconsM = document.getElementById("prosconsM");

    var botonContact = document.getElementById("botonContact");
    var contactM = document.getElementById("contactM");



    botonBio.addEventListener("click",function(){
        bioM.style.display = "block";

    }, false);

    botonPros.addEventListener("click",function(){
        prosconsM.style.display = "block";

    }, false);

    botonContact.addEventListener("click",function(){
        contactM.style.display = "block";

    }, false);


    var spanB = document.getElementsByClassName("closeB")[0];

    spanB.onclick = function() {
    bioM.style.display = "none";
    }

    var spanP = document.getElementsByClassName("closeP")[0];

    spanP.onclick = function() {
    prosconsM.style.display = "none";
    }

    var spanC = document.getElementsByClassName("closeC")[0];

    spanC.onclick = function() {
    contactM.style.display = "none";
    }







    //Gato

    var a = document.getElementById("todojunto");
    var b = document.getElementById("todojuntoD");


        a.addEventListener("load",function(){

            var svgDoc = a.contentDocument;
            var alfa = svgDoc.getElementById("Gato");
            var modalgato = document.getElementById("modalgato");

            alfa.addEventListener("click",function(){
                    modalgato.style.display = "block";
                    

            }, false);
        }, false);

        b.addEventListener("load",function(){

            var svgDoc = b.contentDocument;
            var beta = svgDoc.getElementById("Gato");
            var modalgato = document.getElementById("modalgato");

            beta.addEventListener("click",function(){
                    modalgato.style.display = "block";
                    

            }, false);
        }, false);
    
        var span = document.getElementsByClassName("close1")[0];
        var modalgato = document.getElementById("modalgato");

        span.onclick = function() {
        modalgato.style.display = "none";
        }


    //Cactus

        a.addEventListener("load",function(){

            var svgDoc = a.contentDocument;
            var alfa = svgDoc.getElementById("Cactus");
            var modalcactus = document.getElementById("modalcactus");

            alfa.addEventListener("click",function(){
                    modalcactus.style.display = "block";
                    

            }, false);
        }, false);

        b.addEventListener("load",function(){

            var svgDoc = b.contentDocument;
            var beta = svgDoc.getElementById("Cactus");
            var modalcactus = document.getElementById("modalcactus");

            beta.addEventListener("click",function(){
                    modalcactus.style.display = "block";
                    

            }, false);
        }, false);
            
        var span2 = document.getElementsByClassName("close2")[0];
        var modalcactus = document.getElementById("modalcactus");

        span2.onclick = function() {
        modalcactus.style.display = "none";
        }

        
    
        
    //Sports

        a.addEventListener("load",function(){

            var svgDoc = a.contentDocument;
            var alfa = svgDoc.getElementById("sports");
            var modalsports = document.getElementById("modalsports");

            alfa.addEventListener("click",function(){
                    modalsports.style.display = "block";
                    

            }, false);
        }, false);

        b.addEventListener("load",function(){

            var svgDoc = b.contentDocument;
            var beta = svgDoc.getElementById("sports");
            var modalsports = document.getElementById("modalsports");

            beta.addEventListener("click",function(){
                    modalsports.style.display = "block";
                    

            }, false);
        }, false);
            
        var span3 = document.getElementsByClassName("close3")[0];
        var modalsports = document.getElementById("modalsports");

        span3.onclick = function() {
        modalsports.style.display = "none";
        }


    //Games
        a.addEventListener("load",function(){

            var svgDoc = a.contentDocument;
            var alfa = svgDoc.getElementById("Games");
            var modalgames = document.getElementById("modalgames");

            alfa.addEventListener("click",function(){
                    modalgames.style.display = "block";
                    

            }, false);
        }, false);

        b.addEventListener("load",function(){

            var svgDoc = b.contentDocument;
            var beta = svgDoc.getElementById("Games");
            var modalgames = document.getElementById("modalgames");

            beta.addEventListener("click",function(){
                    modalgames.style.display = "block";
                    

            }, false);
        }, false);
            
        var span4 = document.getElementsByClassName("close4")[0];
        var modalgames = document.getElementById("modalgames");

        span4.onclick = function() {
        modalgames.style.display = "none";
        }


    var filtro1 = document.getElementById("filtro1");
    var filtro2 = document.getElementById("filtro2");
    var filtro3 = document.getElementById("filtro3");
    var filtro4 = document.getElementById("filtro4");
    var filtro5 = document.getElementById("filtro5");


    var bombilla = document.getElementById("bombilla");
    var count = 0;


    bombilla.onclick = function() {
    count++;

    var n = Math.floor(count / 6);
    var result = count - n * 6;
    console.log(result);

    switch (result){

        case 0:
            filtro5.style.display = "none";
            break;

        case 1:
            filtro1.style.display = "block";
            break;

        case 2:
            filtro2.style.display = "block";
            filtro1.style.display = "none";

            break;

        case 3:
            filtro3.style.display = "block";
            filtro2.style.display = "none";

            break;

        case 4:
            filtro4.style.display = "block";
            filtro3.style.display = "none";

            break;

        case 5:
            filtro5.style.display = "block";
            filtro4.style.display = "none";

            break;

        default:

    }
    }

