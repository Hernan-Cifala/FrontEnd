import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private login:LoginService, private router:Router) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
      }
    )
   }
   
  ngOnInit(): void {
  }

  onLogin() {
    this.login.login(this.form.value)
      .then(response => {
      console.log(response);
      console.log("Inicio de sesion exitoso");
      this.router.navigate(['/admin']);
    })
      .catch(error => { 
        console.log(error);
        console.log("Inicio de sesion fallido");
    })
  }
  
  get Email() {
    return this.form.get("email");
  }
  get Password() {
    return this.form.get("password");
  }

}
