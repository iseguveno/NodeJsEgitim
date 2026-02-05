'uses strict';
let i=0;
console.time("Süre");

for(i=1;i<20;i++){
    console.log("İşlem sayısı: "+i);
}
console.timeEnd("Süre");