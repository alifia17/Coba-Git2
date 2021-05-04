// import readBooks from './callback.js'; //ini kl penulisan di ES6
var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

/*books.forEach(element => readBooks(10000, element, (coba) => {
    console.log(coba)
  })) //nah pake cara ini bisa nih bri tapi kecetak dulu element di array nya baru nnti dia proses lagi yg beserta angkanya
  */

  books.forEach(element => readBooks(1000, element, 0)) // nah kalo yang ini urutannya bener + dia berakhir di angka 0/waktunya habis

  

