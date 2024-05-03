let kattszam1=0
let kattszam2=0
let kattszam3=0
let tepontszam=0;
let geppontszam=0;

let tepont=document.getElementById("tepont");
tepont.innerHTML=tepontszam;
let geppont=document.getElementById("geppont");
geppont.innerHTML=geppontszam;

let kep1=document.getElementById("kep1")
let kep2=document.getElementById("kep2")
let kep3=document.getElementById("kep3")

let ellendiv=document.getElementById("ellendiv");
let ellenkep=document.createElement("img")
ellenkep.src="ko.png"
ellendiv.appendChild(ellenkep)


function keret1()
{
    
    
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
    


}
function keret2()
{
    
    
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

}
function keret3()
{
    
    
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
}
let eredmeny=document.getElementById("eredmeny")

