import { Address } from './../address/address';
import { ContactInformation } from './../contact-information/contact-information';

export class Relative {

    private _id : number;
    private _contactInformation : ContactInformation;
    private _address : Address;

    constructor(
        private _name : string,
        private _dateOfBirth : Date,
        private _kinship : string
    ) {
        this._id = null;
        this._contactInformation = null;
        this._address = null;
    }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name : string) {
        this._name = name;
    }

    get dateOfBirth() {
        return this._dateOfBirth;
    }

    set dateOfBirth(dateOfBirth : Date) {
        this._dateOfBirth = dateOfBirth;
    }

    get kinship() {
        return this._kinship;
    }

    set kinship(kinship : string) {
        this._kinship = kinship;
    }

    get contactInformation() {
        return this._contactInformation;
    }

    set contactInformation(contactInformation : ContactInformation) {
        this._contactInformation = contactInformation;
    }

}