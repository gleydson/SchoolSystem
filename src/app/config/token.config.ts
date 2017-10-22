export class TokenConfig {
    
    public setLocalToken(token : string) : void {
        localStorage.setItem('token', JSON.stringify(token));
    }

    public getLocalToken() : string {
        return localStorage.getItem('token');
    }

    public removerLocalToken() : void {
        localStorage.removeItem('token');
    }

}