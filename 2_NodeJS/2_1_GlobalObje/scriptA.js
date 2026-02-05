//tarayıcı tarafı
    //tarayıcıda hata vermez çünkü window global bir objedir
   // var firstName = "Hasan";
    //console.log(window); 

    //nodejs de çalıştırıldığında hata verir çünkü global objesi window değil global dir
//nodejs tarafı
    //nodejs de windows diye bir global obje yoktur.
    //onun yerine global objesi vardır
     const ScriptB=require('./scriptB');
     
     ScriptB.yaz("Merhaba ScriptB deki "+ScriptB.lastname); //scriptB den dışarı aktardığımız yaz fonksiyonunu kullandık