import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupModel } from 'app/model/signup.model';
import { AuthService } from 'app/service/auth.service';
import { LocalService } from 'app/service/local-storage.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign_up',
  templateUrl: './sign_up.component.html',
  styleUrls: ['./sign_up.component.css']
})
export class Sign_upComponent implements OnInit {
  public loading = false;
  form: FormGroup;
  constructor(private _router : Router, private _fb:FormBuilder,private _authService : AuthService,private localStore: LocalService, private _toastr : ToastrService) {

    this.form = _fb.group({
      username : new FormControl('', Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

 
   
  onClickSubmit(){

    this._authService.signup(new SignupModel(this.form.value.username, this.form.value.email,this.form.value.password)).toPromise().then(async (res : any) => {
      this.loading = false;
       this.localStore.saveData('token', res.token);
        this._router.navigate(['/home'])
        this._toastr.success('SignUp Successfully','')
  })

}
}

