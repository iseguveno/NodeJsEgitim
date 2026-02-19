var lastname = "Canan";

//console.log(firstName + " " + lastname);

//nodejs de çalıştırıldığında hata verir çünkü global objesi window değil global dir
var age=25; //age değişkeni scriptB de kullanılamaz çünkü global obje değil local bir değişkendir.

var  yaz=function(bilgi){

    console.log(bilgi);
}
//yaz("Yaş local değişken tanımlandı:"+age)

//module.exports.yaz=yaz; //scriptB yazdığımız fonksiyonu dışarı aktarıldı
//module.exports.lastname=lastname; //scriptB yazdığımız lastname değişkenini dışarı aktarıldı
//age değişkenini dışarı aktarmadık çünkü scriptA de kullanmayacağız.

//bu şekildede tanımlanabilir.
exports={
    yaz,
    lastname
}