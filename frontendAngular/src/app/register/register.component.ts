import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  register() {
    let bodyData = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
    };

    this.http.post("http://localhost:9992/student/create", bodyData).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert("Student Registration successful");
      },
      (error) => {
        console.error("Error during registration:", error);
        alert("Registration failed");
      }
    );
  }

  save() {
    this.register();
  }
}