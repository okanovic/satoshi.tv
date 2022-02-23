import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../model/user-model';

@Injectable({providedIn: 'root'})
export class SharedDataService {

    private userInformations = new BehaviorSubject<UserModel>(new UserModel());
    currentUser = this.userInformations.asObservable();
    constructor() { }

    setUser(user:UserModel){
        this.userInformations.next(user)   
    }
    
}