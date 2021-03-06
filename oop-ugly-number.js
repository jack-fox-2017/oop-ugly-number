/**
Ugly numbers adalah angka yang jika dibagi dengan faktor prima angka 2, 3 atau 5 menghasilkan angka 1.

Contoh, apakah 300 merupakan ugly number atau bukan. Langkah untuk mengetahuinya sebagai berikut:
300 dibagi 2 akan mendapatkan hasil 150
150 dibagi 2 akan mendapatkan hasil 75
Angka 75 jika dibagi 2 akan menghasilkan sisa bagi > 0, maka selanjutnya
75 dibagi 3 akan mendapatkan hasil 25
Angka 25 jika dibagi 3 akan menghasilkan sisa bagi > 0, maka selanjutnya
25 dibagi 5 akan mendapatkan hasil 5
5 dibagi 5 akan mendapatkan hasil 1

Karena kita sudah mendapatkan hasil 1 maka 300 adalah ugly number.

Dibawah merupakan implementasi pencarian ugly number berdasarkan urutan deretan angka.
Jika memasukkan parameter 7 maka output hasilnya adalah ugly number: 8
Jika memasukkan parameter 10 maka output hasilnya adalah ugly number 12
Jika memasukkan parameter 15 maka output hasilnya adalah ugly nymber 24
Jika memasukkan parameter 150 maka output hasilnya adalah ugly number 5832
Dst…..

**/

'use strict'

class UglyNumber {

  constructor() {
    this.deret = 1;
    this.nowNumber = 1;
    this.arrUgly = [];
  }

}

var ugly = new UglyNumber();
var uglyarray = new UglyNumber();

console.log(ugly.getUglyNo(25));

console.log(ugly.isUgly(14));
console.log(ugly.isUgly(45));
console.log(ugly.isUgly(57));

console.log(uglyarray.getUglyArray(12));
//driver code
