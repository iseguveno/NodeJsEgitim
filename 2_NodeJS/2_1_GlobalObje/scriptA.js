//tarayıcı tarafı
    //tarayıcıda hata vermez çünkü window global bir objedir
    var firstName = "Hasan";
    console.log(window); 

    //nodejs de çalıştırıldığında hata verir çünkü global objesi window değil global dir
//nodejs tarafı
    //nodejs de windows diye bir global obje yoktur.
    //onun yerine global objesi vardır