import { SchoolClass } from './../school-class/school-class';
import { Address } from './../address/address';
import { ContactInformation } from './../contact-information/contact-information';

export class Teacher {

    private _id : number;
    private _contactInformation : ContactInformation;
    private _address : Address;
    private _listClasses : Array<SchoolClass>;

    constructor(
        private _name : string,
        private _dateOfBirth : Date,
    ) {
        this._id = null;
        this._contactInformation = null;
        this._address = null;
        this._listClasses = new Array<SchoolClass>();
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
        return this.dateOfBirth;
    }

    set dateOfBirth(dateOfBirth : Date) {
        this._dateOfBirth = dateOfBirth;
    }

    get contactInformation() {
        return this._contactInformation;
    }

    set contactInformation(contactInformation : ContactInformation) {
        this._contactInformation = contactInformation;
    }

    get address() {
        return this._address;
    }

    set address(address : Address) {
        this._address = address;
    }

    get listClasses() {
        return this._listClasses;
    }

    set listClasses(listClasses : Array<SchoolClass>) {
        this._listClasses = listClasses;
    }

}