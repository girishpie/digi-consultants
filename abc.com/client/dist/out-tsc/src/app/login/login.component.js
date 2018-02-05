"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import {userService} from '../user/user.service';
var LoginComponent = (function () {
    //   status:string;  
    //  username: string;
    //
    //    upassword : string;
    //    router: Router;
    //    currentUser: User = new User();
    //    
    //    
    //      service : userService; 
    function LoginComponent() {
        //        this.service = service;
        //        this.router = router;
        //        
    }
    LoginComponent.prototype.SubmitUser = function () {
        //make wen service call to db using services 
        //     this.service.AuthenticateUser(this.username,this.upassword).then((res) => {
        //        
        //        console.log(res);
        //      var obj = JSON.parse(res);
        //        if (obj.status=="OK"){
        //            
        //            localStorage.setItem('UserName',this.username);
        //            this.router.navigateByUrl('/home');
        //        }
        //        else
        //        {
        //           alert("Invalid UserName and password");
        //        }
        //          
        //    })    
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './login.component.html',
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map