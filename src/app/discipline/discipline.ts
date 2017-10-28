import { AnnualNotes } from './../annual-notes/annual-notes';

export class Discipline {

    constructor(
        private _id : number,
        private _name : string,
        private _annual_notes : AnnualNotes
    ) { }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get name() {
        return this.name;
    }

    set name(name : string) {
        this._name = name;
    }

    get annual_notes() {
        return this._annual_notes;
    }

    set annual_notes(annual_notes : AnnualNotes) {
        this._annual_notes = annual_notes;
    }
}