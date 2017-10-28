import { SchoolClass } from './../school-class/school-class';

export class SchoolYear {

    private _listSchoolClasses : Array<SchoolClass>;

    constructor(
        private _id : number,
        private _year : number,
        private _status : string
    ) {
        this._listSchoolClasses = new Array<SchoolClass>();
    }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get year() {
        return this._year;
    }

    set year(year : number) {
        this._year = year;
    }

    get status() {
        return this._status;
    }

    set status(status : string) {
        this._status = status;
    }

    get listSchoolClasses() {
        return this._listSchoolClasses;
    }

    set listSchoolClasses(listSchoolClasses : Array<SchoolClass>) {
        this._listSchoolClasses = listSchoolClasses;
    }

}