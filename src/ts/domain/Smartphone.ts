import Buyable from './Buyable'

export default class Smartphone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly model: string,
    readonly price: number,
    readonly amount: number = 1,
    readonly type: string = 'Smartphone',
  ) { }
};
