import Buyable from '../domain/Buyable';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';


export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    try {

      const inCart: boolean = this.items.find((el: Buyable) => item.id === el.id) ? true : false;
      const single: boolean = item.type === 'Book' || item.type === 'Music album' || item.type === 'Movie'
      if (inCart && single) {
        throw new Error(`Товары типа "${item.type}" могут быть только в единственном экземпляре`);
      }

      // if (inCart) {
      //   const index: number = this.items.findIndex((el) => el.id === item.id);
      //   this._items[index].amount += item.amount;
      // }

      this._items.push(item);

    } catch (error) {
      console.error(error)
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotal(): number {
    const goods: Buyable[] = this.items;
    const amoung: number = goods.reduce((acc: number, curr: Buyable) => acc + (curr.price * curr.amount), 0);
    return amoung;
  }

  getTotalWithDiscount(percent: number): number {
    const total: number = this.getTotal();
    const discount: number = total * (percent / 100);
    return total - discount;
  }

  deleteItem(id: number): void {
    this._items = this.items.filter((item: Buyable) => item.id !== id);
  }

}
