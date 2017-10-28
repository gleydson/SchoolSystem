import { Student } from './../student/student';
import { Discipline } from './../discipline/discipline';
import { AnnualNotes } from './../annual-notes/annual-notes';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { SchoolClass } from './school-class';
import { TokenConfig } from './../config/token.config';
import { Constants } from 'app/util/constants.util';

@Injectable()
export class SchoolClassService {

  private listSchoolClass : Array<SchoolClass>;

  public constructor (
    private http : Http,
    private tokenConfig : TokenConfig
  ) {
    this.listSchoolClass = new Array<SchoolClass>();
  }

  public create(schoolClass : SchoolClass) : Observable<SchoolClass> | SchoolClass {
    return this.http.post(`${Constants.URL_SCHOOL_CLASS}`, schoolClass, this.header())
    .map((response:Response) => {
        let schoolClass = response.json();
        this.listSchoolClass.push(new SchoolClass(schoolClass.name, schoolClass.numberOfStudents));
        return schoolClass;
    })
    .catch((error: Response) => Observable.throw(error));
  }

  public read(id : number) {
    /*return this.http.get(`${Constants.URL_SCHOOL_CLASS}${id}`, this.header())
    .map((response:Response) => {
      let schoolClass : SchoolClass = response.json();
      return new SchoolClass(schoolClass.id, schoolClass.name, schoolClass.numberOfStudents);
    })
    .catch((error:Response) => Observable.throw(error));*/
    for (let schoolClass of this.listSchoolClass)
      if (schoolClass.id == id)
      return schoolClass;
    return null;
  }

  public update(schoolClass : SchoolClass) : Observable<SchoolClass> | SchoolClass {
    return this.http.put(`${Constants.URL_SCHOOL_CLASS}`, schoolClass, this.header())
    .map((response:Response) => {
        let sc = response.json();
        for (let schoolClass of this.listSchoolClass)
            if (schoolClass.id == sc.id) {
                let i = this.listSchoolClass.indexOf(schoolClass);
                this.listSchoolClass[i] = sc;
            }
        return sc;
    })
    .catch((error: Response) => Observable.throw(error));
  }

  public delete(schoolClass : SchoolClass) {
    return this.http.delete(`${Constants.URL_SCHOOL_CLASS}${schoolClass.id}`, this.header())
    .map((response:Response) => {
        let i = this.listSchoolClass.indexOf(schoolClass);
        this.listSchoolClass.splice(i, 1);
    })
    .catch((error:Response) => Observable.throw(error));
  }

  public getAll() {
    /*return this.http.get(`${Constants.URL_SCHOOL_CLASS}`, this.header())
    .map((response : Response) => {
        let listSchoolClass : SchoolClass[] = [];
        for(let schoolClass of response.json())
            listSchoolClass.push(new SchoolClass(schoolClass.id, schoolClass.name, schoolClass.numberOfStudents));
        this.listSchoolClass = listSchoolClass;
        return listSchoolClass;
    })
    .catch((error : Response) => Observable.throw(error));*/
    return this.listSchoolClass;
  }

  private header() : RequestOptions {
    let headers = new Headers({
        'Authorization' : this.tokenConfig.getLocalToken(),
        'Content-Type'  : 'application/json'
    });
    return new RequestOptions({ headers: headers });
  }

}
