export class Address {

    private _id : number;

    constructor(
        private _street : string,
        private _houseNumber : number,
    	private _complement : string,
        private _district : string,
        private _city : string,
        private _state : string
    ) {
        this._id = null;
    }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get street() {
        return this._street;
    }

    set street(street : string) {
        this._street = street;
    }

    get houseNumber() {
        return this._houseNumber;
    }

    set houseNumber(houseNumber : number) {
        this._houseNumber = houseNumber;
    }

    get complement() {
        return this._complement;
    }

    set complement(complement : string) {
        this._complement = complement;
    }

    get district() {
        return this._district;
    }

    set district(district : string) {
        this._district = district;
    }

    get city() {
        return this._city;
    }

    set city(city : string) {
        this._city = city;
    }

    get state() {
        return this._state;
    }

    set state(state : string) {
        this._state = state;
    }

}