import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {
      path: '',
      component: LoginComponent // Use 'component' instead of 'Component'
    },
    {
      path: 'home',
      component: HomeComponent // Use 'component' instead of 'Component'
    },
    {
      path: 'register',
      component: RegisterComponent // Use 'component' instead of 'Component'
    }
  ];