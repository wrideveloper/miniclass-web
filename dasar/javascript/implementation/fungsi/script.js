//pertama dengan cara biasa tidak menggunakan fungsi
var a = 8;
var b = 3;
var volumeA;
var volumeB;
var total;
volumeA = a * a * a;
volumeB = b * b * b;

total = volumeA + volumeB;
console.log(total);

//kedua dengan menggunakan fungsi
function jumlahVolumeDuaKubus(a,b) {
    var volumeA;
    var volumeB;
    var total;
  
    volumeA = a * a * a;
    volumeB = b * b * b;
  
    total1 = volumeA + volumeB;
    return total1;
    
  }
  
  console.log(jumlahVolumeDuaKubus(8,6));
//   console.log(jumlahVolumeDuaKubus(9,3));
//   console.log(jumlahVolumeDuaKubus(5,10));
  