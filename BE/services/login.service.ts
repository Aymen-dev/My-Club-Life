import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private apiURL = "http://localhost/api/login/login.php";

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        const user = {
            username: username,
            password: password
        }
        return this.http.post<any>(this.apiURL, user);
    }
}