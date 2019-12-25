import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly type: string = 'Music album',
        readonly amount: number = 1,
    ) { }
}
