import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(263531, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 199));

console.log(cart.items);
console.log(`Товаров на сумму ${cart.getTotal()}`);
console.log(`Товаров на скмму ${cart.getTotal()}. Со скидкой 10 % - ${cart.getTotalWithDiscount(10)}`);

cart.deleteItem(263531);
console.log(cart.items);
console.log(`Товаров на сумму ${cart.getTotal()}`);
console.log(`Товаров на скмму ${cart.getTotal()}. Со скидкой 10 % - ${cart.getTotalWithDiscount(10)}`);
