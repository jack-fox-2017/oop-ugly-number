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
    this.deret = 1; //count // SALAH
    this.nowNumber = 0; // i // SALAH 0 or 1 bingug
    this.arrUgly = [];
  }

  maxDivides(number, divisible){
    while(number % divisible == 0) {
      number = number / divisible;
      // console.log(number);

    }
    return number;
  }

  isUgly(numberUgly){
    // let outcome =0;
    // console.log(numberUgly);
    numberUgly = this.maxDivides(numberUgly, 2);
    // if (outcome ==1) {return true;}
    numberUgly = this.maxDivides(numberUgly, 3);
    // if (outcome ==1) {return true;}
    numberUgly = this.maxDivides(numberUgly, 5);
    // if (outcome ==1) {return true;}
    // console.log((outcome == 1) ? 'lol' : 'nooo');
    return (numberUgly == 1) ? true : false; // knpa gk bisa pake outcome satu2?
  }

  getUglyNo(input){
    while(input >= this.deret) {
      this.nowNumber++;

      if(this.isUgly(this.nowNumber) == 1) {
        this.deret++;
        // this.arrUgly.push(this.nowNumber);
      }
    }
    return this.nowNumber;
  }

  getUglyArray(input){
    while(input >= this.deret) {
      this.nowNumber++;

      if(this.isUgly(this.nowNumber) == 1) {
        this.deret++;
        this.arrUgly.push(this.nowNumber);
      }
    }
    return this.arrUgly;
  }


}

var ugly = new UglyNumber();
var ugly2 = new UglyNumber();
var uglyarray = new UglyNumber();

//driver code

console.log(ugly.getUglyNo(7));
console.log(ugly.getUglyNo(150));
console.log(ugly2.getUglyNo(25));

console.log(ugly.isUgly(14));
console.log(ugly.isUgly(45));
console.log(ugly.isUgly(57));

console.log(uglyarray.getUglyArray(12));
