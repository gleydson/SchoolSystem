import { Student } from './../student/student';
import { Discipline } from './../discipline/discipline';

export class SchoolClass {
    constructor(
        private _id : number,
        private _name : string,
        private _numberOfStudents : number,
        private _listDisciplines : Array<Discipline>,
        private _listStudents : Array<Student>
    ) { }

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

    get listDisciplines() {
        return this._listDisciplines;
    }

    set listDisciplines(listDisciplines : Array<Discipline>) {
        this._listDisciplines = listDisciplines;
    }

    get listStudents() {
        return this._listStudents;
    }

    set listStudents(listStudents : Array<Student>) {
        this._listStudents = listStudents;
    }

}