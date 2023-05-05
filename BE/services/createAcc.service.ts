import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class CreateAccService {
    private apiURL = "http://localhost/api/create-account/create-account.php";

    constructor (private http: HttpClient) {}

    createAccount(name:string, studyField: string, username:string, password:string, email:string):Observable<any>{
        const user = {
            fullName: name,
            studyField: studyField,
            username: username,
            password: password,
            email: email
        }
        return this.http.post<any>(this.apiURL, user);
    }
}