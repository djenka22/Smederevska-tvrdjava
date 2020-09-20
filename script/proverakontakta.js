function proveraForme()
{
var ime = document.registration.ime.value;
var adresa = document.registration.adresa.value;
var mesto = document.registration.mesto.value;
var drzava = document.registration.drzava.value;
var pol = document.registration.gender.value;
var email = document.registration.email.value;
var obavestenja = document.registration.dane.checked;
var komentar = document.registration.komentar.value;

if(ProveriIme(ime,1,50))
{
if(ProveriMejl(email,1,50))
{
var LinijaTeksta=ime+";"+adresa+";"+mesto+";"+drzava+";"+pol+";"+email+";"+obavestenja+";"+komentar;
SnimiuFajl(LinijaTeksta);
	alert("Zahvaljujemo Vam na registraciji");
}	
}

return false;

} 

function ProveriIme(naziv,mx,my)
{
var naziv_len = naziv.length;
if (naziv_len == 0 || naziv_len >= my || naziv_len < mx)
{
alert("Morate uneti ime i prezime, od: "+mx+" do: "+my+ " karaktera");
document.registration.ime.focus();
return false;
}
return true;
}

function ProveriMejl(uemail,mx,my)
{
var naziv_len = uemail.length;
if (naziv_len == 0 || naziv_len >= my || naziv_len < mx)
{
alert("Morate uneti mejl adresu, od: "+mx+" do: "+my+ " karaktera");
document.registration.email.focus();
return false;
}
return true;
}
function closeMe()
{
    window.opener = self;
    window.close();
}
function AktivnoPolje() {
    var x = document.activeElement.tagName;
    document.getElementById("poruka").innerHTML = x;    
}
function DatumVreme() {
var d = new Date();

document.getElementById("vreme").innerHTML = d;
}
function SnimiuFajl(tekst){
	alert(tekst);
}

