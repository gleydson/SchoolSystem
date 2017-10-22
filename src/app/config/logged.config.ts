export class LoggedConfig {
    
    public setLocalIsLogged(is_logged : string) : void {
        localStorage.setItem('is_logged', JSON.stringify(is_logged));
    }

    public getLocalIsLogged() : string {
        return localStorage.getItem('is_logged');
    }

    public removerLocalIsLogged() : void {
        localStorage.removeItem('is_logged');
    }

}