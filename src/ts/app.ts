import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
console.log(cart.items);

// Задача 1
console.log('-----------Задача 1')
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(263531, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 199));

console.log(cart.items);

// Задача 2
console.log('-----------Задача 2')
console.log(`Товаров на сумму ${cart.getTotal()}`);
console.log(`Товаров на скмму ${cart.getTotal()}. Со скидкой 10 % - ${cart.getTotalWithDiscount(10)}`);

cart.deleteItem(263531);
console.log(cart.items);
console.log(`Товаров на сумму ${cart.getTotal()}`);
console.log(`Товаров на скмму ${cart.getTotal()}. Со скидкой 10 % - ${cart.getTotalWithDiscount(10)}`);

// Задача 3
console.log('-----------Задача 3')
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Smartphone(1544, 'Siemens', 'C65', 500));
cart.add(new Smartphone(1544, 'Siemens', 'C65', 500, 3));
console.log(cart.items);
console.log(`Товаров на сумму ${cart.getTotal()}`);
