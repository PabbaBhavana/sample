import { MyserviceService } from './myservice.service';
import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private service:MyserviceService,private router:Router) { }
  list={};
  ngOnInit():void{
    this.service.getdetails().subscribe(data=>this.list=data);
  }}
  
