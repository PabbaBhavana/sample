import { MyserviceService } from './../myservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
public list=[];
private firstname:String;
  constructor(private service:MyserviceService) { }

  ngOnInit(): void {
    this.service.getbyname(this.firstname).subscribe(data=>this.list=data);
  }

}
