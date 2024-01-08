import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

   isLogin:boolean=true;
   consoleMessage:string="";
   

  constructor(private http: HttpClient, private router: Router) {}
 

  login() {
    
    console.log(this.email);
    console.log(this.password);
    
    

    let bodyData = {
      email: this.email,
      password: this.password,      
    };
    
    this.http.post("http://localhost:9992/student/login", bodyData).subscribe(
      (
        
        resultData: any) => {

          console.log(resultData);
          
        if (resultData.status) {
          this.router.navigateByUrl('/home');
        } else {
          alert("Incorrect Email or Password");
        }
      },
      (error) => {
        console.error("Error during login:", error);
        alert("Login failed");
      }
    );
  }

  save() {
    this.login();
  }
}
