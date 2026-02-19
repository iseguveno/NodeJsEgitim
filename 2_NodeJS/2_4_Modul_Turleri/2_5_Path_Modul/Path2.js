//path modülü, dosya ve dizin yolları ile çalışmak için kullanılır.
const path = require('path');

const yol=path.resolve(__dirname,'Rücu.txt'); //Çalışma dizinine göre mutlak yol döner.

console.log("---"+yol+"---");

const dosya_uzantisi=path.extname(yol); //Dosya uzantısını döner.
console.log("Dosya uzantısı: "+dosya_uzantisi);
