export class SchoolClass {
    constructor(
        private _id : number,
        private _name : string,
        private _numberOfStudents : number
    ) {}

    get id() : number {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get name() : string {
        return this._name;
    }

    set name(name : string) {
        this._name = name;
    }

    get numberOfStudents() : number {
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents : number) {
        this._numberOfStudents = numberOfStudents;
    }
    
}