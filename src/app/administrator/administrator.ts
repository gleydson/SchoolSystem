export class Administrator {
    
    constructor(
        private _username : string,
        private _password : string
    ) { }

    get username() : string {
        return this._username;
    }

    set username(username : string) {
        this._username = username;
    }

    get password() : string {
        return this._password;
    }

    set password(password : string) {
        this._password = password;
    }

}