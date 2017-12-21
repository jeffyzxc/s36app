import { Subject } from 'rxjs/Subject'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

export class LoginService {
    
    private isLogin:boolean = false;
    userAuth = new Subject();
    public isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public canGoBack:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoaded:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    authUser(){
        if(!this.isLogin)
            this.isLogin = true;

        return this.isLogin;
    }

    getAuth(){
        return this.isLogin;
    }

    destroyAuth() {
        if(this.isLogin)
            this.isLogin = false;

        return this.isLogin;
    }

    
}