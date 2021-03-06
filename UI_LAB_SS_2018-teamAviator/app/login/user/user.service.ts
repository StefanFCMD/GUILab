import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Config } from "./config";
import { User } from "./user";

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    login(user: User) {
        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey + "/login",
            JSON.stringify({
                username: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        )
            .map((response) => response.json())
            .do((data) => {
                Config.token = data._kmd.authtoken;
            })
            .catch(this.handleErrors);
    }

    getCommonHeaders() {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", Config.authHeader);

        return headers;
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));

        return Observable.throw(error);
    }
}
