import { SchoolClass } from './../school-class/school-class';
import { Address } from './../address/address';
import { ContactInformation } from './../contact-information/contact-information';

export class Student {

    constructor(
        private _id : number,
        private _registry : string,
        private _name : string,
        private _dateOfBirth : Date,
        private _contactInformation : ContactInformation,
        private _address : Address,
        private _schoolClass : SchoolClass
    ) { }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get registry() {
        return this._registry;
    }

    set registry(registry : string) {
        this._registry = registry;
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

    get schoolClass() {
        return this._schoolClass;
    }

    set schoolClass(schoolClass : SchoolClass) {
        this._schoolClass = schoolClass;
    }

}