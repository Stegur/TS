import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getTotal(): number {
    const goods: Buyable[] = this.items;
    const amoung: number = goods.reduce((acc: number, curr: Buyable) => acc + curr.price, 0);
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
