var appleTopFiyat = 0;
var apricotTopFiyat = 0;
var grapeTopFiyat = 0;
var orangeTopFiyat = 0;
var pearTopFiyat = 0;
var watermelonTopFiyat = 0;
var toplamFiyat = 0;
var toplamIndirimliFiyat = 0;
function appleTutar() {

    var cboxApple = document.getElementById("applebox");
    var numApple = document.getElementById("appleNumber");
    if (cboxApple.checked == true); {
        appleTopFiyat = parseFloat(cboxApple.value) * parseFloat(numApple.value);
    }
}
function apricotTutar() {

    var cboxApricot = document.getElementById("apricotbox");
    var numApricot = document.getElementById("apricotNumber");
    if (cboxApricot.checked == true); {
        apricotTopFiyat = parseFloat(cboxApricot.value) * parseFloat(numApricot.value);
    }
}
function grapeTutar() {

    var cboxGrape = document.getElementById("grapebox");
    var numGrape = document.getElementById("grapeNumber");
    if (cboxGrape.checked == true); {
        grapeTopFiyat = parseFloat(cboxGrape.value) * parseFloat(numGrape.value);
    }
}
function orangeTutar() {

    var cboxOrange = document.getElementById("orangebox");
    var numOrange = document.getElementById("orangeNumber");
    if (cboxOrange.checked == true); {
        orangeTopFiyat = parseFloat(cboxOrange.value) * parseFloat(numOrange.value);
    }
}
function pearTutar() {

    var cboxPear = document.getElementById("pearbox");
    var numPear = document.getElementById("pearNumber");
    if (cboxPear.checked == true); {
        pearTopFiyat = parseFloat(cboxPear.value) * parseFloat(numPear.value);
    }
}
function watermelonTutar() {

    var cboxWatermelon = document.getElementById("watermelonbox");

    var numWatermelon = document.getElementById("watermelonNumber");

    if (cboxWatermelon.checked == true); {

        watermelonTopFiyat = parseFloat(cboxWatermelon.value) * parseFloat(numWatermelon.value);
    }
}
function karOraniGirildi() {
    var girilenKO = document.getElementById("karOrani");

    toplamFiyat = appleTopFiyat + apricotTopFiyat + grapeTopFiyat + orangeTopFiyat + pearTopFiyat + watermelonTopFiyat;

    toplamIndirimliFiyat = toplamFiyat - toplamFiyat * parseFloat(girilenKO.value) / 100;



    document.getElementById("sonuc").innerHTML = "İndirimli Toplam Tutar : " + toplamIndirimliFiyat +" TL'dir.";

}