export class AnnualNotes {

    private _id : number;
    private _bim1 : number;
    private _bim2 : number;
    private _bim3 : number;
    private _bim4 : number;

    constructor() {
        this._id = null;
        this._bim1 = null;
        this._bim2 = null;
        this._bim3 = null;
        this._bim4 = null;
    }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get bim1() {
        return this._bim1;
    }

    set bim1(bim1 : number) {
        this._bim1 = bim1;
    }

    get bim2() {
        return this._bim2;
    }

    set bim2(bim2 : number) {
        this._bim2 = bim2;
    }

    get bim3() {
        return this._bim3;
    }

    set bim3(bim3 : number) {
        this._bim3 = bim3;
    }

    get bim4() {
        return this._bim4;
    }

    set bim4(bim4 : number) {
        this._bim4 = bim4;
    }

}