export class ContactInformation {

    private _email : string;

    constructor(
        private _id : number,
        private _phoneNumberOne : string,
        private _phoneNumberTwo : string
    ) {
        this._email = null;
    }

    get id() {
        return this._id;
    }

    set id(id : number) {
        this._id = id;
    }

    get phoneNumberOne() {
        return this._phoneNumberOne;
    }

    set phoneNumberOne(phoneNumberOne : string) {
        this._phoneNumberOne = phoneNumberOne;
    }

    get phoneNumberTwo() {
        return this._phoneNumberTwo;
    }

    set phoneNumberTwo(phoneNumberTwo : string) {
        this._phoneNumberTwo = phoneNumberTwo;
    }

    get email() {
        return this._email;
    }

    set email(email : string) {
        this._email = email;
    }

}