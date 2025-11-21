
'use strict';
console.log("İlk uygulama");

function islem() {

  uzunBirIslem();

  console.log('Merhaba Dünya');

}

function uzunBirIslem() {

 setTimeout(function () {

    let i = 0;

    while (i < 10E9) { i++; }

    console.log('İşlem tamamlandı');

  }, 0);
}

islem();
