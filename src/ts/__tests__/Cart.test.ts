import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Smartphone from '../domain/Smartphone';

describe('Cart', () => {
  test('should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
  })

  test('should return total', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Smartphone(1544, 'Siemens', 'C65', 500));
    cart.add(new Smartphone(1544, 'Siemens', 'C65', 500, 3));

    expect(cart.getTotal()).toBe(4900);
  })

  test('should return total with 10% discount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));

    expect(cart.getTotalWithDiscount(10)).toBe(1800);
  })

  test('should delete item by ID', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.deleteItem(1008);

    expect(cart.items.length).toBe(1);
  })

  test('should add only one item', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));

    expect(cart.items.length).toBe(1);
  })

  test.todo('Увеличение количества единиц товара вместо добавления ного, если он уже есть в корзине');
  test.todo('Уменьшение единиц товара в корзине');
});
