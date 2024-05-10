let kattszam1=0
let kattszam2=0
let kattszam3=0
let tepontszam=0;
let kivalasztottkep;
let geppontszam=0;
let eredmeny=document.getElementById("eredmeny")

let tepont=document.getElementById("tepont");
tepont.innerHTML=tepontszam;
let geppont=document.getElementById("geppont");
geppont.innerHTML=geppontszam;

let kep1=document.getElementById("kep1")
let kep2=document.getElementById("kep2")
let kep3=document.getElementById("kep3")

let ellendiv=document.getElementById("ellendiv");
let ellenkep=document.createElement("img")

ellendiv.appendChild(ellenkep)
let randomszam=Math.floor(Math.random() * 3)

function random()
{
    randomszam=Math.floor(Math.random() * 3)
    if(randomszam==0)
    {
        ellenkep.src="ko.png"

    }
    else if(randomszam==1)
    {
        ellenkep.src="ollo.png"

    }
    else
    {
        ellenkep.src="Paper.png"

    }

}
function dontetlen()
{
    if(kivalasztottkep.src==ellenkep.src)
    {
        eredmeny.innerHTML="Döntetlen"
    }
}





function keret1()
{
    kivalasztottkep=kep1.src;
    
    if(kattszam1%2==0)
    {
    kep1.style.border="solid 3px red";
    kattszam1++;
    }
    else{
        kep1.style.border="none";
        kattszam1++;

    }
  

    kep2.style.border="none"
    kep3.style.border="none"

    kattszam2=0
    kattszam3=0

    random()
    dontetlen()
    


}
function keret2()
{
    kivalasztottkep=kep2.src;
    
    if(kattszam2%2==0)
    {
    kep2.style.border="solid 3px red";
    kattszam2++;
    }
    else{
        kep2.style.border="none";
        kattszam2++;

    }
    kep1.style.border="none"
    kep3.style.border="none"
    kattszam1=0
    kattszam3=0

    random()
    dontetlen()

}
function keret3()
{
    
    kivalasztottkep=kep3.src;
    if(kattszam3%2==0)
    {
    kep3.style.border="solid 3px red";
    kattszam3++;
    }
    else{
        kep3.style.border="none";
        kattszam3++;

    }
    kep1.style.border="none"
    kep2.style.border="none"
    kattszam1=0
    kattszam2=0

    random()
    dontetlen()
}



