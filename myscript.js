




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

